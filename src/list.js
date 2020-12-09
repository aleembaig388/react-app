import { useEffect, useState } from "react";

const List = (props) => {
   const { list, setUserID } = props;
    return(
        <table border="2" cellPadding="2" style={{ textAlign: "left"}}>
            <tbody>
            {list.map(user => (
                <tr key={"list-" + user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><button id="btnEdit" onClick={(e) => {e.preventDefault(); setUserID(user.id)}} value="Edit" name="Edit">Edit</button></td>
                </tr>    
            ))}
            </tbody>
        </table>
    );
 };
 export default List;