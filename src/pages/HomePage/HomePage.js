import React from "react";
import "./HomePage.css";
import AddUser from "../AddUserPage/AddUser";
import { Link } from "react-router-dom";



const HomePage = (props) => {
  return (
    <div className="container ">
      <header>
        <h1>React Crud App</h1>
      </header>
      <section className="Button">
       
        <Link to={"/AddUser"}>
          <button>Creat+</button>
        </Link>
      </section>
      <section className="table">
        <table>
          <tr>
            <th>
              <h1>ID</h1>
            </th>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Email</h1>
            </th>
          </tr>
          {props.userlist.map((user, index) => (
            <tr>
              <th>{index}</th>
              <th>{user.Name}</th>
              <th>{user.Email}</th>
              <th>
                <button
                  className="Edite"
                  onClick={() => props.onclose()}
                  onFocus={() => props.GetUserId(user.id)}
                >
                  Edite
                </button>
              </th>
              <th>
                <button
                  className="Delete"
                  onClick={() => props.DeletFun(user.id)}
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </table>
      </section>
    </div>
  );
};

export default HomePage;
