import React from 'react';
import './App.css';
import User from './components/User';
import Navbar from './components/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCheckSquare,faTrashAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faTrashAlt)

function App() {
  return (
    <div className="App">
        <Navbar title="User App"/>
        <hr/>
        <User
            name="user 1"
            department="bilişim"
            salary="5000 TL"
        />
        <User
            name="user 2"
            department="tekstil"
            salary="7500 TL"
        />
    </div>
  );
}

export default App;
