import styles from './Home.module.css'
import { FcContacts } from "react-icons/fc";
import inputs from '../constant/inputs';
import { useContext, useEffect, useState } from 'react';
import { ContactContext } from '../App';
import { regex, regexEn } from './helpers/regex'
import { useNavigate } from 'react-router-dom';
import Error from './Error';
import { useReducer } from 'react';

const Home = () => {

    const saveLoaclstorage = () => {
        localStorage.setItem("contacts", JSON.stringify(contacts))
    }

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts))
    })


    const reducer = (state, action) => {
        switch (action) {
            case "keyboard":
                return state = "Please Set Your Keyboard To English!"
            case "valid":
                return state = "enter valid data!"
            case "email":
                return state = "enter valid email"
            case "none":
                return state = "none"
            default:
                throw new Error("Invalid value")
        }
    }
    const [alert, dispatch] = useReducer(reducer, "")
    console.log(alert)


    const {
        contact,
        setContact,
        contacts,
        setContacts,
        editRecordId,
        showBtnAdd,
        showBtnEdit,
        setShowBtnAdd,
        setShowBtnEdit
    } = useContext(ContactContext)

    const changeHandler = event => {
        const name = event.target.name
        const value = event.target.value.toLowerCase()
        setContact(contact => ({ ...contact, [name]: value }))

        if (regexEn.test(value)) {
            setContact(contact => ({ ...contact, [name]: value }))
        } else {
            dispatch("keyboard")
            return
        }
    }

    const addHanlder = () => {

        if (!contact.fullname || !contact.email || !contact.phone) {
            dispatch("valid")
            return
        } else if (!contact.email.match(regex)) {
            dispatch("email")
            return
        }

        const randomId = (Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000)
        const newContact = { ...contact, id: randomId }
        setContacts(contacts => ([...contacts, newContact]))
        saveLoaclstorage()

        setContact({
            id: '', fullname: '', email: '', phone: ''
        })
        dispatch("none")
    }


    const nav = useNavigate()
    const applyEditHandler = () => {
        const newEditContact = contacts.find(x => x.id == editRecordId)
        newEditContact.fullname = contact.fullname
        newEditContact.email = contact.email
        newEditContact.phone = contact.phone
        setContacts(contacts => ([...contacts]))
        saveLoaclstorage()
        setShowBtnAdd("block")
        setShowBtnEdit("none")
        nav('/list')

        setContact({
            id: '', fullname: '', email: '', phone: ''
        })
    }

    return (
        <>
            <div className="error">
                {
                    alert && <Error alert={alert} display={"block"} />
                }
            </div>
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
                <button style={{ display: showBtnAdd }} onClick={addHanlder}>Add</button>
                <button style={{ display: showBtnEdit }} onClick={applyEditHandler}>Edit</button>
            </div>
        </>
    )
}

export default Home
