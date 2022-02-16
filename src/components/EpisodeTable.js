import React from "react";

function EpisodeTable(props){
    const {episodeList, season}=props;
    const episodeTr=episodeList.map((episode)=>{
        if(season===episode.season){return(
            <tr key={episode.id}>
                <td>{episode.episode}</td>
                <td>{episode.name}</td>
                <td>{episode.airDate}</td>
                <td>{episode.totalViewers}</td>
            </tr>
        )}
        else return(<></>)
    });
    return(
        <table className="table">
            <thead>
                <tr>
                    <th className="col-1">#</th>
                    <th className="col-5">Name</th>
                    <th className="col-4">Air Date</th>
                    <th className="col-2">Total Viewers</th>
                </tr>
            </thead>
            <tbody>
                {episodeTr}
            </tbody>
        </table>
    )
}
export default EpisodeTable;