import React, {Component} from "react";
import Auxillary from '../../hoc/Auxillary/Auxillary';

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '25'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <Auxillary>
                <label>Radius</label>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
            </Auxillary>

        )
    }
}

export default Select;

