import React, {useState} from 'react';
import UserKit from '../data/UserKit';

export default function UserInfo() {
    const userKit = new UserKit()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    userKit.getMe()
    .then(res => res.json())
    .then(data => {
        setName(data.firstName + ' ' + data.lastName)
        setEmail(data.email)
    })
    return (
        <div>
            <h1>Welcome {name} to Business Application</h1>
            <h2>Din email: {email}</h2>      
        </div>
    )
}
