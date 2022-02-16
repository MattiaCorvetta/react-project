import React from "react";
import { useEffect,useState } from "react";

function Info(){
    const [extracts, setExtracts]=useState([]);

    useEffect(()=>{
        fetch("https://en.wikipedia.org/api/rest_v1/page/summary/Bob's_Burgers")
        .then(res=>res.json())
        .then(res=>{setExtracts(res)})
        .catch((error)=>console.log("error"+error));
    }, []);
    return(
        <div className="container my-5 text-center">
            <h3 className="mb-4">Info:</h3>
            <div className="mb-3">
                <h4 className="mb-2">Bob's Burgers</h4>
                <p >{extracts.extract}</p>
            </div>
            <div className="mb-3">
                <h4 className="mb-2">Author</h4>
                <p>Mattia Corvetta</p>
                <p>807435</p>
            </div>
            <div className="mb-3">
                <h4 className="mb-2">API used in this app</h4>
                <p><a href="https://bobs-burgers-api-ui.herokuapp.com/">Bob's burgers API</a></p>
                <p><a href="https://www.mediawiki.org/wiki/API:Main_page">wikipedia API</a></p>
            </div>
        </div>
    )
}
export default Info;