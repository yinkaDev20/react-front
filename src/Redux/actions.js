const axios = require("axios");
export const all = (data)=>{
    
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


export const logout = ()=>{
    return{
        type:"logout"
    }
}
export const login = (user)=>{
    return{
        type:"login",
        payload:user
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


// export const getOne = (user) =>{
//     return async (dispatch,getState)=>{
//         fetch ("http://127.0.0.1:8000/api/show", {
//             method: 'POST', 
//             mode: 'cors', 
//             cache: 'no-cache', 
//             credentials: 'same-origin', 
//             headers: {
//               'Content-Type': 'application/json'
             
//             },
//             redirect: 'follow', 
//             referrerPolicy: 'no-referrer', 
//             body: user
//           }).then(res=>
//             dispatch(res.filter(item=>item.name===user.name)[0])
//             )
//           .catch(err=>{
//               console.log(err)
//           })
         
//     }
// }


export const create = (user) =>{
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



