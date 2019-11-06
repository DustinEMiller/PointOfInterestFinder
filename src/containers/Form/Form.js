import React, {Component} from "react";
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Input from '../../components/UI/FormElements/Input/Input';
import Select from '../../components/UI/FormElements/Select/Select';
import Button from '../../components/UI/Button/Button';

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

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => {
                return {
                    pointOfInterest : {
                        ...prevState.pointOfInterest, [name]: value
                    }
                }
            }, () => console.log(this.state.pointOfInterest)
        )
    }

    handleFormSubmit(e) {
        e.preventDefault();
        //let userData = this.state.newUser;

        /*fetch('http://example.com',{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data =>{
                console.log("Successful" + data);
            })
        })*/
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            pointOfInterest: {
                zipCode: '',
                radius: '',
            }
        })
    }

    render() {
        return(
            <Auxillary>
                <Input name={"zipCode"}
                       title={"ZIP Code"}
                       type={"text"}
                       onChange={this.handleInput}/>
                <Select title={'Radius'}
                        name={'radius'}
                        options={this.state.radiusOptions}
                        value={this.state.pointOfInterest.radius}
                        placeholder={'Select Radius'}
                        onChange={this.handleInput}/>
                <Button />
            </Auxillary>
        )
    }

}

export default Form;