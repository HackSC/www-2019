import React from "react";
import ReactGA from "react-ga";

import PropTypes from "prop-types";





class WithGA extends React.Component {
    analyticEvent =() => {
        ReactGA.event({
            category: "Input",
            name: this.props.action
        })
    }
    render() {
        return (
            <React.Fragment>
                {React.Children.map(this.props.children, child => (
                    <child.type {...child.props} onClick={(e)=> {
                        this.analyticEvent()
                        if(child.props.onClick) {
                            child.props.onClick(e);
                        }
                    }} />
                ))}
            </React.Fragment>
        )
    }
}

WithGA.propTypes = {
    action: PropTypes.string
}

export default WithGA;