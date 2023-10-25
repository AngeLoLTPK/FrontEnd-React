import './CardUser.css'
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import { BiEdit as IconEdit } from "react-icons/bi"
import { FaTrash as IconTrash } from "react-icons/Fa"

const CardUser = ({ user, users, setUsers }) => {

  const [edit, setEdit] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);


  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [photo, setPhoto] = useState(user.photo);



  const handlePut = async (event) => {
    event.preventDefault()
    const newUser = {
      id: user.id,
      name: name,
      email: email,
      photo: photo
    }
    const response = await fetch('http://localhost:3000/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

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
      setEdit([edit, newUsers])
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
      {/* <div className="card-user"> */}
      {/* <img src={user.photo} alt={user.name} /> */}
      <div>
        {/* <h3>{user.name}</h3>
            <span>{user.email}</span>
            <IconEdit className='icon-edit' onClick={() => setShowEditModal(true)} />
            <IconTrash className='icon-trash' onClick={() => handleDelete(user.id)} /> */}


        <Card key={user.id} style={{ width: '18rem', margin: "15px", position: "relative" }}>
          <Card.Img variant="top" src={user.photo} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>  {user.email} </Card.Text>


            <IconEdit style={{ width: "45px", position: "absolute", bottom: "80px", right: "40px", color: "green" }} onClick={() => setShowEditModal(true)} />


            <IconTrash style={{ position: "absolute", bottom: "80px", right: "10px", width: "45px", color: "red" }} onClick={() => HandleDelete(user.id)} />
          </Card.Body>
        </Card>


      </div>
      {/* </div> */}
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
    </>
  )
}

export default CardUser;