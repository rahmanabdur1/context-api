
import { useUserContext } from './useUserContext';

const User = ({user}) => {
    const {users,setUsers}=useUserContext()
    const {id, username}=user;

    const handleDelete=(id)=>{
       const filterUser =users.filter((user)=> user.id !== id);
       setUsers(filterUser)
    }
    return (
        <article className='user'>
            <h2>{id}</h2>
            <p>{username}</p>
            <button onClick={()=>handleDelete(id)}>Delete</button>

        </article>
    );
};

export default User;