export const dataReducer = (state=[],action)=>{
    switch(action.type){
        case "all":
            return [...action.payload]
        default:
            return ["empty"]
}

}


export const currentReducer =(state={},action)=>{
    switch(action.type){
        case"show":
            return{...state}
        case "logout":
            return {...state}
        default:
            return {list:"empty"}
    }

}

