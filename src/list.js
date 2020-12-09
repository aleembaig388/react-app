import React from "react"
const List = (props) => {
   const { users, setUserID, handleDelete } = props;
    return(
        <table border="2" cellPadding="2" style={{ background: "#EEE", textAlign: "left", width: "100%", maxWidth: "640px", margin: "15px auto"}}>
            <tbody>
            {users.map(user => (
                <tr key={"list-" + user.id} style={{ background: "#FFF"}}>
                    <td align="center">{user.id}</td>
                    <td>{user.name}</td>
                    <td align="center"><button id="btnEdit" onClick={(e) => {e.preventDefault(); setUserID(user.id)}} value="Edit" name="Edit">Edit</button>&nbsp;|&nbsp;<button id="btnEdit" onClick={(e) => {e.preventDefault(); handleDelete(user.id); }} value="Edit" name="Edit">Delete</button></td>
                </tr>    
            ))}
            </tbody>
        </table>
    );
 };
 export default React.memo(List);