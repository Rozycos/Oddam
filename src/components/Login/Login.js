import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Login = () =>{
    return (
        <>
            {/* <LoginNavigation/> */}
            <Nav/>
            <section className="login">
                <h2>Zaloguj się</h2>
                <div className="login__column">
                    <form className="login__form">
                        <div className="login__form-field">
                            <label className="login__form-label">Email</label>
                            <input className="form__field-input" type="email" id="email" name="email" />    
                                        {/* <input className="form__field-input" type="text" id="fname" name="fname" placeholder="Krzysztof" /> */}
                                        {/* <input className="form__field-input" type="text" id="fname" name="fname" placeholder="Krzysztof" {...nameForm} />
                                        <p className="form__field-error">{nameForm.error && "podaj od 2 do 15 liter, jeden wyraz"} </p> */}
                        </div>
                        <div className="login__form-field">
                            <label className="login__form-label">Hasło</label>
                            <input className="form__field-input" type="password" id="password" name="password" />        
                                        {/* <input className="form__field-input" type="email" id="email" name="email" placeholder="abc@xyz.pl" {...emailForm}/>
                                        <p className="form__field-error">{emailForm.error && "nieporawny email"} </p> */}
                        </div>  
                    </form>
                    <div className="login__buttons">
                                    {/* <button className="form__submit-button" onClick={handleSubmit}>Wyślij</button> */}
                                <button className="login__button" ><Link className="login__nav" to="/rejestracja">Załóż konto</Link></button>
                                <button className="login__button login__button-active" >Zaloguj się</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;