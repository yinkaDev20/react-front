
import './App.css';
 import {useSelector,useDispatch} from "react-redux";
 import {useEffect}from "react";
import {getAll} from "./Redux/actions";
import {BrowserRouter,Redirect,Route,Link,Switch} from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/Sign-Up"
import styled from "styled-components"


const Con = styled.div`
    div{
      display:flex;
      flex-wrap:wrap;
      
    }

`



function App() {

  const dispatch = useDispatch();
//  dispatch(getAll())
let data;
 
useEffect(()=>{
   dispatch(getAll())

},[data])


// navigate(e){

// }

 data = useSelector(state=>state.dataReducer);
 let user = useSelector(state =>state.currentReducer);

// setting up all users display for homepage
let allUsers = data.map(user=><Link to="/SignIn"><Main key={user.name}user={user}/></Link>);

  return (
    <BrowserRouter>
    <Con className="App">
      <Header />
      <Switch>
      <Route exact path="/"  render = {()=><div>{allUsers}</div>}/>
      <Route  exact path="/sign-in" component={SignIn}/>
      <Route exact  path="/sign-up" component={SignUp}/>
      </Switch>
  
    </Con>
    </BrowserRouter>
  );
}

export default App;
