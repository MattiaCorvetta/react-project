import React, {useState,useEffect} from "react";
import EpisodeTable from "../components/EpisodeTable"
import SeasonSelector from "../components/SeasonSelector"
function Episodes(){
    const [episodeList, setEpisodeList]=useState([]);
    const [seasonMax, setSeasonMax]=useState([]);
    const [season, setSeason]=useState(1);


    useEffect(()=>{
        fetch("https://bobsburgers-api.herokuapp.com/episodes?sortBy=episode&OrderBy=asc")
        .then(res=>res.json())
        .then(res=>{setEpisodeList(res);})
        .catch((error)=>console.log("error"+error));
        fetch("https://bobsburgers-api.herokuapp.com/episodes?sortBy=season&OrderBy=desc&limit=1&skip=0")
        .then(res=>res.json())
        .then(res=>{setSeasonMax(res[0].season);})
        .catch((error)=>console.log("error"+error));
    }, []);

    return(
        <div className="container my-5">
            <span className="text-center">
                <h2 className="mb-2">Episodes</h2>
                <p>Select season:</p>
                <div className="row">
                    <div className="col mb-3">
                        <SeasonSelector seasonMax={seasonMax} setSeason={setSeason}/>
                    </div>
                </div>
            </span>

            <div className="row">
                <div className="col">
                    <span className="text-center">
                        <h5>Season {season}:</h5>
                    </span>
                    <EpisodeTable season={season} episodeList={episodeList}/>
                </div>
            </div>
        </div>
    )
}
export default Episodes;