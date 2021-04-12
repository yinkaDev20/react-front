import React from 'react'
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {create} from "../Redux/actions";
import {useHistory} from "react-router-dom";
import {useState} from "react"


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

function send(e){
    e.preventDefault();
    
    let detail={
        name:document.getElementById("name").value,
        password:document.getElementById("password").value,
        information:document.getElementById("information").value,
    }
if(document.getElementById("name").value && document.getElementById("password").value && document.getElementById("information").value){
   
    dispatch(create(detail))
  history.push("/")
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