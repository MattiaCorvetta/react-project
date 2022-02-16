import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterGrid(props){
    const {characterList,col}=props;
    const characterCardCol=characterList.map((character)=>{
        return(
            <div className="col" key={character.id}>
                <CharacterCard character={character}/>
            </div>
        )}
    );
    return(
        <div className={`row row-cols-${col.xs} row-cols-sm-${col.sm} row-cols-md-${col.md} row-cols-lg-${col.lg} row-cols-xl-${col.xl} `}>
            {characterCardCol}
        </div>
    )
}
export default CharacterGrid;