import React,{ Component } from 'react';

//create context define
//provider,consumer
const UserContext = React.createContext();
const reducer = (state,action) => {
    switch(action.type) {
        case 'DELETE_USER':
            return {
                ...state,
                mocUsers: state.mocUsers.filter(mocUser => action.payload !== mocUser.id)
            }
        default :
            return state
    }
}

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
        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
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
