import React from "react";

const StepFour=({nextStep, prevStep})=>{

    const Continue = (e) => {
        e.preventDefault();
        nextStep();
      };

    const Previous = (e) => {
        e.preventDefault();
        prevStep();
      }

    return (
        <>
            <div className="stepper__info">
                <strong className="stepper__container stepper__head">Ważne!</strong>
                <p className="stepper__container stepper__text">Podaj adres oraz termin odbioru rzeczy.</p>
            </div>
            <div className="stepper__body">
                <div className="stepper__container">
                    <p>Krok 4/4</p>
                    
                    <div className="checkbox__container">
                        <h4 className="checkbox__title">Podaj adres oraz termin odbioru rzeczy przez kuriera</h4>
                        <div className="checkbox__title-container">
                            <div>
                                <h5 className="checkbox__title-city">Adres odbioru:</h5>
                                <form className="select select__adress">
                                    <div className="select__adress-sfield">
                                        <label>Ulica</label>
                                        <input className="select__input select__input-adress" type="text" id="street" name="street"/>
                                    </div>
                                    <div className="select__adress-sfield">
                                        <label>Miasto</label>
                                        <input className="select__input select__input-adress" type="text" id="street" name="street"/>
                                    </div>
                                    <div className="select__adress-sfield">
                                        <label>Kod pocztowy</label>
                                        <input className="select__input select__input-adress" type="text" id="street" name="street"/>
                                    </div>
                                    <div className="select__adress-sfield">
                                        <label>Numer telefonu</label>
                                        <input className="select__input select__input-adress" type="text" id="street" name="street"/>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h5 className="checkbox__title-city">Termin odbioru:</h5>
                                <form className="select select__adress">
                                    <div className="select__adress-sfield">
                                        <label>Data</label>
                                        <input className="select__input select__input-adress" type="text" id="street" name="street"/>
                                    </div>
                                    <div className="select__adress-sfield">  
                                        <label>Godzina</label>
                                        <input className="select__input select__input-adress" type="text" id="street" name="street"/>
                                    </div> 
                                    <div className="select__adress-sfield">   
                                        <label>Uwagi dla kuriera</label>
                                        <textarea className="select__input select__input-adress select__input-adress-textarea" type="text" id="street" name="street"/>
                                    </div> 
                                </form>
                            </div>
                        </div>
                    </div>
                    <button className="btn__stepper" onClick={Previous}>Wstecz</button>
                    <button className="btn__stepper" onClick={Continue}>Dalej</button>
                </div>
            </div>
        </>
    )
}

export default StepFour;