import React,{ Component } from 'react';

//create context define
//provider,consumer
const UserContext = React.createContext();

export class UserProvider extends Component {
    state = {
        mocUsers : [
            {
                id : 1,
                name : 'test user 1',
                department : 'ar-ge',
                salary : '4200'
            },
            {
                id : 2,
                name : 'test user 2',
                department : 'avukat',
                salary : '6000'
            },
            {
                id : 3,
                name : 'test user 3',
                department : 'yönetim-organizasyon',
                salary : '15000'
            },
        ]
    }
    render() {
        const { children } = this.props;
        return (
            <UserContext.Provider value={ this.state }>
                { children }
            </UserContext.Provider>
        );
    }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
