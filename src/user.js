import { useState, useEffect } from "react";

const User = (props) => {
    let latIs = 0;
    const { user, users,  setUsers, setUserID} = props;
    const [name, setName] = useState(user.name || "");
    const [email, setEmail] = useState(user.email || "");

    const handleUsers = (e) => {
        e.preventDefault();
        let objIndex = users.findIndex((obj => obj.id == user.id));
        users[objIndex].name = name;
        users[objIndex].email = email;
        setUsers(users);
    }

    useEffect(() => {
        setEmail(user.email);
        setName(user.name);
    }, [user])

    return(
    <div>
        <form onSubmit={handleUsers}>
            Name: <input type="text" onChange={(e) => setName(e.target.value)} name="name" value={name} />
            Email: <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
            <button id="btnSubmit" name="submit" value="Submit">Submit</button>
        </form>
    </div>)

    }

export default User