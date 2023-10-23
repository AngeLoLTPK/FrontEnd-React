import './CardUser.css'

import Button from './button'

const CardUser = ({ user }) => {

  return (
    <div className="card-user">
      <img src={user.photo} alt={user.nome} />
      <div>
        <h3>{user.name}</h3>
        <span>{user.email}</span>
      </div>
    </div>
  )
}

export default CardUser