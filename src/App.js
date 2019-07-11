import React, { Component } from 'react';
import './App.css';
import Users from './components/Users';
import Navbar from './components/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCheckSquare,faTrashAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faTrashAlt)

class App extends Component {
    render () {
        return (
            <div className="App">
                <Navbar title="User App"/>
                <hr/>
                <Users/>
            </div>
        );
    }

}

export default App;
