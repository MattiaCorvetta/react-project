import { useParams } from "react-router-dom";
import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";


function Character(){
    let { id }=useParams();
    const [character,setCharacter]=useState([]);
    const [idMax,setIdMax]=useState([]);
    let nextId=parseInt(id)+1;
    let prevId=parseInt(id)-1;
    if (prevId<1)  prevId=idMax;
    if (nextId>idMax) nextId=1;
    let nextLink="/react-project/characters/"+ nextId;
    let prevLink="/react-project/characters/"+ prevId;

    useEffect(()=>{
        fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`)
        .then(res=>res.json())
        .then(res=>{setCharacter(res);})
        .catch((error)=>console.log("error"+error));
        fetch("https://bobsburgers-api.herokuapp.com/characters?sortBy=id&OrderBy=desc&limit=1&skip=0")
        .then(res=>res.json())
        .then(res=>{setIdMax(res[0].id);})
        .catch((error)=>console.log("error"+error));

    }, [id]);
    return(
        <div className="container my-5 text-center">
            <div className="row">
                <div className="col-2 d-flex align-items-center">
                    <Link  to={prevLink}>
                        <Button >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                        </Button>
                    </Link>
                </div>
                <div className="col-8">
                <h2>{character.name}</h2>
                <img src={character.image} class="img-fluid" alt="character" />
                {typeof character.gender !== 'undefined' && (
                <p>gender: {character.gender}</p>
                )}
                {typeof character.age !== 'undefined' && (
                <p>age: {character.age}</p>
                )}
                {typeof character.occupation !== 'undefined' && (
                <p>occupation: {character.occupation}</p>
                )}
                {typeof character.hairColor !== 'undefined' && (
                <p>hair color: {character.hairColor}</p>
                )}
                {typeof character.firstEpisode !== 'undefined' && (
                <p>first episode: {character.firstEpisode}</p>
                )}
                {typeof character.voicedBy !== 'undefined' && (
                <p>voiced by: {character.voicedBy}</p>
                )}
                </div>
                <div className="col-2 d-flex align-items-center">
                    <Link  to={nextLink}>
                        <Button >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                        </Button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Character;