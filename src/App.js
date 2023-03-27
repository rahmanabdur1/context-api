
import './App.css';
import NewUser from './Components/NewUser';
import UsersProvider, { UserContexts } from './Components/UserContexts';
import Users from './Components/Users';

function App() {

 
  return (
 <UsersProvider>
     <div className='App'>
     <NewUser/>
     <Users/>
    </div>
 </UsersProvider>
  );
}

export default App;
