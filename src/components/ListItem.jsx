import { useContext } from 'react'
import styles from './List.module.css'
import { ContactContext } from '../App'

const ListItem = ({ data: { id, fullname, email, phone } }) => {
    const {
        editHandler,
        deleteHandler
    } = useContext(ContactContext)


    return (
        <tr>
            <td>{fullname}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td><button className={styles.edit}
                onClick={() => editHandler(id)}>Edit</button></td>
            <td><button className={styles.delete}
                onClick={() => deleteHandler(id)}>Delete</button></td>
        </tr>
    )
}

export default ListItem
