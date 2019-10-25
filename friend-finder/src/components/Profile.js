import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";

// Styling CSS
import "./Profile.css";

export default function Profile(props) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${props.match.params.id}/friends`)
      .then(response => {
        // console.log(response);
        setFriends(response.data.friends);
      })
      .catch(err => console.log(err.response));
  }, []);

  return (
    <div className="Profile">
      <div className="Leftside">
        <div className="Userimgbox">User Image</div>
        <div className="Friend-list">
          <h2>Friends</h2>
          {friends.map(friend => {
            return (
              <div className="FriendCard">
                <ProfileCard key={friend.id} friend1={friend} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="Rightside">
        <ProfileForm />
      </div>
    </div>
  );
}
