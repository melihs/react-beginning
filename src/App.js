import React, { Component } from 'react';
import './App.css';
import Users from './components/Users';
import Navbar from './components/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCheckSquare,faTrashAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faTrashAlt)

class App extends Component {
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
    deleteUser = (id) => {
        this.setState({
           mocUsers : this.state.mocUsers.filter( mocUser => id !== mocUser.id)
        })
    }
    render () {
        return (
            <div className="App">
                <Navbar title="User App"/>
                <hr/>
                <Users deleteUser={ this.deleteUser } users={ this.state.mocUsers }/>
            </div>
        );
    }

}

export default App;
