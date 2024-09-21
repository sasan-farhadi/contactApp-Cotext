import Home from "./components/Home"
import { Routes, Route, Navigate } from 'react-router-dom'
import List from "./components/List"
import { createContext, useState } from "react"

export const ContactContext = createContext()
const App = () => {

  const [contact, setContact] = useState({
    id: '', fullname: '', email: '', phone: ''
  })
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) || [])

  return (
    <div>
      <ContactContext.Provider value={{ contact, setContact, contacts, setContacts }}>
        <Routes>
          <Route index element={<Navigate to='/add' />} />
          <Route path="add" element={<Home />} />
          <Route path="list" element={<List />} />
        </Routes>
      </ContactContext.Provider>
    </div>
  )
}

export default App
