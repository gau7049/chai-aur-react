import { useState } from 'react'
import './App.css'
import UserContextProvider from './user/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Reactjs learning useContext concept</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
