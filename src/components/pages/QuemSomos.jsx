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

export const QuemSomos = () => {

  let [users, setUsers] = useState([]);
  let [showModal, setShowModal] = useState(false);





  useEffect(() => {

    const getUsers = async () => {
      const response = await fetch("http://localhost:3000/user/list")
      const data = await response.json()
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
      alert(data.success)
      setShowModal(false)
      setUsers([...users, data.user])

    }

  };

  return (
    <>
      <Header />
      <div id="main">

        <Aside>

          <Button as="button" variant="primary" onClick={() => setShowModal(true)}>Cadastrar úsuario</Button>

          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
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
            users.length > 0 ? users.map((user) => {

              return (
                <Card key={user.id} style={{ width: '18rem', margin: "15px" }}>
                  <Card.Img variant="top" src={user.photo} />
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text> ID: {user.id}  </Card.Text>
                    <Card.Text>  {user.email} </Card.Text>
                    <Button variant="primary">Editar</Button>
                  </Card.Body>
                </Card>
              );

              //  return <CardUser user={user} />

            }) : <p>Loading...</p>
          }


        </Content>
      </div>
      <Footer></Footer>
    </>
  )
};

export default QuemSomos;