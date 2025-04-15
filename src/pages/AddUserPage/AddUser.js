import React from "react";
import './AdddUser.css';
const AddUser = (props) => {
  return (
    <div className="container">
      <div className="AddUserForm">
        <h1>Add New User</h1>
        <div className="NamePlace">
          <labl>Name</labl>
          <input ref={props.NewName} placeholder="Name" />
        </div>
        <div className="EmailPlace">
          <labl>Email</labl>
          <input  ref={props.NewEmail} placeholder="Email" />
        </div>
        <button onClick={()=>props.AddNewUser()}>Submit</button>
      </div>
    </div>
  );
};

export default AddUser;
