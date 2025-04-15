import React, { Fragment } from "react";
import "./EditModal.css";
import { createPortal } from "react-dom";

const BacGround = ({ onclose }) => {
  return <div className="bg" onClick={onclose}></div>;
};
const Form = ({ name, Email ,userid,Upadate}) => {
  return (
    <div className="inputForm">
      <label>Name</label>
      <input placeholder="Name" ref={name} />

      <label>Email</label>
      <input placeholder="Email" ref={Email} />
      <button className="Save" onClick={()=>Upadate(userid)}>save</button>
    </div>
  );
};
const EditModal = ({ isModalOpen, onclose, name, Email , userid ,Upadate}) => {
  return createPortal(
    <Fragment>
      <BacGround onclose={onclose} />
      <Form name={name} Email={Email} userid={userid}  Upadate={Upadate}/>
    </Fragment>,

    document.getElementById("Modal")
  );
};

export default EditModal;
