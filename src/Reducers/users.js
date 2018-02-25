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
      case "UPDATE_RECORD":
      var username=action.username;
      var user_id=action.user_id;
      var job   =action.job;
      for (const index in state.list){
          
          if(state.list[index].id===action.user_id)
          {
            return {
                ...state.list,
                username:action.username,
                job     :job
            }
          }
         
      }
      default :
      return state;
  }
  return state;
}