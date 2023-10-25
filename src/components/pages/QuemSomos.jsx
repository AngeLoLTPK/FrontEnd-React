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
import CardUser from "../ui/CardUser.jsx";

export const QuemSomos = () => {

  let [users, setUsers] = useState([]);
  let [showModal, setShowModal] = useState(false);
 


  useEffect(() => {

    const getUsers = async () => {
      const response = await fetch("http://localhost:3000/user/list")
      const data = await response.json()
      console.log(data.success)
      console.log(data.users)
      setUsers(data.users)
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
      setShowModal(false)
      setUsers([...users, data.user])
    }

  };

  //   const handlePut = async (event) => {
  //     event.preventDefault()
  //     const newUser = {
  //       name: name,
  //       email: email,
  //       photo: photo,
  //       id: users.id
  //     }
  //     const response = await fetch('http://localhost:3000/user', {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(newUser)
  //     })

  //       console.log(id)

  //     if (response.ok) {
  //       const data = await response.json()
  //       alert(data.success)
  //       setShowEditModal(false)
  //       const newUsers = users.map((userC) => {
  //         if (userC.id == users.id) {
  //           return data.users
  //         } else {
  //           return userC
  //         }
  //       })
  //       setUsers(newUsers)
  //     }

  //   }

  // const HandleDelete = async (id) => {

  //   const response = await fetch('http://localhost:3000/user', {
  //     method: 'Delete',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ id: id })
  //   })

  //   if (response.ok) {
  //     const data = await response.json()
  //     alert(data.success)
  //     setShowModal(false)
  //     setUsers([...users, data.user])
  //     const newUsers = users.filter((user) => user.id != id)
  //     setUsers(newUsers)
  //   }


  // }





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
{/* 
          {
            users === false ? <p>Nenhum usuário cadastrado...</p> : users.length > 0 ? users.map((user) => {

              return <CardUser key={user.id} user={user} users={users} setUsers={setUsers} />

              //  return <CardUser user={user} />

            }) : <p>Loading...</p>
          } */}

        </Content>
      </div>
      <Footer></Footer>
    </>
  )
};

export default QuemSomos;