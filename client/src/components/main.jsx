import React from "react";
import Card from "./bookCard.jsx";
import { useEffect,useState } from "react";
import API from "../services/API.js"
import {v4} from "uuid";

const MainBody = (props)=>{
    const [booksData,setBooksData] = useState([]);
    useEffect(()=>{
        API.get(`/books/search`).then((response)=>{
            setBooksData(response.data);
        }).catch((err)=>{
            console.log("error at axios.get "+err);
        })

    },[])
    
    return[
        <div className="mainBody">
            {booksData.map((element)=>{
                return <Card booksData = {element} val={v4()} isSearched={props.isSearched} searchField = {props.searchField}/>
            })}
        </div>
    ]
}

export default MainBody;
