export default function users(state={},action){
    let map_state;
    switch(action.type){
        case "delete_user_prompt" :
        console.log("action is triggering");
        break;
        default :
        return state;
    }
    return state;
}