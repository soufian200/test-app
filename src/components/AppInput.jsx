import { Field } from "formik";

const AppInput = ({ name, placeholder, type = "text", touchedFiled, errorField }) => (
    <div className="input-container">
        <div className="input-wrapper">
            <label className="label" htmlFor={name}>{name} :</label>
            <Field className="input" id={name} type={type} placeholder={placeholder} name={name} />
            {errorField && touchedFiled ? (
                <div className='input-feedback'>{errorField}</div>
            ) : null}
        </div>
    </div>
)

export default AppInput;