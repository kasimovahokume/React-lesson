import PropTypes from 'prop-types';

export function UserCard({name, age, isOnline, onMessage}) {
    return(
        <div>
            <h2>Ad: {name}</h2>
            <p>Yas: {age}</p>
            <p>Status: {isOnline ? "Online" : "Oflayn"}</p>
            <button
            onClick={()=>onMessage(name)}>
            Mesaj yaz</button>
        </div>
    );
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isOnline: PropTypes.bool,
    onMessage: PropTypes.func.isRequired
}