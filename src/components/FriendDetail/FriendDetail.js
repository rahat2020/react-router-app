import React, { useEffect, useState } from 'react';
import { useParams, } from 'react-router';

const FriendDetail = () => {
    const {friendId, email, phone,} = useParams()
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setFriend(data))
    },[])
  
    return (
        <div>
            <h2>show user Id: {friendId}</h2>
            <h3>show name of this user: {friend.name}</h3>
            <p> show email of this user: {friend.email}</p>
            {/* <p>show address of this user: {friend}</p> */}
            <p> show phone of this user: {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;