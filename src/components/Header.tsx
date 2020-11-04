import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import '../styles/components/header.css';

const options = [
    { value: 'pt-br', label: 'Português - Brasil (pt_br)' }
]

const selectStyle = {
    
}

function Header() {
    return (
        <header className="header">
            <div className="top-header-bar">
                <FiMenu color="#ffffff" size={32} className="menu" />
                <div className="user">
                    <p>
                        <span>Você ainda não se identificou.</span>
                    
                        <Link to="/login" className="access-link">
                            Acessar
                        </Link>
                    </p>
                </div>
            </div>
            
            <div className="bottom-header-bar">
                <Link to="/">
                    <img src="https://moodle.ifrs.edu.br/pluginfile.php/1/theme_academi/logo/1600572157/Logo_04.png" alt="Moodle - IFRS"/>
                </Link>
                
                <Select options={options} styles={selectStyle} className="lang-select" />
            </div>

        </header>
    );
}

export default Header;