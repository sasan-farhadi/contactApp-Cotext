import { useContext } from 'react';
import styles from './List.module.css'
import { ContactContext } from '../App';
import ListItem from './ListItem';
import Search from './Search';


const List = () => {
    const { contacts } = useContext(ContactContext)
    return (
        <>
            <div className={styles.search}>
                <Search />
            </div>
            <div className={styles.list}>
                <h1>Contact List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(contact => (<ListItem key={contact.id} data={contact} />))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default List
