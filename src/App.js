
import './App.css';
 import {useSelector,useDispatch} from "react-redux"
 import {useEffect}from "react"
import {getAll} from "./Redux/actions"
import {BrowserRouter,Route} from "react-router-dom"
import Header from "./Components/Header"




function App(props) {

  const dispatch = useDispatch();
//  dispatch(getAll())
let data;
 
useEffect(()=>{
   dispatch(getAll())

},[data])

 data = useSelector(state=>state.dataReducer);
 user = useSelector(state =>state.currentReducer);
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Main data={data}/>
  
    </div>
    </BrowserRouter>
  );
}

export default App;
