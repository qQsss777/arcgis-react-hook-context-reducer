import React, { useContext } from "react";
import { MapContext } from '../context/context';
import Toolbar from './Toolbar';

const Header = () => {
    return (
        <header className="header">
            <Toolbar />
        </header>
    )
}

export default Header;



