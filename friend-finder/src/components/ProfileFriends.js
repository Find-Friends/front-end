import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ProfileCard from './ProfileCard';

export default function ProfileFriends() {

    const [friends, setFriends] = useState([]);

    useEffect(()=> {

        axios
        // .get('https://find-friends-api.herokuapp.com/api/users/:id/friends')
        .then(response => {
            setFriends(response.data); 
            console.log(response)})
        .catch(err => console.log(err.response));


    }, [])

    return(

        <section className="friend-list">

        {friends.map(friend => {

            return(
                <ProfileCard key={friend.id} friend1={friend}/>
            )

            })}

        </section>
    );

};