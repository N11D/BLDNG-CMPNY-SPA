import '../../styles/register.css'
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Регистрация</h1>

                    <label htmlFor="email">Имейл:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=""
                        onChange={onChange}
                        values={values[RegisterFormKeys.Email]}
                    />

                    <label htmlFor="pass">Парола:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]}
                    />

                    <label htmlFor="con-pass">Потвърдете Парола:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.ConfirmPassword]}
                    />

                    <input className="btn submit" type="submit" value="Регистрация" />

                    <p className="field">
                        <span>Ако имате профил, натиснете <Link to='/login' >тук</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}