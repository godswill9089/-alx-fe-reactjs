import React from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const userData = useContext(useContext);
  return (
    <div style= {{ border: '1px solid gray', padding: '10px', margin: '10px'}}>
      <h2 style= {{ color:'blue'}}>{name}</h2>
      <p>Age: <span style={{ fontWeight:'bold'}}>{age}</span></p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
