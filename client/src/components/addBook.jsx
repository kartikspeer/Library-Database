import React, {useState,useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {TextField, Button} from "@mui/material";
import Header from "./header";
import API from "../services/API";

const bookDetails = {
    title:"",
    author:"",
    publication:"",
    copiesLeft:""
}
const Addbook = (props)=>{
    const location = useLocation();
    const navigate = useNavigate();
    const [value,setValue] = useState(location.state.isEdit?location.state.data:bookDetails);
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit, setSubmit] = useState(false);
    const onAdd = ()=>{
        setFormErrors(validate(value));
        setSubmit(true);
    }
    const validate = (val) => {
        const errors = {};
        if(!val.title){
            errors.title = "title is required!";
        }
        if(!val.author){
            errors.author = "author is required!";
        }
        if(!val.publication){
            errors.publication = "publication is required!";
        }
        if(!val.copiesLeft){
            errors.copiesLeft = "copiesLeft is required!";
        }
        return errors;
    }
    const onInputChange = (e)=>{
        setValue({...value, [e.target.name]:e.target.value});
    }

    useEffect(() =>{
        if(Object.keys(formErrors).length === 0 && isSubmit){
            if(!location.state.isEdit){
                API.post(`/books/add`, value).then((res)=>{
                if(res.status===200){
                    setValue(bookDetails);
                    // alert("Added successfully!!!");
                    // navigate(-1);
                    if(window.confirm("Added successfully!!!") === true){
                        navigate(-1);
                    }
                }
                else{
                    alert("failed");
                }
                }).catch((err)=>{
                    console.log("error at adding books: "+err);
                    alert("failed");
                });
            }
            else{
                API.post(`/books/update/${location.state.data._id}`, value).then((res)=>{
                if(res.status===200){
                    setValue(bookDetails);
                    // alert("Updated successfully!!!");
                    if(window.confirm("Updated successfully!!!") === true){
                        navigate(-1);
                    }
                }
                else{
                    alert("failed");
                }
                }).catch((err)=>{
                    console.log("error at updating books: "+err);
                    alert("failed");
                });
            }
        }
    },[formErrors]);
    
    return (
        <div>
            <Header/>
            <div className="addbook">
                <TextField required variant="outlined" label="Title" name="title" className="addbookinput" value={value.title} onChange={(e)=>{onInputChange(e)}}></TextField>
                <p>{formErrors.title}</p>
                <TextField required variant="outlined" label="Author" name="author" className="addbookinput" value={value.author} onChange={(e)=>{onInputChange(e)}}></TextField>
                <p>{formErrors.author}</p>
                <TextField required variant="outlined" label="Publication" name="publication" className="addbookinput" value={value.publication} onChange={(e)=>{onInputChange(e)}}></TextField>
                <p>{formErrors.publication}</p>
                <TextField required variant="outlined" label="Availabilitiy" type="number" name="copiesLeft" className="addbookinput" value={value.copiesLeft} onChange={(e)=>{onInputChange(e)}}></TextField>
                <p>{formErrors.copiesLeft}</p>
                <Button variant="contained" className="bookaddbtn" onClick={()=>{onAdd()}}>{location.state.isEdit?"Update":"Add"}</Button>
            </div> 
        </div>
    )
};

export default Addbook;