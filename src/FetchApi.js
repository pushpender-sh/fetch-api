import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import DisplayResultList from "./DisplayResultList";




export default function FetchApi() {
    const [display, setDisplay] = useState([]);
    //console.log(display);
   
    return (
        <div className="main">
            <SearchBar  setDisplay={setDisplay} />
            <DisplayResultList display={display} />
        </div>
    );
}
