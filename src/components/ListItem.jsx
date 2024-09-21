import { useContext } from 'react'
import styles from './List.module.css'
import { ContactContext } from '../App'
import { useNavigate } from 'react-router-dom'

const ListItem = ({ data: { id, fullname, email, phone } }) => {
    const { contacts, setContacts, setContact, contact, setEditRecordId } = useContext(ContactContext)

    const deleteHandler = (id) => {
        console.log(contacts, id)
        const newContacts = contacts.filter((x) => x.id !== id)
        setContacts(newContacts)
        localStorage.setItem("contacts", JSON.stringify(newContacts))
    }


    let nav = useNavigate()
    const editHandler = (id) => {
        const contactEdit = contacts.find(x => x.id == id)
        setContact(
            {
                fullname: contactEdit.fullname,
                email: contactEdit.email,
                phone: contactEdit.phone,
            })
        nav('/add')
    }
    console.log(contact)

    return (
        <tr>
            <td>{fullname}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td><button className={styles.edit} onClick={() => editHandler(id)}>Edit</button></td>
            <td><button className={styles.delete} onClick={() => deleteHandler(id)}>Delete</button></td>
        </tr>
    )
}

export default ListItem
