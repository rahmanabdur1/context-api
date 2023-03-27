
import { useState } from 'react';
import { useUserContext } from './useUserContext';

const NewUser = () => {
    const {setUsers}=useUserContext()
    const [username,setUsername]=useState("");

    const handleUserName=(e)=>{
        setUsername(e.target.value);
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        const newUser={id:new Date().getTime().toString(), username:username}
        setUsers((pre)=>[...pre,newUser])
        setUsername("")
    }
    return (
        <div>
            <h2>User Registration</h2>
            <form onSubmit={handleOnSubmit}>
                <input type="text" onChange={handleUserName} name="username" value={username}/>
                <button>Add User</button>
            </form>
        </div>
    );
};

export default NewUser;