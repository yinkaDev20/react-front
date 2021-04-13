import React from 'react'
import styled from "styled-components";
import {useSelector,useDispatch} from "react-redux"
import {Link ,useHistory} from "react-router-dom";
import { logout , getAll} from '../Redux/actions';

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
    const history = useHistory();
    const dispatch=useDispatch();
    let auth=   useSelector(state =>state.currentReducer);
    


    async function remove(e){
    
       await dispatch(logout())
       await dispatch(getAll())
      history.push("/")
    }
  
        
        let greeting=`Welcome ${auth.name}`
       
if(!auth.name)

    {return (
      <Con>
        < span key="item3">
         Welcome
        </span>
        <Link  to="/sign-in" key="item4"><span key="item7">Login</span></Link>
        <Link to="/sign-up" key="item5"><span key="item8">Sign-Up</span></Link>
      </Con>
    )
}else{
    return(
    <Con>
         <span key="item1">
          {greeting}
        </span>
        <span key="item2" onClick={(e)=>remove(e)}>Logout</span>
    </Con>
    )
}
}

export default Header
