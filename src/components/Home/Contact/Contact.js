import React from "react";
import { useForm } from "./useForm";
import facebookIcon from "../../../assets/Facebook.svg";
import instagramIcon from "../../../assets/Instagram.svg";

const Contact =()=>{
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

    });

    const subjectForm = useForm({
        validate: (value) => value.length <= 120,
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if (nameForm.error === true || emailForm.error === true || subjectForm.error === true) {
            return alert("dane z formularza niepoprawne");
        } else if (nameForm.value === "" || emailForm.value === "" || subjectForm.value === "") {return alert ("wypełnij formularz");}
        
        else {return console.log("kliknięto wyślij i wysłano formularz")};

    }

    return (
        <>
            <section name="contact" className="contact container">
                <div className="contact__box">
                    <div className="contact__section">
                        <h2>Skontaktuj się z nami</h2>
                        <div className="contact__column">
                            <form className="form">
                                <div className="form__group">
                                    <div className="form__field">
                                        <label className="form__field-label">Wpisz swoje imię</label>
                                        {/* <input className="form__field-input" type="text" id="fname" name="fname" placeholder="Krzysztof" /> */}
                                        <input className="form__field-input" type="text" id="fname" name="fname" placeholder="Krzysztof" {...nameForm} error="" />
                                        <p className="form__field-error">{nameForm.error && "podaj od 2 do 15 liter, jeden wyraz"} </p>
                                    </div>
                                    <div className="form__field">
                                        <label className="form__field-label">Wpisz swój email</label>
                                        <input className="form__field-input" type="email" id="email" name="email" placeholder="abc@xyz.pl" {...emailForm} error=""/>
                                        <p className="form__field-error">{emailForm.error && "nieporawny email"} </p>
                                    </div>  
                                </div>
                                <div className="form__field-textarea">
                                    <label className="form__field-label">Wpisz swoją wiadomość</label>
                                    <textarea id="subject" name="subject" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." {...subjectForm} error=""/>
                                    <p className="form__field-error">{subjectForm.error && "wiadomość musi mieć co najmniej 120 znaków"} </p>
                                </div>
                                <div className="form__submit">
                                    <button className="form__submit-button" onClick={handleSubmit}>Wyślij</button>
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