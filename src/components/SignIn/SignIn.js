import React from "react";
//import LoginNavigation from "../Home/HomeHeader/Navigation";
import Nav from "../Login/Nav";
import { Link } from "react-router-dom";

const SignIn = () =>{
    return (
        <>
            <Nav/>
            <section className="login">
                <h2>Załóż konto</h2>
                <div className="login__column signin">
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
                        <div className="login__form-field">
                            <label className="login__form-label">Powtórz hasło</label>
                            <input className="form__field-input" type="password" id="repassword" name="repassword" />        
                                        {/* <input className="form__field-input" type="email" id="email" name="email" placeholder="abc@xyz.pl" {...emailForm}/>
                                        <p className="form__field-error">{emailForm.error && "nieporawny email"} </p> */}
                        </div>
                    </form>
                    <div className="login__buttons">
                                    {/* <button className="form__submit-button" onClick={handleSubmit}>Wyślij</button> */}
                                <button className="login__button" ><Link className="login__nav" to="/rejestracja">Zaloguj się</Link></button>
                                <button className="login__button login__button-active" >Załóż konto</button>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default SignIn;