import './App.css';
import { useEffect, useState } from 'react';
import List from "./list";
import User from "./user";
import axios from "axios";

function App() {
  const [userList, setUserList] = useState(null);
  const [editUserID, setEditUserID] = useState(null);

  useEffect(() => {
    axios.get("https://5fc885db2af77700165ad663.mockapi.io/api/v1/product").then(response =>     {
      setUserList(response.data);
    }).catch((ex) => {   
      console.log(ex);  
    });
  }, []);
  

  const handleUsers = (name) => {
    const nUserList = [...userList];
    var objIndex = nUserList.findIndex(userr => userr.id === editUserID);
    nUserList[objIndex].name = name; 
    setUserList(nUserList);
 }

  return (
    <div className="App"> 
      {userList && <List users={userList} setUserID={setEditUserID} />}
      {editUserID && <User users={userList} handleUsers={handleUsers} user={userList.find(user => user.id.includes(editUserID))} /> }
    </div>
  );
}

export default App;
