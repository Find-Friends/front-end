import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const FindFriends = () => {
  const [friends, setFriends] = useState([]);
  const [friendRequest, setRequest] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://find-friends-api.herokuapp.com/api/users/5/all")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(error => {
        console.log("Data was not returned", error);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Find Friends!</h1>
      </div>
    </div>
  );
};
export default FindFriends;
