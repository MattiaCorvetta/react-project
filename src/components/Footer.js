import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Footer.module.css"
import Pdf from "../assets/pdf.png";

function Footer (props){
    const{authorName,studentID, documentation,navItems }=props;
    const itemList=navItems.map((item)=>{
        return(
            <li key={item.url} className="nav-item">
                <NavLink
                to={item.url}>
                    {item.text}
                </NavLink>
            </li>
        )
    });
    return(
        <footer>
            <div className="container">
                <div className="row justify-content-between text-center">
                    <div className="col-md-2 my-2">
                    <nav className={style.footerNav}>
                            <ul className="nav flex-column">
                                {itemList}
                            </ul>
                        </nav>
                    </div>

                    <div className="col-md-2 my-5 my-md-2">
                        <div className={style.logo}>
                            <a href={documentation} target="_blank" rel="noreferrer">
                            <img src={Pdf} className={style.logo} alt="download pdf"/>
                                Documentation
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2 my-2">
                        <div id={style.author} >
                            <strong>
                                <p>Created by:</p>
                                <p>{authorName}</p>
                                <p>{studentID}</p>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

