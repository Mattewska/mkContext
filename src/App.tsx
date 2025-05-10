import './App.css'
//* Components
import Profile from './components/profile'
import UserList from './components/userList'
import { ContextUse } from './context/context'

function App() {

  
  return (
    <>
      <ContextUse>
        <UserList />
        <Profile />
      </ContextUse>
      
    </>
  )
}

export default App
