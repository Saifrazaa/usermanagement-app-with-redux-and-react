import React from "react";
import { connect } from "react-redux";
import { Table, Button, Glyphicon,Modal } from "react-bootstrap";
import {bindActionCreators} from "redux";

import {deleteuseraction} from "../actions/deleteuseraction";


class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            user_id: "",
            username:""
        }
       
    }
    deletepropmt(event) {
       var username=event.target.dataset.username;
       var user_id=Number(event.target.dataset.id);
       console.log(username , user_id);
       
        this.setState({ show: true ,username:username ,user_id :user_id })

    }
    hidedeleteprompt(){
        this.setState({show:false});
    }
   
    render() {

        return (
            <div>
                <Table bordered hover striped responsive>
                    <thead>
                        <tr>
                            <th>I.D</th><th>Name</th><th>Job</th><th>Edit</th><th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((users, index) => {
                            return (
                                <tr key={users.id}>
                                    <td>{users.id}</td>
                                    <td>{users.username}</td>
                                    <td>{users.job}</td>
                                    <td><a href={"/edit_user/" + users.id}>
                                        <Button  bsStyle="primary">
                                            Edit <Glyphicon glyph="edit" />
                                        </Button>
                                    </a></td>
                                    <td>
                                       <Button  bsStyle="danger" data-id={users.id} data-username={users.username} onClick={this.deletepropmt.bind(this)}>
                                            Delete <Glyphicon glyph="remove-circle" />
                                        </Button>
                                    </td>
                                </tr>
                            )

                        })}
                    </tbody>
                </Table>
                <div>

                    <Modal show={this.state.show}>
                        <Modal.Header>
                            <Modal.Title>
                                Are You Sure You Want To Delete <strong>{this.state.username}</strong>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button  bsStyle="primary" onClick={this.hidedeleteprompt.bind(this)}>No</Button>
       
                            <Button bsStyle="danger" onClick={this.props.deleteuseraction.bind(this,this.state.user_id,this.state.username)}>Yes</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        users: state.users.list
    }
}
function mapDispatchToProps(dispatch){
    
    return bindActionCreators({
        deleteuseraction:deleteuseraction
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Users);
