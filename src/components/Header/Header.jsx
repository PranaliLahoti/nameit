import React from 'react';
import './Header.css'
const Header = (props) => {

    return (
        <div className="header-container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className={`header-image ${props.headerExpanded ? 'header-image-expanded' : 'header-image-contracted'}`}
                alt="Header Image"></img>
            <h1 className={`header-text ${props.headerExpanded ? 'header-text-expanded' : 'header-text-contracted'}`}>{props.appTitle}</h1>
        </div>
    )
}

export default Header