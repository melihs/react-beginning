import React, {Component} from 'react';
import { Col,Card,CardHeader,CardBody,Form,Button} from 'reactstrap';
import AddInput from './AddInput';
import posed from 'react-pose';

const Animation = posed.div({
    visible : {
        opacity: 1,
        applyAtStart : { display: 'block' }
    },
    hidden : {
        opacity: 0,
        applyAtEnd : { display: 'none' }
    }
});

class AddUser extends Component {
    state = {
        visible : false
    }
    changeVisibility = (e) => {
        this.setState({
           visible : !this.state.visible
        });
    }
    render() {
        const { visible } = this.state;
        return (
            <Col md="8" className="mb-4">
                <Button onClick={ this.changeVisibility }
                        color={ visible ? 'secondary' : 'info' }
                        block className="mb-2">{ visible ? 'Hide Form' : 'Show Form' }</Button>
                <Animation pose={ visible ? 'visible' : 'hidden' }>
                    <Card>
                        <CardHeader>
                            <h4>Add User Form </h4>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <AddInput
                                    labelName="Name"
                                    labelFor="name"
                                    type="text"
                                    name="name"
                                    id="id"
                                    placeholder="enter name"
                                />
                                <AddInput
                                    labelName="Department"
                                    labelFor="deparment"
                                    type="text"
                                    name="department"
                                    id="id"
                                    placeholder="enter department"
                                />
                                <AddInput
                                    labelName="Salary"
                                    labelFor="salary"
                                    type="text"
                                    name="salary"
                                    id="id"
                                    placeholder="enter salary"
                                />
                                <Button color="success" block>Add User</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Animation>
            </Col>
        );
    }
}

export default AddUser;