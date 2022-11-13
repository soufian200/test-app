import { Formik, Form, } from 'formik';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { AppInput } from '../components';
import AuthContext from '../contexts/AuthContext';


/**
 * 
 * Login Schema
 */
const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Weak password.')
        .max(50, 'Too Long!')
        .required('Required'),
});

/**
 * 
 * Initial Form Values
 */

const initialValues = {
    email: '',
    password: ''
}

function Login() {

    let history = useHistory();
    const { user, setUser } = useContext(AuthContext);

    /**
     * When user click on Login button
     * @param {*} values 
     */
    const handleSubmit = values => {

        // console.log(values)

        // store data in localstorage
        localStorage.setItem("user", JSON.stringify(values));

        // set authenticated user
        setUser(values)

        // redirect to posts page
        history.replace("/posts")


    }

    // If user already authenticated redirect him to posts
    useEffect(() => {
        if (user?.email) {
            history.replace("/posts")
        }
    }, [user])

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="head" >Login</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={LoginSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>

                            <AppInput
                                name="email"
                                type="email"
                                errorField={errors.email}
                                touchedFiled={touched.email}
                                placeholder="email@exemple.com"
                            />

                            <AppInput
                                name="password"
                                type="password"
                                errorField={errors.password}
                                touchedFiled={touched.password}
                                placeholder="Password"
                            />

                            <button type="submit" className="form-submit-btn" >Login</button>
                        </Form>
                    )}
                </Formik>

            </div>
        </div>
    );
}

export default Login;