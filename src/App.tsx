import { createContext, useState } from 'react'
import './App.css'
//* Components
import Profile from './components/profile'
import UserList from './components/userList'

export const MyContext = createContext('');

function App() {

  const [ myProvider, setMyProvider ] = useState('')
  
  return (
    <>
      <MyContext.Provider value={myProvider}>
        <UserList />
        <Profile />
      </MyContext.Provider>
      
    </>
  )
}

export default App
