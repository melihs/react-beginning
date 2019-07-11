import React from 'react';
import {FormGroup, Input, Label} from "reactstrap";

function AddInput (props) {
    return (
        <FormGroup>
            <Label for={ props.labelFor }>{ props.labelName }</Label>
            <Input
                type={ props.type }
                name={ props.name }
                id={ props.id }
                placeholder={ props.placeholder }

            />
        </FormGroup>
    )
}
export default AddInput;