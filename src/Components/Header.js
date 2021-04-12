import React from 'react'
import styled from "styled-components";
import {useSelector,useDispatch} from "react-redux"
import {Link} from "react-router-dom";

const Con= styled.div`
  height:10vh;
  background-color:grey;
  display:flex;
  justify-content:space-around;
  align-item:center;
  span{
      color:black;
      &:hover{
          cursor:pointer;
          color:white;
      }
      display:flex;
      align-items:center;
      justify-content:center;
      align-items:center;
      height:100%;
  }

`

function Header(props) {
    let greeting= props.user?`Welcome ${props.user}`:`Welcome`;

    return (
      <Con>
        <span>
         {greeting}
        </span>
        <Link  to="/sign-in"><span >Login</span></Link>
        <Link to="/sign-up"><span >Sign-Up</span></Link>
      </Con>
    )
}

export default Header
