import React from "react";
import Nav from "../Login/Nav";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const SignIn = () =>{
    const emailFormRules = /\S+@\S+\.\S+/;

    const emailForm = useForm({
        validate: (value) => emailFormRules.test(value) === false,

    });

    const passwordForm = useForm({
        validate: (value) => value.length <= 5,
    });

    const rePasswordForm = useForm({
        validate: (value) => value.length <= 5 || value !== passwordForm.value,
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if (emailForm.error === true || passwordForm.error === true || rePasswordForm.value === true) {
            return alert("wpisz poprawne dane");
        } else if (emailForm.value === "" || passwordForm.value === "" || rePasswordForm.value === "") {return alert ("wypełnij pole logowania");}
        
        else {return console.log("kliknięto wyślij i wysłano formularz")};

    }

    return (
        <>
            <Nav/>
            <section className="login">
                <h2>Załóż konto</h2>
                <div className="login__column signin">
                    <form className="login__form">
                        <div className="login__form-field">
                            <label className="login__form-label">Email</label>
                            <input className="form__field-input" type="email" id="email" name="email" {...emailForm} error=""/>    
                            <p className="form__field-error">{emailForm.error && "nieporawny email"} </p>            
                        </div>
                        <div className="login__form-field">
                            <label className="login__form-label">Hasło</label>
                            <input className="form__field-input" type="password" id="password" name="password" {...passwordForm} error=""/>        
                            <p className="form__field-error">{passwordForm.error && "Minimum 6 znakow"} </p>
                        </div>
                        <div className="login__form-field">
                            <label className="login__form-label">Powtórz hasło</label>
                            <input className="form__field-input" type="password" id="repassword" name="repassword" {...rePasswordForm} error=""/>        
                            <p className="form__field-error">{rePasswordForm.error && "hasla nie zgadzaja sie"} </p>            
                        </div>
                    </form>
                </div>
                <div className="login__buttons">
                    <button className="login__button" ><Link className="login__nav" to="/logowanie">Zaloguj się</Link></button>
                    <button className="login__button login__button-active" onClick={handleSubmit}>Załóż konto</button>
                </div>
            </section>
            
        </>
    )
}

export default SignIn;