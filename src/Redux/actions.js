const axios = require("axios");
const all = (data)=>{
    console.log(data)
    return{
        type:"all",
        payload:data
    }
}

const show = id=>{
    return { 
    type:"show",
      payload:id
    }
    
}

const store = data=>{
    return{
        type:"store",
        payload:data
    }
}

const update = data=>{
    return{
        type:"update",
        payload:data
    }
}

const destroy = data =>{
    return{
        type:"destroy",
        payload:data
    }
}


const logout = ()=>{
    return{
        type:"logout"
    }
}



// async actions 
export const getAll = () =>
   
    async(dispatch,getState)=>{
     const data= await    axios ("http://127.0.0.1:8000/api/users").then(res=>
            
         res.data
        ).catch(err=>{
            console.log(err)
        })
        dispatch(all(data))
    
}


export const getOne = (user) =>{
    return (dispatch)=>{
        fetch("http://127.0.0.1:8000/api/show", {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
             
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(user) 
          }).then(res=>{
              dispatch(show(res))
          }).catch(err=>{
              console.log(err)
          })
    }
}


const create = (user) =>{
    return (dispatch)=>{
        fetch("http://127.0.0.1:8000/api/store", {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
             
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(user) 
          })
          .then(res=>dispatch(all(res))).catch(err=>{
              console.log(err)
          })
    }
}


const put = (user) =>{
    return (dispatch)=>{
        fetch("http://127.0.0.1:8000/api/update", {
            method: 'PUT', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
             
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(user) 
          })
          .then(res=>dispatch(all(res))).catch(err=>{
              console.log(err)
          })
    }
}


const remove = (user) =>{
    return (dispatch)=>{
        fetch("http://127.0.0.1:8000/api/destroy", {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
             
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(user) 
          })
          .then(res=>dispatch(all(res)))
          .catch(err=>{
              console.log(err)
          })
    }
}