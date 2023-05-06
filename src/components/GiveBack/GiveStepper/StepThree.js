import React, {useState} from "react";
import arrowDown from "../../../assets/Icon-Arrow-Down.svg";
import arrowUp from "../../../assets/Icon-Arrow-Up.svg";

const StepThree=({nextStep, prevStep})=>{
    const [city, setCity] = useState("— wybierz —");
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
        setCity(e.target.value);
        console.log((e.target.value));
        setShow(false);
    };

    const Continue = (e) => {
        e.preventDefault();
        nextStep();
      };

    const Previous = (e) => {
        e.preventDefault();
        prevStep();
      }
console.log(city);

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
                        <form>
                                <div className="select__title" onClick={showDropdownMenu}>
                                    <span className="btn__forms btn__forms-select">
                                        <div >
                                            {city}
                                        </div>
                                        <img src={arrowImage} alt="strzałka"></img>
                                    </span>
                                </div> 
                                {/* <button onClick={showDropdownMenu}>v</button> */}

                                <ul className={show === true ? "select__dropdown": "hide"} value={city} onClick={handleCityChange}>
                                    {/* <option value="0"></option> */}
                                    <li value="Poznań">Poznań</li>
                                    <li value="4">Warszawa</li>
                                    <li value="Kraków">Kraków</li>
                                    <li value="Wrocław">Wrocław</li>
                                    <li value="5">Katowice</li>
                                </ul>
                            </form>
                    </div>
                    <button className="btn__stepper" onClick={Previous}>Wstecz</button>
                    <button className="btn__stepper" onClick={Continue}>Dalej</button>
                </div>
            </div>
        </>
    )
}

export default StepThree;