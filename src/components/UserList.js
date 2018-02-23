import React from "react";
import { Button ,Glyphicon,Modal } from "react-bootstrap";
import UserDelete from "./UserDelete";
import {bindActionCreators} from "redux";
import {deleteuseraction} from "../actions/deleteuseraction";
import { connect } from "react-redux";
class UserList extends React.Component {
    constructor(){
        super();
        this.state={
            user_id:"",
            username:""
        }
    }
    render() {
        var users=this.props.users;
        return (
            
            <tr >
                <td>{users.id}</td>
                <td>{users.username}</td>
                <td>{users.job}</td>
                <td><a href={"/edit_user/" + users.id}>
                        <Button bsSize="xlarge" bsStyle="primary">
                            Edit <Glyphicon glyph="edit" />
                        </Button>
                    </a></td>
                <td>
                    <Button bsSize="xlarge" bsStyle="danger" data-id={users.id} data-username={users.username} onClick={this.props.deleteuseraction.bind(this,this.state.user_id,this.state.username)}>
                        Delete <Glyphicon glyph="remove-circle" />
                    </Button></td>
            </tr>
            
            
            
        )
    }
    
    deleteUser(event){
        let user_id=Number(event.target.dataset.id);
        let username=event.target.dataset.username;
        this.setState({
            user_id:user_id,
            username:username
        })
       
    }
    
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteuseraction:deleteuseraction},dispatch)
}
export default connect(mapDispatchToProps)(UserList);