import styles from './Home.module.css'
import { FcContacts } from "react-icons/fc";
import inputs from './constant/inputs';
import { useState } from 'react';

const Home = () => {

    const [contact, setContact] = useState({
        id: '', fullname: '', email: '', phone: ''
    })

    const changeHandler = event => {
        const name = event.target.name
        const value = event.target.value
        setContact(contact => ({ ...contact, [name]: value }))
    }

    return (
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
            <button>Add</button>
        </div>
    )
}

export default Home
