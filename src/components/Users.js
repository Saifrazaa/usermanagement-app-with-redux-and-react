import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import UserList from "./UserList";

class Users extends React.Component{
  
     render(){
        
        return (
            <div>
                <Table bordered hover striped responsive>
                    <thead>
                        <tr>
                            <th>I.D</th><th>Name</th><th>Job</th><th>Edit</th><th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((users,index) => {
                            return (
                                <UserList key={users.id} users={users} />
                            )

                        })}
                    </tbody>
                </Table>
                
            </div>
        )
    }

}

function mapStateToProps(state){
    console.log(state.users);
    
    return {
        users:state.users
    }
}
export default connect(mapStateToProps)(Users);
