import React, {useEffect} from "react";
import {useState} from "react";
import axios from "axios";
import Person from "./Person";

export default function Persons() {

    const personList = [
        {id: 0, fname: 'Test', lname: 'Test'}
    ]

    const [personState, setPersonState] = useState(personList);

    const getAllPerson = async () => {
        const result = await axios.get("http://localhost:8080/persons");
        setPersonState(result.data);
    }

    useEffect(() => {
        getAllPerson();
    }, []);

    return (
        <div>
            {
                personState.map((item) => {
                    return (
                        <Person
                            id={item.id}
                            fname={item.fname}
                            lname={item.lname}
                        />
                    )
                })
            }
        </div>
    )
}