import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col,Card, CardBody, CardHeader,CardText } from 'reactstrap';

class User extends Component {

    render() {
        const { name,department,salary } = this.props;
        return (
            <div className="mb-4">
                <Col md="4">
                    <Card>
                        <CardHeader className="d-flex justify-content-between">
                            <h4 className="d-inline">{ name }</h4>
                            <FontAwesomeIcon icon="trash-alt" style={{ cursor :"pointer" }}/>
                        </CardHeader>
                        <CardBody>
                            <CardText>Maaş :  { salary }</CardText>
                            <CardText>Departman :  { department }</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        );
    }
}

User.defaultProps = {
    name : "bilgi yok",
    department : "bilgi yok",
    salary : "bilgi yok"
}
User.propTypes = {
    name : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired
}

export default User;