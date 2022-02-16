import React, {useState,useEffect} from "react";
import CharactersGrid from "../components/CharactersGrid";
function Characters(){
    const [characterList, setCharacterList]=useState([]);
    const col= {xs : 1, sm : 2, md : 3, lg : 4, xl : 5 };

    useEffect(()=>{
        fetch("https://bobsburgers-api.herokuapp.com/characters?sortBy=id&OrderBy=asc")
        .then(res=>res.json())
        .then(res=>{setCharacterList(res);})
        .catch((error)=>console.log("error"+error));
    }, []);

    return(
        <div className="container my-5 text-center">
            <h2>Characters </h2>
            <CharactersGrid characterList={characterList} col={col}/>
        </div>
    )
}
export default Characters;