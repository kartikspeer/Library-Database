import React, { useState } from "react";
import { Button, MenuItem, TextField, Typography, Checkbox,FormControlLabel} from "@mui/material";

import Axios from 'axios';
import { useNavigate } from "react-router-dom";

const userType=[
    {value:"user",label:"user"},
    {value:"admin",label:"admin"}
]
const signUpValues={
    name:'',
    username:'',
    password:''
}
const loginValues={
    username:'',
    password:''
}
const Login = ()=>{
    const [userTypeValue,setUserTypeValue] = useState("user");
    const [account,setAccount] =  useState("login");
    const [signUp,setSignUp] = useState(signUpValues);
    const [login,setLogin] = useState(loginValues);
    const [err,setErr] = useState(true);
    const navigate = useNavigate()

    const onInputChange = (e)=>{
        setSignUp({...signUp, [e.target.name]:e.target.value});
    }
    const loginValueChange = (e)=>{
        setLogin({...login, [e.target.name]:e.target.value});
        console.log(login)
    }
    const createAcc = ()=>{
        Axios.post("http://localhost:8000/auth/signup",signUp).then((res)=>{
            console.log(res);
            setErr(true);
            setLogin(signUp);
            setSignUp(signUpValues);
            setAccount("login");
        }).catch((err)=>{
            console.log("error: "+err);
            setErr(false);
        })
    }
    const accLogin = ()=>{
        Axios.post("http://localhost:8000/auth/login",login).then((res)=>{
            console.log(res);
            if(res.status===200){
                navigate('/home')
                localStorage.setItem("authtoken",res.data.accessToken)
            }   
            setErr(true);
            setLogin(login);
        }).catch((err)=>{
            console.log("error: ",err);
            setErr(false);
        })
    }
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {setShowPassword((show) => !show)};

    return(
    // <div className="loginPage">
        (account==="login")?
            <div className="loginCard">
                <img src="https://www.nicepng.com/png/detail/363-3637443_cropped-perry-public-library-color-logo-a-book.png" className="loginImage" alt=""/>
                <h3>Library Database Management System</h3>
                <TextField select label="Select" className="loginTextfield" variant="filled" defaultValue="user" helperText="Select User Type" >
                    {
                        userType.map((element)=>(
                            <MenuItem key={element.value} value={element.value} onClick={()=>{
                                setUserTypeValue(element.label);
                                {console.log(userTypeValue)}
                            }}>
                                {element.label}
                            </MenuItem>
                        ))
                    }
                </TextField> 
                <TextField label="username" name='username' className="loginTextfield" onChange={(e)=>{loginValueChange(e)}}></TextField>
                <TextField label="password" name='password' type={showPassword?"text":"password"}  className="loginTextfield" onChange={(e)=>{loginValueChange(e)}}></TextField>
                {!err && <Typography>Invalid Username/password</Typography>}
                <FormControlLabel control={<Checkbox onChange={()=>handleClickShowPassword()}/>} label="show password" />
                <Button variant="contained" className="loginButton" onClick={()=>{accLogin()}}>Log in</Button>
                {userTypeValue==="user" && <Button variant="contained" color="success" className="loginButton" onClick={()=>{setAccount("signUp")}}>Create new account</Button>}
            </div>
        :
            <div className="loginCard">
                <img src="https://www.nicepng.com/png/detail/363-3637443_cropped-perry-public-library-color-logo-a-book.png" className="loginImage"/>
                <h3>Library Database Management System</h3>
                <TextField label="Name" name='name' className="loginTextfield" onChange={(e)=>{onInputChange(e)}}></TextField>
                <TextField label="New username" name='username' className="loginTextfield" onChange={(e)=>{onInputChange(e)}}></TextField>
                <TextField label="New password" name='password' type={showPassword?"text":"password"} className="loginTextfield" onChange={(e)=>{onInputChange(e)}}></TextField>
                <FormControlLabel control={<Checkbox onChange={()=>handleClickShowPassword()}/>} label="show password" />
                {!err && <Typography>Something went wrong, please try again!</Typography>}
                <Button variant="contained" className="loginButton" onClick={()=>{createAcc()}}>Create Account</Button>
            </div>
    // </div>
    )
}

export default Login;