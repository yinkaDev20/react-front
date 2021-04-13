
import './App.css';
 import {useSelector,useDispatch} from "react-redux";
 import {useEffect}from "react";
import {getAll} from "./Redux/actions";
import {BrowserRouter,Route,Link,Switch} from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/Sign-Up";
import User from "./Components/User"
import styled from "styled-components"


const Con = styled.div`
    div{
      display:flex;
      flex-wrap:wrap;
      justify-content:center;
      
    }

`



function App() {

  const dispatch = useDispatch();
//  dispatch(getAll())
let data;

 
useEffect(()=>{
  
   dispatch(getAll())

},[])




 data = useSelector(state=>state.dataReducer);
 


// setting up all users display for homepage
let allUsers = data.map((user,index)=><Link key={index}to="/sign-in"><Main key={user.name} user={user}/></Link>);

  return (
    <BrowserRouter>
    <Header />
    <Con className="App">
      
      <Switch>
      <Route exact path="/"  render = {()=><div>{allUsers}</div>}/>
      <Route  exact path="/sign-in" component={SignIn}/>
      <Route exact  path="/sign-up" component={SignUp}/>
      <Route exact  path="/user" component={User}/>
      </Switch>
  
    </Con>
    </BrowserRouter>
  );
}

export default App;
