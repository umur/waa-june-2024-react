import React from "react";
import {useState} from "react";

export default function ToggleList(){
    const [currentList, setCurrentList] = useState("Compro");
    const toggleCourse = function (){
        if(currentList==='MBA')
            setCurrentList("Compro");
        else
            setCurrentList("MBA");
    }
    return (
        <div>
            <input
                type="button"
                value="Toggle List"
                onClick={toggleCourse}
            />
            <div> {currentList} Course List</div>
        </div>
    );
}