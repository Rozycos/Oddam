import React, { useReducer } from "react";
import Nav from "../Login/Nav";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
//import {auth} from "../../firebase_setup/firebase";

const SignIn = () =>{
    const navigate = useNavigate();
    const [inputsContent, setInputsContent] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
          email: "",
          password: ""
        }
      );
    
    const { email, password } = inputsContent;
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

    const formError = passwordForm.value !== rePasswordForm.value;

    const handleInputChange = e => {
        setInputsContent({
          [e.target.name]: e.target.value
        });
      };

    const handleSignUp = async (e) =>{
        e.preventDefault();
        
        if (emailForm.error === true || passwordForm.error === true || rePasswordForm.value === true) {
            return alert("wpisz poprawne dane");
        } else if (emailForm.value === "" || passwordForm.value === "" || rePasswordForm.value === "") {return alert ("wypełnij pole logowania");}
        
        else {
            console.log(emailForm.value, password);
            console.log(password);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailForm.value, passwordForm.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/");
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
                console.log(errorCode + errorMessage + email);
                alert(
                    `Podany email jest już użyty, zaloguj się lub użyj innego adresu email, ${error}`
                  )
          });

            return console.log("kliknięto wyślij i wysłano formularz")
        };

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
                            <input className="form__field-input" type="email" id="email" name="email" onChange={handleInputChange} {...emailForm} error=""/>
                            <p className="form__field-error">{emailForm.error && "nieporawny email"} </p>            
                        </div>
                        <div className="login__form-field">
                            <label className="login__form-label">Hasło</label>
                            <input className="form__field-input" type="password" id="password" name="password" onChange={handleInputChange} {...passwordForm} error=""/>        
                            <p className="form__field-error">{passwordForm.error && "Minimum 6 znakow"} </p>
                        </div>
                        <div className="login__form-field">
                            <label className="login__form-label">Powtórz hasło</label>
                            <input className="form__field-input" type="password" id="repassword" name="repassword" {...rePasswordForm} error=""/>        
                            <p className="form__field-error">{rePasswordForm.error && "hasła nie zgadzaja się"} </p>            
                        </div>
                    </form>
                </div>
                <div className="login__buttons">
                    <button className="login__button" ><Link className="login__nav" to="/logowanie">Zaloguj się</Link></button>
                    <button className="login__button login__button-active" disabled={formError} onClick={handleSignUp}>Załóż konto</button>
                </div>
            </section>
            
        </>
    )
}

export default SignIn;