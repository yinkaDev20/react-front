import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import styled from "styled-components"
import {useState} from "react"

const Con = styled.div`
  padding-top:5rem;
  text-align:center;

`



const  User= () =>{
    let current = useSelector(state =>state.currentReducer);
    console.log(current)
    let [info,infoChange]= useState(current.information)
    console.log(info)
    
 return (
        <Con>
           <h2>{info?`Your secret is: ${info}`:`No secret to display`} </h2>
           
        </Con>
    )

}

export default User
