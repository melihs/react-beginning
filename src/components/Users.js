import React,{ Component } from 'react';
import User from './User';
import UserConsumer from '../context';

class Users extends Component {
    render () {
        return (
            <UserConsumer>
                {
                    value => {
                        const { mocUsers } = value;
                        return (
                            <div>
                                {
                                    mocUsers.map(mocUser => {
                                        return (
                                            <User
                                                key = { mocUser.id }
                                                id = { mocUser.id }
                                                name={ mocUser.name }
                                                department={ mocUser.department }
                                                salary={ mocUser.salary }
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}
export default Users;

