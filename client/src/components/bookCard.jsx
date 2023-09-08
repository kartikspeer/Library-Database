import React,{useState} from "react";
import API from "../services/API";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {fas, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons"
const Card = (props)=>{
    const navigate = useNavigate();
    const onEdit = (data)=>{
        navigate('/addBook',{
            state:{
                isEdit:true,
                data:data
            }
        });
    }
    const onDelete = async (id)=>{
        console.log(id);
        const { data } = await API.delete(`/books/delete/${id}`);
        alert(data?.message);
        window.location.reload();
    }
    return(
        (props.isSearched === false)?
        
            <div className="bookCard" key={props.val}>
                <img src="https://www.nicepng.com/png/detail/363-3637443_cropped-perry-public-library-color-logo-a-book.png" alt="" />
                <h2>{props.booksData.title}</h2>
                <h3>by {props.booksData.author}</h3>
                <p>publisher: {props.booksData.publication}</p>
                <p>units: {props.booksData.copiesLeft}</p>
                {props.role==="admin"?<div className="addeditbtns">
                    <button onClick={()=>{onEdit(props.booksData)}}><FontAwesomeIcon icon={faEdit}/></button>
                    <button onClick={()=>{onDelete(props.booksData._id)}}><FontAwesomeIcon icon={faTrash} style={{color: "#e90101",}} /></button>
                </div>:""}
            </div>
        
        :
            (props.booksData.title.toLowerCase()===props.searchField.title.toLowerCase() || props.booksData.author.toLowerCase()===props.searchField.author.toLowerCase()) ?            
            <div className="bookCard" key={props.val}>
                <img src="https://www.nicepng.com/png/detail/363-3637443_cropped-perry-public-library-color-logo-a-book.png" alt="" />
                <h2>{props.booksData.title}</h2>
                <h3>by {props.booksData.author}</h3>
                <p>publisher: {props.booksData.publication}</p>
                <p>units: {props.booksData.copiesLeft}</p>
                <button onClick={()=>{onEdit(props.booksData)}}><FontAwesomeIcon icon={faEdit}/></button>
                <button onClick={()=>{onDelete(props.booksData._id)}}><FontAwesomeIcon icon={faTrash} style={{color: "#e90101",}} /></button>
            </div>
        :
            (null)
    )
}

export default Card;