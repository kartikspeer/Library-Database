import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = ()=>{
    const navigate = useNavigate();
    const onLogout = (e)=>{
        localStorage.setItem("authtoken","");
        navigate('/login');
    }
    return(
        <header className="header">
            <img src="https://www.nicepng.com/png/detail/363-3637443_cropped-perry-public-library-color-logo-a-book.png" alt="" className="logo"/>
            <h1>Library Database</h1>
            <div className="logoutbtn">
                <Button variant="contained" onClick={(e)=>{onLogout(e)}}>Log Out</Button>
            </div>
        </header>
    )
}

export default Header;