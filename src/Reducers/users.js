export default function(state={},action){
  switch(action.type){
      case "DELETE_USER":
      console.log("wants to delete")
     for (const index in state.list){
         if(state.list[index].id===action.user_id){
             state.list.splice(index,1);
            }
        }
      break;
      case "UPDATE_RECORD":
      var username=action.username;
      var user_id=action.user_id;
      var job   =action.job;
      for (const index in state.list)
        {
          
          if(state.list[index].id===action.user_id)
            {
                state.list[index].username=action.username;
                state.list[index].job=action.job;
                console.log("Successfully updated");  
            }
        }
         
      
      break;
      default :
      return state;
  }
  return state;
}