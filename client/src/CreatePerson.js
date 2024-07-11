import React, {Fragment} from "react";
import {useState} from "react";

export default function CreatePerson() {

    const [personState, setPersonState] = useState({
        fname: '',
        lname: ''
    });

    const onSaveButtonClicked = () => {
        // axios.post("/////", personState)
    }



    const onChange = (event) => {
        setPersonState({...personState, [event.target.name]: event.target.value});
    }

    return (
        <div>
            Firstname:
            <input
                type="text"
                value={personState.fname}
                onChange={onChange}
                name='fname'
            />

            Lastname:
            <input
                type="text"
                value={personState.lname}
                onChange={onChange}
                name='lname'
            />

            <input
                type="button"
                value='Save'
            />

        </div>
    )

}