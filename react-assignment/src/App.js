import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router';
import Course from "./Course";
import ToggleList from "./ToggleList";
import TestRoute from './TestRoute';
import Person from "./Person";
import {useEffect, useState} from "react";
import axios, {get} from "axios";
import CreatePerson from "./CreatePerson";
import {Link} from "react-router-dom";
import AddPerson from "./AddPerson";
import PersonDetail from "./PersonDetail";
import Persons from "./Persons";

function App(){
    return(
        <div className="App">
            <ul>
                <li>
                    <Link to="/persons"> Person List </Link>
                </li>
                <li>
                    <Link to="/add"> Create Person </Link>
                </li>
                <li>
                    <Link to="/detail">Person Detail </Link>
                </li>
            </ul>

            <Routes>
                <Route path="/persons" element={<Persons />}/>
                <Route path="/add" element={<CreatePerson />}/>
                <Route path="/detail/:personid" element={<PersonDetail />}/>
            </Routes>

        </div>
    )
}

export default App;
