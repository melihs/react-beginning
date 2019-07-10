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
            name="melih şahin"
            department="bilişim"
            salary="5000"
        />
    </div>
  );
}

export default App;
