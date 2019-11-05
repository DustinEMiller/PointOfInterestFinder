import React, {Component} from "react";
import Auxillary from '../../hoc/Auxillary/Auxillary';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <label>{props.label}</label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}