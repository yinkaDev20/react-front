import React from 'react'
import styled from "styled-components";
import {useSelector,useDispatch} from "react-redux"

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
  }

`

function Header(props) {
    let greeting= props.user?`Welcome ${props.user}`:`Welcome`;

    return (
      <Con>
        <span>
         {greeting}
        </span>
        <span >
          Login/SignUp
        </span>
      </Con>
    )
}

export default Header
