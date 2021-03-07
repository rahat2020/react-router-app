import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const {name,email, id}  = props.friend
    const divStyle ={
        border: '1px solid purple',
        margin: '20px',
        padding: '10px'
    }
    return (
        <div style={divStyle}>
            <h2>Name {name}</h2>
            <p>Email {email}</p>
            <p> Id:  <Link to={`/friend/${id}`}>
              <button>  show detail of {id} </button>
                </Link></p>
            {/* <p> Id:  <Link to={`/friend/${id}`}>show detail of {id} </Link></p> */}
        </div>
    );
};

export default Friends;