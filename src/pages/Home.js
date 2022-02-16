import { NavLink } from "react-router-dom";
import style from "./Home.module.css";
import {Button} from "reactstrap";
import characterImage from "../assets/charactersHome.png";
function Home(){
    return(
        <div className="container my-5">
            <div className="row text-center">
            <div className="col-md-4 mb-3">
                    <div className="card h-100">
                    <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title">EPISODES LIST</h5>
                        <p className="card-text">Full list of bob's burger episodes, ordered by season</p>
                        <NavLink  to="episodes">
                            <Button >Go to the list</Button>
                        </NavLink>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card h-100">
                        <NavLink to="characters">
                            <div className="card-body">
                                <h5 className="card-title">SEE ALL CHARACTERS!</h5>
                            </div>
                            <img src={characterImage} alt="characters" className={style.charactersImg}></img>
                        </NavLink>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card h-100">
                    <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title">INFO</h5>
                        <p className="card-text">All about this site</p>
                        <NavLink  to="info">
                            <Button >Go to info</Button>
                        </NavLink>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;