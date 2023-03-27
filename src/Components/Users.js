
import User from './User';

import { useUserContext } from './useUserContext';

const Users = () => {
    const {users}=useUserContext()
    return (
        <div className='users'>
            {users.map(user=> <User  key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;