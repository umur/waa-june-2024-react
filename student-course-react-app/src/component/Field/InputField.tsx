interface Props {
    name: string;
    type: string;
    label: string;
    value: string|number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField = ({name, label, type, value, onChange}:Props) => {
    return (
        <>
            <div className={"form-group row mb-3"}>
                <label className="col-sm-2 col-form-label">{label}</label>
                <div className="col-sm-10">
                    <input
                        name={name}
                        type={type}
                        value={value}
                        onChange={onChange}
                        className="form-control"
                    />
                </div>
            </div>
        </>
    )
}

export default InputField;