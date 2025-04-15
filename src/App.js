import "./App.css";
import AddUser from "./pages/AddUserPage/AddUser";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect, useReducer, useRef, useState } from "react";
import EditModal from "./pages/EditModal/EditModal";
import { Route, Routes } from "react-router-dom";
function App() {
  const [User, setuser] = useState(() => {
    const SaveUser = localStorage.getItem("User");
    return SaveUser ? JSON.parse(SaveUser) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userid, setuserid] = useState(0);
  const [id, setid] = useState(() => {
    const Saveid = localStorage.getItem("id");
    return Saveid ? JSON.parse(Saveid) : [];
  });
  const name = useRef();
  const Email = useRef();
  const NewName = useRef();
  const NewEmail = useRef();

  const AddNewUser = () => {
    setuser([
      ...User,
      { id: id, Name: NewName.current.value, Email: NewEmail.current.value },
    ]);
    setid(id + 1);
    NewName.current.value = "";
    NewEmail.current.value = "";
  };

  useEffect(() => {
    localStorage.setItem("User", JSON.stringify(User));
    localStorage.setItem("id", JSON.stringify(id));
  }, [id, User]);

  useEffect(() => {
    let data = localStorage.getItem("User");
    let storedId = localStorage.getItem("id");

    if (data) {
      setuser(JSON.parse(data));
    }
    if (storedId) {
      setid(JSON.parse(storedId));
    }
  }, []);

  const Deletuser = (id) => {
    let data = JSON.parse(localStorage.getItem("User"));
    let filterdata = data.filter((d) => d.id !== id);
    setuser(filterdata);
  };

  const GetUserId = (id) => {
    setuserid(id);
  };

  const Upadate = (id) => {
    if (!name.current || !Email.current) {
      console.error("Input refs are not assigned yet.");
      return;
    }

    let Data = JSON.parse(localStorage.getItem("User"));

    for (let i = 0; i < Data.length; i++) {
      if (Data[i].id === id) {
        Data[i].Name = name.current.value;
        Data[i].Email = Email.current.value;
        break;
      }
    }

    setuser([...Data]);
    localStorage.setItem("User", JSON.stringify(Data));
    setIsModalOpen(false);
    name.current.value = "";
    Email.current.value = "";
  };
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div className="App">
      {isModalOpen && (
        <EditModal
          name={name}
          Email={Email}
          userid={userid}
          Upadate={Upadate}
          openmodal={isModalOpen}
          onclose={toggleModal}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              NewName={NewName}
              NewEmail={NewEmail}
              AddNewUser={AddNewUser}
              GetUserId={GetUserId}
              onclose={toggleModal}
              userlist={User}
              DeletFun={Deletuser}
              Upadate={Upadate}
            />
          }
        />
        <Route
          path="/AddUser"
          element={
            <AddUser
              AddNewUser={AddNewUser}
              NewEmail={NewEmail}
              NewName={NewName}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
