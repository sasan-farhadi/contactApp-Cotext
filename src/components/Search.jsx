import { useContext, useState } from 'react'
import styles from './Search.module.css'
import { ContactContext } from '../App'

const Search = () => {

    const { contacts, setContacts } = useContext(ContactContext)
    const [searchValue, setSearchValue] = useState([])

    const searchHandler = (e) => {
        const searchText = e.target.value
        setSearchValue(contacts.filter(x => x.email === searchText.toLowerCase().trim()))
        console.log(searchValue)
    }
    return (
        <div className={styles.search}>
            <input
                type="text"
                placeholder='Search By Email ...'
                name='search'
                onChange={e => searchHandler(e)}
            />
            <div className={styles.searchlist}>
                {
                    searchValue.map(x => (<ul key={x.id}><li>{x.email}</li></ul>))
                }

            </div>
        </div>
    )
}

export default Search
