import React from 'react';
import { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then (res => res.json())
      .then(data =>setFriends(data))
    },[])
    return (
        <div>
            <h2>user length{friends.length}</h2>
       {
         friends.map(friend => <Friends friend={friend}></Friends>)
       }
        </div>
    );
};

export default Home;