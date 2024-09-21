import Home from "./components/Home"
import { Routes, Route, Navigate } from 'react-router-dom'
import List from "./components/List"
import { createContext, useReducer, useState } from "react"
import ListItem from "./components/ListItem"
export const ContactContext = createContext()

const reducer = (state, action) => {
  switch (action) {
    case "edit":
      state("block")
      break;
    case "apply":
      state("none")
      break;
    default:
      throw new Error("Invalid Action")
  }
}

const App = () => {
  const [contact, setContact] = useState({
    id: '', fullname: '', email: '', phone: ''
  })
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) || [])
  const [editRecordId, setEditRecordId] = useState()

  const [editButton, dispatch] = useReducer(reducer, "")

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
          editButton,
          dispatch
        }}>

        <Routes>
          <Route index element={<Navigate to='/add' />} />
          <Route path="add" element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route element={<ListItem />} />
        </Routes>
        {/* <ListItem /> */}
      </ContactContext.Provider>
    </div>
  )
}

export default App
