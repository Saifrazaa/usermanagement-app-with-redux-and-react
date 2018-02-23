import React from "react";
import { Modal,Button } from "react-bootstrap";
class UserDelete extends React.Component{
    render(){
        return (
            <Modal>
                <Modal.Header>
                    <Modal.Title>
                        Are You Sure You Want To Delete <strong> This User ?</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button bsSize="xlarge" bsStyle="primary">No</Button>
                    <Button bsSize="xlarge" bsStyle="danger">Yes</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default UserDelete;