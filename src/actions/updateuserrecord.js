export const updateUserRecord=(user_id,username,job)=>{
  
    return {
        type:"UPDATE_RECORD",
        user_id:user_id,
        username:username,
        job     :job
    }
}