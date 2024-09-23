import { useContext, useState } from 'react'
import styles from './Search.module.css'
import { ContactContext } from '../App'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const {
        contacts,
        setContact,
        setEditRecordId,
        setShowBtnAdd,
        setShowBtnEdit
    } = useContext(ContactContext)
    const [searchValue, setSearchValue] = useState([])
    const [select, setSelect] = useState("email")

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





    return (
        <div className={styles.search}>
            <input
                type="text"
                placeholder={`Search By ${select} ...`}
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
                            <li>
                                <div>
                                    {x.fullname}
                                </div>
                                <div>
                                    {x.phone}
                                </div>
                                <div>
                                    <button><FaEdit size={20} color='orange' onClick={() => editHandler(x.id)} /></button>
                                    <button><MdDelete size={20} color='red' /></button>
                                </div>
                            </li>
                        )
                    })
                }
                </ul>

            </div>
        </div>
    )
}

export default Search
