import React from "react";
import { connect } from "react-redux";
import { Table, Button, Glyphicon,Modal } from "react-bootstrap";
import {bindActionCreators} from "redux";

import {deleteuseraction} from "../actions/deleteuseraction";
import {updateUserRecord} from "../actions/updateuserrecord";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showedit:false,
            showdelete: false,
            user_id: "",
            username:"",
            job:""
        }
       
    }
    deletepropmt(event) {
       var username=event.target.dataset.username;
       var user_id=Number(event.target.dataset.id);
       console.log(username , user_id);
       
        this.setState({ showdelete: true ,username:username ,user_id :user_id })

    }
    hidedeleteprompt(){
        this.setState({showdelete:false});
    }
    hideeditpropmt(){
        this.setState({showedit:false});
    }
    editprompt(event){
        var user_id=Number(event.target.dataset.id);
        var username=event.target.dataset.username;
        var job=event.target.dataset.job;
        this.setState({showedit:true,user_id:user_id,username:username,job:job});
    }
    usernameupdate(e){
        this.setState({username:e.target.value});
        
    }
    jobupdate(e){
       this.setState({job:e.target.value});
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
                                    <td>
                                        <Button  bsStyle="primary" data-id={users.id} data-username={users.username} data-job={users.job} onClick={this.editprompt.bind(this)} >
                                            Edit <Glyphicon glyph="edit" />
                                        </Button>
                                    </td>
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

                    <Modal show={this.state.showdelete}>
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
                <Modal show={this.state.showedit}>
                        <Modal.Header>
                            <Modal.Title>
                               Edit Your Details
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <strong>User Name :</strong><input type="text" onChange={this.usernameupdate.bind(this)} value={this.state.username} className="form-control"/>
                            <strong style={{marginTop:"20px"}} >Job :</strong><input onChange={this.jobupdate.bind(this)} type="text" value={this.state.job} className="form-control"/>
                        </Modal.Body>
                        <Modal.Footer>
                           
                            <Button  bsStyle="info" onClick={this.hideeditpropmt.bind(this)}>Cancel <Glyphicon glyph="remove-circle"/></Button>
       
                            <Button style={{marginLeft:"20px"}} onClick={this.props.updateUserRecord.bind(this,this.state.user_id,this.state.username,this.state.job)}  bsStyle="primary" >Update <Glyphicon glyph="ok-circle"/></Button>
                           
                        </Modal.Footer>
                    </Modal>
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
        deleteuseraction:deleteuseraction,
        updateUserRecord:updateUserRecord
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Users);
