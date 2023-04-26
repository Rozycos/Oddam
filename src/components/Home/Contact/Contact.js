import React, { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import {db} from "../../../firebase_setup/firebase";
import facebookIcon from "../../../assets/Facebook.svg";
import instagramIcon from "../../../assets/Instagram.svg";

const Contact =()=>{
    const [success, setSuccess] = useState(false);
    // const [email, setEmail] = useState("");
    // const [error, setError] = useState(null);
    // // const [name, setName] = useState("");
    // // const [subject, setSubject] = useState("");

    // function isValidEmail(email) {
    //     return /\S+@\S+\.\S+/.test(email);
    //   }
      
    //   const handleChange = event => {
    //     if (!isValidEmail(event.target.value)) {
    //       setError('Niepoprawny email');
    //     } else {
    //       setError(null);
    //     }
    
    //     setEmail(event.target.value);
    //   };
    const nameFormRules = /^[a-zA-Z]+$/;
    const emailFormRules = /\S+@\S+\.\S+/;

    const nameForm = useForm({
        validate: (value) => value.length < 2 || value.length > 15 || nameFormRules.test(value) === false,

    });

    const emailForm = useForm({
        validate: (value) => emailFormRules.test(value) === false,
        //value: value,
    });

    const subjectForm = useForm({
        validate: (value) => value.length <= 120,
    });

//     const [inputsContent, setInputsContent] = useReducer(
//         (state, newState) => ({ ...state, ...newState }),
//            {
//                name: "",
//                email: "",
//                subject: ""
//            }
//    );
//    const { name, email, subject} = inputsContent;

//    const handleInputChange = e => {
//     setInputsContent({
//             [e.target.name]: e.target.value
//         });
//     };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
            try {
                const docRef = await addDoc(collection(db, 'contactForm'), {
                    name: nameForm.value,
                    email: emailForm.value,
                    subject: subjectForm.value,
                    created: Timestamp.now()
                })
          
                console.log(docRef.id, nameForm.value);
                setSuccess(!success);
                } catch (err) {
                console.error(err)
            }
                
        };

    const formError = nameForm.error === true || emailForm.error === true || subjectForm.error === true || nameForm.value === "" || emailForm.value === "" || subjectForm.value === "" || success !== false;


    return (
        <>
            <section name="contact" className="contact container">
                <div className="contact__box">
                    <div className="contact__section">
                        <h2>Skontaktuj się z nami</h2>
                        <p className={success ? "success" : "hide"}>Wiadomość została wysłana! Wkrótce się skontaktujemy.</p>
                        <div className="contact__column">
                            <form className="form">
                                <div className="form__group">
                                    <div className="form__field">
                                        <label className="form__field-label">Wpisz swoje imię</label>
                                        {/* <input className="form__field-input" type="text" id="fname" name="fname" placeholder="Krzysztof" /> */}
                                        <input className={nameForm.error ? "form__field-input-error" : "form__field-input"} type="text" id="name" name="name" placeholder="Krzysztof"  {...nameForm} error="" />
                                        <p className="form__field-error">{nameForm.error && "Podane imię jest nieprawidłowe!"} </p>
                                    </div>
                                    <div className="form__field">
                                        <label className="form__field-label">Wpisz swój email</label>
                                        <input className={emailForm.error ? "form__field-input-error" : "form__field-input"} type="email" id="email" name="email" placeholder="abc@xyz.pl" {...emailForm} error="" />
                                        <p className="form__field-error">{emailForm.error && "Podany email jest nieprawidłowy!"} </p>
                                    </div>  
                                </div>
                                <div className="form__field-textarea">
                                    <label className="form__field-label">Wpisz swoją wiadomość</label>
                                    <textarea className={subjectForm.error ? "textarea-error" : "textarea"} id="subject" name="subject" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." {...subjectForm} error="" />
                                    <p className="form__field-error">{subjectForm.error && "Wiadomość musi mieć co najmniej 120 znaków!"} </p>
                                </div>
                                <div className="form__submit">
                                    <button className="form__submit-button" disabled={formError} onClick={handleSubmit} >Wyślij</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <p className="footer__copyrights">Copyright by Coders Lab</p>
                </div>
                    <span className="footer__icon-box">
                        <img className="footer__icon" src={facebookIcon} alt="ikona facebook"/>
                        <img className="footer__icon" src={instagramIcon} alt="ikona facebook"/>
                    </span>
            </section>
        </>
    )
}

export default Contact;