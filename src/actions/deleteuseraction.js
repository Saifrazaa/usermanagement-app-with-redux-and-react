export const deleteuseraction=(user_id,username)=>{
   return {
       type:"DELETE_USER",
       user_id:user_id,
       username:username
   }
}