import { useState, useEffect } from "react";

const User = (props) => {
    const { user, handleUsers } = props;
    const [name, setName] = useState(user.name || "");

    useEffect(() => {
        setName(user.name);
    }, [user])

    const updateUser = (e) => {
        e.preventDefault();
        handleUsers(name);
     }

    return(
    <div style={{ boxShadow: "0px 0px 2px #aaa", boxSizing: "border-box", background: "#F9f9f9", padding: "20px", textAlign: "center", width: "100%", maxWidth: "640px", margin: "15px auto"}}>
        <form onSubmit={updateUser}>
            Name: <input type="text" onChange={(e) => setName(e.target.value)} name="name" value={name} />&nbsp;
            <button id="btnSubmit" name="submit" value="Submit">Submit</button>
        </form>
    </div>)

    }

export default User