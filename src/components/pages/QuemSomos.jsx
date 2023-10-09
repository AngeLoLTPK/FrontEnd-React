import Header from "../layout/Header/Header.jsx";
import Aside from "../layout/aside/Aside.jsx";
import Content from "../layout/content/Content.jsx";
import Footer from "../layout/Footer/Footer.jsx";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom";
import { BiEdit as IconEdit } from "react-icons/bi"
import { FaTrash as Lixeira } from "react-icons/Fa"

export const QuemSomos = () => {

  let [users, setUsers] = useState([]);
  let [showModal, setShowModal] = useState(false);
  let [showEditModal, setShowEditModal] = useState(false);


  const [name, setName] = useState(users.name)
  const [email, setEmail] = useState(users.email)
  const [photo, setPhoto] = useState(users.photo)

  const User = users.map((userC) => {
    if (userC.id == users.id) {
      return data.users
    } else {
      return userC
    }
  })

  console.log(user.id)


  useEffect(() => {

    const getUsers = async () => {
      const response = await fetch("http://localhost:3000/user/list")
      const data = await response.json()
      if (response.ok) {
        setUsers(data.users)
      } else {
        setUsers(false)
      }
    };

    getUsers()
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log("Funciona!")

    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      pass: event.target.pass.value,
      photo: event.target.photo.value
    }

    const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

    if (response.ok) {
      const data = await response.json()
      alert(data?.success)


    }

  };

  const handlePut = async (event) => {
    event.preventDefault()
    const newUser = {
      name: name,
      email: email,
      photo: photo,
      id: users.id
    }
    const response = await fetch('http://localhost:3000/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

      console.log(id)

    if (response.ok) {
      const data = await response.json()
      alert(data.success)
      setShowEditModal(false)
      const newUsers = users.map((userC) => {
        if (userC.id == users.id) {
          return data.users
        } else {
          return userC
        }
      })
      setUsers(newUsers)
    }

  }

  const HandleDelete = async (id) => {

    const response = await fetch('http://localhost:3000/user', {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    })

    if (response.ok) {
      const data = await response.json()
      alert(data.success)
      setShowModal(false)
      setUsers([...users, data.user])
      const newUsers = users.filter((user) => user.id != id)
      setUsers(newUsers)
    }


  }





  return (
    <>
      <Header />
      <div id="main">

        <Aside>

          <Button as="button" variant="primary" onClick={() => setShowModal(true)}>Cadastrar úsuario</Button>

          <Modal
            show={showModal}
            onHide={() => setShowEditModal(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Cadastrar Usuário
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" name="name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" name="pass" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>URL Foto</Form.Label>
                  <Form.Control type="text" name="photo" />
                </Form.Group>
                <Button variant="primary" type="submit">Cadastrar</Button>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </Modal.Footer>

          </Modal>




        </Aside>

        <Content>

          {
            users === false ? <p>Nenhum usuário cadastrado...</p> : users.length > 0 ? users.map((user) => {

              return (
                <Card key={user.id} style={{ width: '18rem', margin: "15px", position: "relative" }}>
                  <Card.Img variant="top" src={user.photo} />
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text> ID: {user.id}  </Card.Text>
                    <Card.Text>  {user.email} </Card.Text>

        
                      <IconEdit style={{ width: "45px", position: "absolute", bottom: "110px", right: "40px", color: "green" }} onClick={() => setShowEditModal(true)} />
              

                    <Lixeira style={{ position: "absolute", bottom: "110px", right: "10px", width: "45px", color: "red" }} onClick={() => HandleDelete(user.id)} />
                  </Card.Body>
                </Card>
              );

              //  return <CardUser user={user} />

            }) : <p>Loading...</p>
          }


          {/* modal edit  */}

          <Modal
            show={showEditModal}
            onHide={() => setShowEditModal(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Editar Usuário
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handlePut}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>URL Foto</Form.Label>
                  <Form.Control type="text" name="photo" value={photo} onChange={(event) => setPhoto(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">Editar</Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowEditModal(false)}>Close</Button>
            </Modal.Footer>

          </Modal>


        </Content>
      </div>
      <Footer></Footer>
    </>
  )
};

export default QuemSomos;