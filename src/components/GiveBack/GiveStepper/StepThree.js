import React, {useState} from "react";
import arrowDown from "../../../assets/Icon-Arrow-Down.svg";
import arrowUp from "../../../assets/Icon-Arrow-Up.svg";

const StepThree=({nextStep, prevStep, stepThreeCityHandler, stepThreeCityData})=>{
    const [city, setCity] = useState(stepThreeCityData);
    const [show, setShow] = useState(false);
    const [arrowImage, setArrowImage] = useState(arrowDown)

    const showDropdownMenu = (e) =>{
        if (show===false) {
            setShow(true);
            setArrowImage(arrowUp);
        } else {
            setShow(false);
            setArrowImage(arrowDown);
        };
    };
    
    const handleCityChange = (e) => {
        setCity(e.target.dataset.value);
        //console.log((e.target.dataset.value));
        setShow(false);
    };

    const Continue = (e) => {
        e.preventDefault();
        nextStep();
        stepThreeCityHandler(city);
      };

    const Previous = (e) => {
        e.preventDefault();
        prevStep();
        stepThreeCityHandler(city);
      }
//console.log(city);

    return (
        <>
            <div className="stepper__info">
                <strong className="stepper__container stepper__head">Ważne!</strong>
                <p className="stepper__container stepper__text">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
            </div>
            <div className="stepper__body">
                <div className="stepper__container">
                    <p>Krok 3/4</p>
                    <div className="checkbox__container">
                        <h4 className="checkbox__title">Lokalizacja:</h4>
                        <form className="select">
                                <div className="select__title" onClick={showDropdownMenu}>
                                    <span className="btn__forms btn__forms-select">
                                        <div >
                                            {city}
                                        </div>
                                        <img src={arrowImage} alt="strzałka"></img>
                                    </span>
                                </div> 
                                {/* <button onClick={showDropdownMenu}>v</button> */}

                                <ul className={show === true ? "select__dropdown-city": "hide"} value={city} onClick={handleCityChange}>
                                    {/* <option value="0"></option> */}
                                    <li data-value="Poznań">Poznań</li>
                                    <li data-value="Warszawa">Warszawa</li>
                                    <li data-value="Kraków">Kraków</li>
                                    <li data-value="Wrocław">Wrocław</li>
                                    <li data-value="Katowice">Katowice</li>
                                </ul>
                                    <h5 className="checkbox__title-city">Komu chcesz pomóc?</h5>
                                    {/* <span className="checkbox__city"> */}
                                    <div>
                                        <label className="checkbox__city">
                                            <input type="checkbox"/>
                                            <span>dzieciom</span>
                                        </label>
                                        <label className="checkbox__city">
                                            <input type="checkbox"/>
                                            <span>samotnym matkom</span>
                                        </label>
                                        <label className="checkbox__city">
                                            <input type="checkbox"/>
                                            <span>bezdomnym</span>
                                        </label>
                                        <label className="checkbox__city">
                                            <input type="checkbox"/>
                                            <span>niepełnosprawnym</span>
                                        </label>
                                        <label className="checkbox__city">
                                            <input type="checkbox"/>
                                            <span>osobom starszym</span>
                                        </label>
                                    </div>
                                    {/* </span> */}
                                    <h5 className="checkbox__title-city">Wpisz nazwę konkretnej organizacji (opcjonalnie)</h5>
                                    <input className="select__input" type="text" id="oname" name="oname"/>
                            </form>
                    </div>
                    <button className="btn__stepper" onClick={Previous}>Wstecz</button>
                    <button className="btn__stepper" onClick={Continue}  disabled={city==="— wybierz —"? true:false}>Dalej</button>
                </div>
            </div>
        </>
    )
}

export default StepThree;