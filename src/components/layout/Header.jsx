import styles from './Header.module.css'

import { IoMdPersonAdd } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <Link to="/add"><li><IoMdPersonAdd size={40} /></li></Link>
                        <Link to="/list"><li><FaListUl size={40} /></li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
