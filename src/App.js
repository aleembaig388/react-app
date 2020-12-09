import './App.css';
import { useEffect, useState } from 'react';
import List from "./list";
import User from "./user";

function App() {
  const [users, setUsers] = useState([]);
  const [editUserID, setEditUserID] = useState(null);

  useEffect(() => {
    let userss = [];
    userss.push({id: "1", name: "aleem", email: "aleem@yahoo.com"});
    userss.push({id: "2", name: "waseem", email: "waseem@yahoo.com"});
   setUsers(userss);
  }, []);

  return (
    <div className="App">
      {<b>{users.length}</b> }  
      {users && <List list={users} setUserID={setEditUserID} />}
      {editUserID && <User users={users} setUsers={setUsers} user={users.find(user => user.id.includes(editUserID))} /> }
    </div>
  );
}

export default App;
