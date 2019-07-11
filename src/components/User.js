import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col,Card, CardBody, CardHeader,CardText } from 'reactstrap';
import UserConsumer from '../context';

class User extends Component {
    state = {
        isVisible : false
    }
    onClickEvent = (e) => {
        this.setState({
            isVisible : !this.state.isVisible
        })
    }
    onDeleteUser = (dispatch,e) => {
        const { id } = this.props;
        dispatch({ type : 'DELETE_USER',payload : id });
    }

    render() {
        const { name,department,salary } = this.props;
        const { isVisible } = this.state;

        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="mb-4">
                                <Col md="4">
                                    <Card >
                                        <CardHeader className="d-flex justify-content-between" >
                                            <h4 className="d-inline" onClick={ this.onClickEvent }>{ name }</h4>
                                            <FontAwesomeIcon
                                                onClick={ this.onDeleteUser.bind(this,dispatch) }
                                                icon="trash-alt"
                                                style={{ cursor :"pointer" }}
                                            />
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
            </UserConsumer>
        )
    }
}

User.defaultProps = {
    id : null,
    name : "bilgi yok",
    department : "bilgi yok",
    salary : "bilgi yok",
}
User.propTypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
}

export default User;