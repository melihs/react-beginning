import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col,Card, CardBody, CardHeader,CardText } from 'reactstrap';

class User extends Component {
    state = {
        isVisible : false
    }
    onClickEvent = (number,e) => {
        this.setState({
            isVisible : !this.state.isVisible
        })
    }
    onDeleteUser = () => {
        const { id,deleteUser } = this.props;
        deleteUser(id);
    }

    render() {
        const { name,department,salary } = this.props;
        const { isVisible } = this.state;
        return (
            <div className="mb-4">
                <Col md="4">
                    <Card >
                        <CardHeader className="d-flex justify-content-between" >
                            <h4 className="d-inline" onClick={ this.onClickEvent.bind(this,34) }>{ name }</h4>
                            <FontAwesomeIcon onClick={ this.onDeleteUser } icon="trash-alt"style={{ cursor :"pointer" }} />
                        </CardHeader>
                        {
                            isVisible ?
                                <CardBody>
                                    <CardText>Maaş :  { salary } TL</CardText>
                                    <CardText>Departman :  { department }</CardText>
                                </CardBody>
                                : null
                        }
                    </Card>
                </Col>
            </div>
        );
    }
}

User.defaultProps = {
    id : null,
    name : "bilgi yok",
    department : "bilgi yok",
    salary : "bilgi yok",
    deleteUser : null
}
User.propTypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    deleteUser : PropTypes.func.isRequired
}

export default User;