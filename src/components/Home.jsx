import styles from './Home.module.css'
import { FcContacts } from "react-icons/fc";
import inputs from '../constant/inputs';
import { useContext, useEffect } from 'react';
import { ContactContext } from '../App';
import { regex, regexEn } from './helpers/regex'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const { contact, setContact, contacts, setContacts, editRecordId  } = useContext(ContactContext)

    const changeHandler = event => {
        const name = event.target.name
        const value = event.target.value.toLowerCase()
        setContact(contact => ({ ...contact, [name]: value }))

        if (regexEn.test(value)) {
            setContact(contact => ({ ...contact, [name]: value }))
        } else {
            alert("Please Set Your Keyboard To English!")
            return
        }
    }

    const saveLoaclstorage = () => {
        localStorage.setItem("contacts", JSON.stringify(contacts))
    }

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts))
    })


    const addHanlder = () => {
        if (!contact.fullname || !contact.email || !contact.phone) {
            alert("enter valid data!")
            return
        } else if (!contact.email.match(regex)) {
            alert("enter valid email")
            return
        }

        const randomId = (Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000)
        const newContact = { ...contact, id: randomId }
        setContacts(contacts => ([...contacts, newContact]))
        saveLoaclstorage()

        setContact({
            id: '', fullname: '', email: '', phone: ''
        })
    }


    const nav = useNavigate()
    const applyEditHandler = () => {
        const newEditContact = contacts.find(x => x.id == editRecordId)
        newEditContact.fullname = contact.fullname
        newEditContact.email = contact.email
        newEditContact.phone = contact.phone
        setContacts(contacts => ([...contacts]))
        saveLoaclstorage()
        nav('/list')
    }

    return (
        <>
            <div className={styles.contact}>
                <div>
                    <h1><FcContacts size={80} /></h1>
                </div>
                {
                    inputs.map((input, index) => {
                        return (
                            <input
                                key={index}
                                type={input.type}
                                name={input.name}
                                placeholder={input.placeholder}
                                onChange={changeHandler}
                                value={contact[input.name]}
                            />
                        )
                    })
                }
                <button onClick={addHanlder}>Add</button>
                <button  onClick={applyEditHandler}>Edit</button>
            </div>
        </>
    )
}

export default Home
