export default function(state={},action){
  switch(action.type){
      case "DELETE_USER":
      console.log(action.username)
     for (const index in state.list){
         if(state.list[index].id===action.user_id){
             state.list.splice(index,1);
         }
     }
      break;
      default :
      return state;
  }
  return state;
}