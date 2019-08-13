import React from "react";
import Modal from "@mindtickle/mt-ui-components/lib/Modal"
import "./VOS.css";

class VOSComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {visible: true};
    }

    handleOk = () => {
        this.setState({visible: false});
        if(typeof this.props.handleOk === 'function') {
            this.props.handleOk();
        }
    }

    handleCancel = () => {
        this.setState({visible: false});
        if(typeof this.props.handleCancel === 'function') {
            this.props.handleCancel();
        }
    }

    render() {
        return <div className="vos-area">
            <h1>VOS is working</h1>
            <Modal title="TEST" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                <p>Content</p>
            </Modal>
        </div>
    }
}

export default VOSComponent;