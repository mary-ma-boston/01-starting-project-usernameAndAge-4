import React, {useState}from 'react';

import AddUsers from './comonents/Users/AddUsers';
import UsersList from './comonents/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevState)=>{
      return [...prevState, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }

  return (
    <>
      <AddUsers onAddUser = {addUserHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
