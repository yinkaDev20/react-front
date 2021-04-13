import React from 'react'
import {useSelector} from "react-redux";
import styled from "styled-components"


const Con = styled.div`
  padding-top:5rem;
  text-align:center;

`



const  User= () =>{
    let current = useSelector(state =>state.currentReducer);
    
    
    
    
 return (
        <Con>
           <h2>{current.information?`Your secret is: ${current.information}`:null} </h2>
           
        </Con>
    )

}

export default User
