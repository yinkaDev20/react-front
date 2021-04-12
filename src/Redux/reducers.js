export const dataReducer = (state=[],action)=>{
    switch(action.type){
        case "all":
            return [...action.payload]
        default:
            return ["empty"]
}

}


export const currentReducer =(state={},action)=>{
    console.log(action)
    switch(action.type){
        case"login":
            return{...action.payload}
        case "logout":
            return {}
        default:
            return {}
    }

}

