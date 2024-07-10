import React, { useEffect, useState } from 'react';

interface MultiSelectProps {
    label: "Courses"| string;
    data: [];
    selected: [];
    onChange: () => void;
}

function MultiSelect(props: MultiSelectProps) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let newData = [];
        Object.entries(event.target.selectedOptions).forEach(([key,element]) => {
            newData.push(element.value);
        })
        props.onChange(newData);
    };
    return (
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">{props.label}</label>
            <div className="col-sm-10">
                <select multiple={true} className="form-control" onChange={handleChange}>
                    {props.data.map((x) => (
                        <option key={x.key} value={x.key}>
                            {x.value}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
export default MultiSelect;