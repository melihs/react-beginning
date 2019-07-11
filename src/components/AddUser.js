import React, {Component} from 'react';
import { Col,Card,CardHeader,CardBody,Form,Button} from 'reactstrap';
import AddInput from './AddInput';

class AddUser extends Component {
    render() {
        return (
            <Col md="8" className="mb-4">
                <Card>
                    <CardHeader>
                        <h4>Add user form </h4>
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
            </Col>
        );
    }
}

export default AddUser;