import React, {useState} from 'react'
import UserKit from '../data/UserKit';

export default function CreateUser() {

    const userKit = new UserKit()

    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userCompany, setUserCompany] = useState("")
    

    function handleCreateUser() {
        userKit.register(userFirstName, userLastName, userEmail, userPassword, userCompany, 0)
      }
    return (
        <div>
            <h1>Register user</h1>
            <input placeholder="First name" value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)}/>
            <input placeholder="Last name" value={userLastName} onChange={(e) => setUserLastName(e.target.value)}/>
            <input placeholder="Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            <input placeholder="Password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
            <input placeholder="Company" value={userCompany} onChange={(e) => setUserCompany(e.target.value)}/>
            <button onClick={handleCreateUser}>Create User</button>
        </div>
    )
}
