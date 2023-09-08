import React from "react";
import { TextField, Button } from '@mui/material';
import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";

const searchValues={
    title:"",
    author:"",
}
const SearchBar = (props)=>{
    const navigate = useNavigate();
    const location = useLocation();
    const [searchField,setSearchField] = useState(searchValues);
    const [btn,setBtn] = useState("Search")
    const [value,setValue] = useState(searchValues)
    const [variant,setVariant] = useState("outlined")
    const [btnColor,setbtnColor] = useState("success")

    const onInputChange = (e)=>{
        setSearchField({...searchField, [e.target.name]:e.target.value});
        setValue({...value,[e.target.name]:e.target.value});
    }

    const searchFunc=()=>{
        if(btn==="Search"){
            props.setIsSearched(true);
            props.setSearchField(searchField);
            setVariant("contained")
            setBtn("clear");
            setbtnColor("error")
        }
        else{
            setSearchField(searchValues);
            props.setIsSearched(false);
            props.setSearchField(searchValues);
            setBtn("Search");
            setVariant("outlined")
            setValue(searchValues)
            setbtnColor("success")
        }
    }

    return(
        <div className="menubar">
            <div className="searchbar">
                <div className="inputField">
                    <TextField variant="standard" label="Title" name="title" onChange={(e)=>{onInputChange(e)}} value={value.title}></TextField>
                    <TextField variant="standard" label="Author" name="author" onChange={(e)=>{onInputChange(e)}} value={value.author}></TextField>
                    <Button variant={variant} onClick={()=>{searchFunc()}} color={btnColor}>{btn}</Button>
                </div>
            </div>
            {location.state.role==="admin"?<div className="addBook">
                <Button variant="contained" style={{backgroundColor: "red"}} onClick={()=>{
                    navigate('/addbook',{
                        state:{
                            isEdit:false
                        }
                    });
                }}>Add</Button>
            </div>:""}
        </div>
        
    )
}

export default SearchBar;

