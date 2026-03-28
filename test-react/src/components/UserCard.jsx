

import PropTypes from 'prop-types'

export const UserCard = ({name, age, isOnline}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{isOnline ? "Online" : "Oflayn"}</p>
    </div>
  )
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired
}