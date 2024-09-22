import { useContext, useState } from 'react'
import styles from './Search.module.css'
import { ContactContext } from '../App'

const Search = () => {

    const { contacts, setContacts } = useContext(ContactContext)
    const [searchValue, setSearchValue] = useState([])
    const [select, setSelect] = useState(-1)

    const searchHandler = (e) => {
        const searchText = e.target.value
        if (select === "fullname") {
            setSearchValue(contacts.filter(x => x.fullname === searchText.toLowerCase().trim()))
        } else if (select === "email") {
            setSearchValue(contacts.filter(x => x.email === searchText.toLowerCase().trim()))
        } else {
            setSearchValue(contacts.filter(x => x.phone === searchText.toLowerCase().trim()))
        }
    }
    return (
        <div className={styles.search}>
            <input
                type="text"
                placeholder='Search By Email ...'
                name='search'
                onChange={e => searchHandler(e)}
            />
            <select value={select} onChange={e => setSelect(e.target.value)} >
                <option value={-1} disabled selected>Search Type</option>
                <option value="fullname" >Name</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
            </select>
            <div className={styles.searchlist}>
                <ul> {
                    searchValue.map(x => {
                        return (
                            <li>{x.fullname}</li>
                        )
                    })
                }
                </ul>

            </div>
        </div>
    )
}

export default Search
