import React, { Component } from 'react';
import './App.css';
import Users from './components/Users';
import Navbar from './components/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faUserAlt,faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import AddUser from './components/AddUser';

library.add(faUserAlt, faTrashAlt)

class App extends Component {
    render () {
        return (
            <div className="App">
                <Navbar title="User App"/>
                <AddUser/>
                <hr/>
                <Users/>
            </div>
        );
    }

}

export default App;
