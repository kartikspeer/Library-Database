import React from "react";
import Card from "./bookCard.jsx";
import { useEffect,useState } from "react";
import  Axios  from "axios";


const token = localStorage.getItem("authtoken")
const authAxios = Axios.create({
    baseURL:"http://localhost:8000",
    headers:{
        Authorization:`Bearer ${token}`
    }
})

const MainBody = (props)=>{
    const [booksData,setBooksData] = useState([]);
    const [found,setFound] = useState(false);
    useEffect(()=>{
        authAxios.get(`/api/books`).then((response)=>{
            setBooksData(response.data);
            console.log(response.data);
        }).catch((err)=>{
            console.log("error at axios.get "+err);
        })

    },[])
    
    return[
        <div className="mainBody">
            {booksData.map(function(element,key){
                return <Card booksData = {element} key={key} isSearched={props.isSearched} searchField = {props.searchField}/>
            })}
        </div>
    ]
}

export default MainBody;