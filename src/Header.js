import React, { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import './Header.css';

function Header() {
    const [dark, dispatch] = useStateValue();

    const shareDarkMode = () => {
        dispatch({
            type: "SET_DARK",
            dark: !dark.dark
        });
        if(localStorage.getItem('theme') === "light"){
            localStorage.setItem('theme', "dark")
        }
        else{
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <div className="header">
            <button onClick={shareDarkMode}>SEND dark mode</button>
        </div>
    )
}

export default Header
