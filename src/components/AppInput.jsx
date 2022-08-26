import { Field } from "formik";

const AppInput = ({ name, placeholder, type = "text", touchedFiled, errorField }) => (
    <div className="mt-6">
        <div className="flex flex-col">
            <label className="text-gray-600 mb-2">{name} :</label>
            <Field className={`border p-3 rounded-xl`} type={type} placeholder={placeholder} name={name} />
            {errorField && touchedFiled ? (
                <div className='text-red-500 text-sm mt-1'>{errorField}</div>
            ) : null}
        </div>
    </div>
)

export default AppInput;