import React, {useState} from 'react';
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,} from "reactstrap";
import {NavLink} from 'react-router-dom';
import style from "./Header.module.css";

const Header = (props)=>{
    const {navItems, logo}=props;
    const [isOpen, setIsOpen]=useState(false);
    const toggle=()=> setIsOpen(!isOpen);
    const itemList=navItems.map((item)=>{
        return(
            <NavItem key={item.url} className="nav-item">
                <NavLink
                    to={item.url}
                    className='nav-link'>
                {item.text}
                </NavLink>
            </NavItem>
        )
    });
    return(
        <div className={style.navBar}>
            <div className='container'>

                <Navbar expand="md" light>
                    <NavbarBrand>
                        <NavLink to="" className='nav-link'>
                                    <img className={style.logo} src={logo} alt="logo"/>
                        </NavLink>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className='mr-auto' navbar>
                            {itemList}
                        </Nav>
                    </Collapse>
                </Navbar>

            </div>
        </div>
    );
}
export default Header;
