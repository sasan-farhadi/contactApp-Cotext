import { useContext, useState } from 'react'
import styles from './List.module.css'
import { ContactContext } from '../App'

const ListItem = ({ data: { id, fullname, email, phone } }) => {
    const {
        editHandler,
        deleteHandler
    } = useContext(ContactContext)

    const [checkId, setCheckId] = useState([])
    const selectionRecord = e => {
        const ids = e.target.id
        if (e.target.checked) {
            setCheckId(checkId => [...checkId, ids])
        }
    }
    console.log(checkId)

    return (
        <tr key={id}>
            <td>
                <input
                    type="checkbox"
                    name={fullname}
                    id={id}
                    style={{ transform: "scale(1.2)" }}
                    onChange={(e) => selectionRecord(e)} />
            </td>
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
