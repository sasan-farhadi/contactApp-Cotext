import Home from "./components/Home"
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import List from "./components/List"
import { createContext, useState } from "react"
export const ContactContext = createContext()

const App = () => {
  const [contact, setContact] = useState({
    id: '', fullname: '', email: '', phone: ''
  })
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) || [])
  const [editRecordId, setEditRecordId] = useState()

  const [showBtnAdd, setShowBtnAdd] = useState("block")
  const [showBtnEdit, setShowBtnEdit] = useState("none")



  let nav = useNavigate()
  const editHandler = (id) => {
    const contactEdit = contacts.find(x => x.id == id)
    setContact(
      {
        fullname: contactEdit.fullname,
        email: contactEdit.email,
        phone: contactEdit.phone,
      })
    setEditRecordId(id)
    setShowBtnAdd("none")
    setShowBtnEdit("block")
    nav('/add')
  }



  const deleteHandler = (id) => {
    const newContacts = contacts.filter((x) => x.id !== id)
    setContacts(newContacts)
    localStorage.setItem("contacts", JSON.stringify(newContacts))
  }

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
          showBtnEdit,
          editHandler,
          deleteHandler
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
