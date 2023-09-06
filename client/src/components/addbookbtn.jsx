import React from "react";
import {Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Addbtn = ()=>{
    const navigate = useNavigate();
    return (
        <div>
            <Button variant="contained" style={{backgroundColor: "red"}} onClick={()=>{
                navigate('/addbook');
            }}>Add</Button>
        </div>
    )
};

export default Addbtn;