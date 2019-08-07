import React from "react";
import ReactDOM from "react-dom";

class VOSComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>VOS Working... </h1>;
    }
}

class VOS {
    constructor(props) {
        this.props = props;
    }

    render() {
        const {domID} = this.props;
        const container = document.getElementById(domID);
        ReactDOM.render(<VOSComponent/>, container);
    }

    destroy() {
        const {domID} = this.props;
        ReactDOM.unmountComponentAtNode(document.getElementById(domID));
    }
}

export default VOS;