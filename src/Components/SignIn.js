import React from 'react'
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {getOne} from "../Redux/actions";


const Con = styled.div`
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
const dispatch = useDispatch();



    return (
        <Con>
            <h2>Please Sign-in</h2>
            <form>
                <label for="name">Enter Your name</label>
                <input id="name"></input>
                <label for="password">Enter Your Password</label>
                <input id="password" type="password"></input>
                <button onClick={(e)=>dispatch(getOne({
                    name:document.getElementById("name").value,
                    password:document.getElementById("password").value,
                }))}>Submit</button>
                
            </form>
        </Con>
    )
}

export default SignIn
