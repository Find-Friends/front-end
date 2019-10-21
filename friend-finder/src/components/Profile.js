import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ProfileCard from './ProfileCard';
import ProfileForm from './ProfileForm';
export default function Profile() {

    const [friends, setFriends] = useState([]);

    // useEffect(()=> {

    //     axios
    //    .get('https://find-friends-api.herokuapp.com/api/users/:id/friends')
    //     .then(response => {
    //         setFriends(response.data); 
    //         console.log(response)})
    //     .catch(err => console.log(err.response));


    // }, [])

    return(


        

        <section className="friend-list">

        <ProfileForm/>
        

        {friends.map(friend => {
            
            return(
                
                <div>
                    <a>Friend</a>
               
                <ProfileCard key={friend.id} friend1={friend}/>

                </div>
            )

            })}

        </section>
    );

};