import Home from "./components/Home"
import { Routes, Route, Navigate } from 'react-router-dom'
import List from "./components/List"
import { createContext, useReducer, useState } from "react"
export const ContactContext = createContext()

const App = () => {
  const [contact, setContact] = useState({
    id: '', fullname: '', email: '', phone: ''
  })
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) || [])
  const [editRecordId, setEditRecordId] = useState()

  const [showBtnAdd, setShowBtnAdd] = useState("block")
  const [showBtnEdit, setShowBtnEdit] = useState("none")

  return (
    <div>
      <ContactContext.Provider
        value={{
          contact,
          setContact,
          contacts,
          setContacts,
          editRecordId,
          setEditRecordId,
          setShowBtnAdd,
          showBtnAdd,
          setShowBtnEdit,
          showBtnEdit
        }}>

        <Routes>
          <Route index element={<Navigate to='/add' />} />
          <Route path="add" element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </ContactContext.Provider>
    </div>
  )
}

export default App
