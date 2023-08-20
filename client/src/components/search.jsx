import React, { useRef } from "react";
import { TextField, Button } from '@mui/material';
import { useState } from "react";

const searchValues={
    title:"",
    author:"",
}
const SearchBar = (props)=>{
    
    const [searchField,setSearchField] = useState(searchValues);
    const [btn,setBtn] = useState("Search")
    const [value,setValue] = useState(searchValues)
    const [variant,setVariant] = useState("outlined")
    const [btnColor,setbtnColor] = useState("success")

    const onInputChange = (e)=>{
        setSearchField({...searchField, [e.target.name]:e.target.value});
        setValue({...value,[e.target.name]:e.target.value});
        // console.log(searchField);
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
        <div className="searchbar">
            <div className="inputField">
                <TextField variant="standard" label="Title" name="title" onChange={(e)=>{onInputChange(e)}} value={value.title}></TextField>
                <TextField variant="standard" label="Author" name="author" onChange={(e)=>{onInputChange(e)}} value={value.author}></TextField>
            </div>
            <Button variant={variant} onClick={()=>{searchFunc()}} color={btnColor}>{btn}</Button>
        </div>
    )
}

export default SearchBar;
