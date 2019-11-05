import React, {Component} from "react";
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pointOfInterest: {
                zipCode: '',
                radius: '',
            },
            radiusOptions: ['10', '25', '50']
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }

    handleFormSubmit() {
        //Call to API
    }
    handleClearForm() {
    }

    render() {
        return(
            <Auxillary>
                <Input label={"ZIP Code"}/>
                <Select label={"Radius"}/>
                <button>Make name a prop</button>
            </Auxillary>
        )
    }

}

export default Form;