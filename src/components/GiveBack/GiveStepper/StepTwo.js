import React, { useState } from "react";
import arrowDown from "../../../assets/Icon-Arrow-Down.svg";

const StepTwo=()=>{
    const [title, setTitle] = useState("— wybierz —");
    const [show, setShow] = useState(false);

    const showDropdownMenu = (e) =>{
        if (show===false) {setShow(true)
        } else {setShow(false)};
    }
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setShow(false);
      };

    return (
        <>
            <div className="stepper__info">
                <h3 className="stepper__container stepper__head">Ważne!</h3>
                <p className="stepper__container stepper__text">Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
            </div>
            <div className="stepper__body">
            <div className="stepper__container">
                    <p>Krok 2/4</p>
                    <div className="checkbox__container">
                        <h4 className="checkbox__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h4>
                        {/* <select>
                            <option value="0">- wybierz -</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select> */}
                        {/* <div class="calc__select" id="package" data-value="">
                            <div class="select__input">
                                Choose package
                            </div>
                        
                            <ul class="select__dropdown">
                                <li data-value="basic">Basic</li>
                                <li data-value="professional">Professional</li>
                                <li data-value="premium">Premium</li>
                            </ul>
                            </div> */}
                            <form>
                                <div className="select__title" onClick={showDropdownMenu}>
                                    <p>Liczba 60l worków: </p>
                                    <span className="btn__forms btn__forms-select">
                                        <div >
                                            {title}
                                        </div>
                                        <img src={arrowDown}></img>
                                    </span>
                                </div> 
                                {/* <button onClick={showDropdownMenu}>v</button> */}

                                <ul className={show === true ? "": "hide"} value={title} onClick={handleTitleChange}>
                                    {/* <option value="0"></option> */}
                                    <li value="1">1</li>
                                    <li value="2">2</li>
                                    <li value="3">3</li>
                                    <li value="4">4</li>
                                    <li value="5">5</li>
                                </ul>
                            </form>
                    </div>
                    <button className="btn__stepper">Wstecz</button>
                    <button className="btn__stepper">Dalej</button>
                </div>
            </div>
        </>
    )
}

export default StepTwo;
