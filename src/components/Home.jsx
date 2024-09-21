import styles from './Home.module.css'
import { FcContacts } from "react-icons/fc";
import inputs from '../constant/inputs';
import { useContext, useEffect } from 'react';
import { ContactContext } from '../App';
import { randomId, regex, regexEn } from './helpers/regex'


const Home = () => {

    const { contact, setContact, contacts, setContacts } = useContext(ContactContext)

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
    }, [])


    const addHanlder = () => {
        if (!contact.fullname || !contact.email || !contact.phone) {
            alert("enter valid data!")
            return
        } else if (!contact.email.match(regex)) {
            alert("enter valid email")
            return
        }

        const newContact = { ...contact, id: randomId }
        setContacts(contacts => ([...contacts, newContact]))
        saveLoaclstorage()

        setContact({
            id: '', fullname: '', email: '', phone: ''
        })
    }


    return (
        <>
            <div className={styles.contact}>
                <div className={styles.logo}>
                    <h1><FcContacts size={80} /></h1>
                </div>
                {
                    inputs.map((input, index) => {
                        return (
                            <input key={index}
                                type={input.type}
                                name={input.name}
                                placeholder={input.placeholder}
                                onChange={changeHandler}
                                value={contact[input.name]} />
                        )
                    })
                }
                <button onClick={addHanlder}>Add</button>
            </div>
        </>
    )
}

export default Home
