import React from 'react'
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {create,getAll} from "../Redux/actions";
import {useHistory} from "react-router-dom";
import {useState} from "react"
const bcrypt = require("bcryptjs")



const Con = styled.div`
    h3{
        font-size:1.5rem;
        color:red;
    }
    display:flex;
    flex-direction:column;
    form{
        display:flex;
    flex-direction:column;
    }
    label{
        margin-top:1rem;
        font-size:1.5rem;
    }
    input{
        margin-bottom:1rem;
        width:15rem;
        font-size:1.5rem;
        height:1.75rem;
        padding:.2rem;
        margin:auto;
    }
    button{
        height:2.5rem;
        width:7rem;
        margin:auto;
        margin-top:1rem;
    }
`

function SignUp() {
let [error,changeError]= useState(false)

const history = useHistory();
const dispatch = useDispatch()

async function send(e){
    
    e.preventDefault();
    
    let detail={
        name:document.getElementById("name").value,
        password:null,
        information:document.getElementById("information").value,
    }
    async function hash(password){
        const salt = await bcrypt.genSalt(10)
        detail.password= await bcrypt.hash(password,salt)
       
    }
  
if(document.getElementById("name").value && document.getElementById("password").value && document.getElementById("information").value){
     await hash(document.getElementById("password").value)
   
    await dispatch(create(detail))
    await dispatch(getAll())
   
    
   setTimeout(()=>{
   
    history.push("/")
    window.location.reload()
   },100) 
}
else{
    
  changeError(true)
}
}


    return (
        <Con>
            <h2>Please Sign-in</h2>
            {error?<h3>Please fill in the details</h3>:null}
            <form>
                <label htmlFor="name">Enter Your name</label>
                <input id="name"></input>
                <label htmlFor="password">Enter Your Password</label>
                <input id="password" type="password"></input>
                <label htmlFor="information">Enter Your Secret Information</label>
                <input id="information"></input>
                <button onClick={(e)=>send(e)}>Submit</button>  
            </form>
        </Con>
    )
}

export default SignUp