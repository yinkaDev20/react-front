import React from 'react'
import styled from "styled-components";
import {useDispatch,useSelector} from "react-redux";
import {getOne,login} from "../Redux/actions";
import {useHistory} from "react-router-dom";
import {useState} from "react"
import { currentReducer, dataReducer } from '../Redux/reducers';


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

function SignIn() {
let [error,changeError]= useState(false)

const history = useHistory();
const dispatch = useDispatch()
let current = useSelector(state=>state.dataReducer);
async function send(e){
    e.preventDefault();
    
    let detail={
        name:document.getElementById("name").value,
        password:document.getElementById("password").value
    }
if(document.getElementById("name").value && document.getElementById("password").value){
   
//   await dispatch(getOne(detail))
  
  
  current=current.filter(user=>user.name===detail.name)
  
  await dispatch(login(current[0]))
  history.push("/user")
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
                <button onClick={(e)=>send(e)}>Submit</button>  
            </form>
        </Con>
    )
}

export default SignIn