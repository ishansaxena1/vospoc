import React from "react";
import ReactDOM from "react-dom";
import VOSComponent from "./VOS";

// import Track from "./Track";
// import {BrowserRouter as Router, Link, Route, withRouter} from "react-router-dom";

// const Navigation = withRouter(({location}) => {
//     const currentPath = `${location.pathname}/${location.hash}`;
//     return <nav>
//         <Link to={`${currentPath}`}>HOME</Link>
//         <Link to={`${currentPath}/track`}>TRACK</Link>
//     </nav>
// });

// class Routed extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return <Router>
//             <Navigation/>
//             <Route path="/" exact component={VOSComponent} />
//             <Route path="/track" component={Track} />
//         </Router>
//     }
// }

class VOS {
    constructor(props) {
        this.props = props;
    }

    render() {
        const {domID, ...props} = this.props;
        const container = document.getElementById(domID);
        ReactDOM.render(<VOSComponent {...props}/>, container);
    }

    destroy() {
        const {domID} = this.props;
        ReactDOM.unmountComponentAtNode(document.getElementById(domID));
    }
}

// ReactDOM.render(<VOSComponent />, document.getElementById("root"))

export default VOS;