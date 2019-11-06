import React, {Component} from "react";
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Form from '../Form/Form';

class PointOfInterest extends Component {
    render() {
        return(
            <Auxillary>
                <Form />
                <div>Map</div>
                <div>List</div>
            </Auxillary>
        )
    }

}

export default PointOfInterest;