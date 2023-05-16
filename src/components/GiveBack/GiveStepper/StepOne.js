import React, { useState, useReducer } from "react";
//import { stepOne } from "./InputsNames";

const stepOneCheckboxes=[
    {
        name: "ubrania, które nadają się do ponownego użycia",
        value: false
    },
    {
        name: "ubrania, do wyrzucenia",
        value: false
    },
    {
        name: "zabawki",
        value: false
    },
    {
        name: "książki",
        value: false
    },
    {
        name: "Inne",
        value: false
    }];

const StepOne=({nextStep, stepOneData, stepOneHandler})=>{
    //[false, false, false, false, false]
    const [checkedState, setCheckedState] = useState([false, false, false, false, false]);
    const [name, setName] = useState(['1','2','3','4','5']);

const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    // const updatedCheckedName = updatedCheckedState.reduce(
    //     (currentState, index) => {
    //       if (currentState === true) {
    //         return name[index]};
    //     }
    // );

    // const updatedCheckedName = name.map((item, index) =>
    //   index === position ? !item : item
    // );

    setCheckedState(updatedCheckedState);
    //setName(updatedCheckedName);
    const updatedCheckedName = updatedCheckedState.reduce(
        (currentState, index) => {
          if (currentState === true) {
            return stepOneCheckboxes[index]};
        }
    );
    setName(updatedCheckedName);

}
    console.log(checkedState, name)
    //console.log(checkedState)
    
const Continue = (e) => {
        e.preventDefault();
        nextStep();
        stepOneHandler();
      };

    return (
        <>
            <div className="stepper__info">
                <h3 className="stepper__container stepper__head">Ważne!</h3>
                <p className="stepper__container stepper__text">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            </div>
            <div className="stepper__body">
                <div className="stepper__container">
                    <p>Krok 1/4</p>
                    <div className="checkbox__container">
                        <h4 className="checkbox__title">Zaznacz co chcesz oddać:</h4>
                        {/* <div> */}
                            {stepOneCheckboxes.map(({ name }, index) => {
                                return(
                                    <div key={index}>
                                        <label className="checkbox">
                                            <input 
                                            type="checkbox"
                                            id={`custom-checkbox-${index}`}
                                            name={name}
                                            value={name}
                                            checked={checkedState[index]}
                                            onChange={() => handleOnChange(index)}
                                            />
                                            <span></span>
                                            {name}
                                        </label>                         
                                    </div>
                                );
                            })}
                            {/* <label className="checkbox">
                                <input type="checkbox" onChange={() => handleOnChange(0)}/>
                                <span></span>
                                ubrania, które nadają się do ponownego użycia
                            </label>
                            <label className="checkbox">
                                <input type="checkbox" onChange={() => handleOnChange(1)}/>
                                <span></span>
                                ubrania, do wyrzucenia
                            </label>
                            <label className="checkbox">
                                <input type="checkbox" onChange={() => handleOnChange(2)}/>
                                <span></span>
                                zabawki
                            </label>
                            <label className="checkbox">
                                <input type="checkbox" onChange={() => handleOnChange(3)}/>
                                <span></span>
                                książki
                            </label>
                            <label className="checkbox">
                                <input type="checkbox" onChange={() => handleOnChange(4)}/>
                                <span></span>
                                Inne
                            </label> */}

                    </div>
                    <button className="btn__stepper" onClick={Continue}>Dalej</button>
                </div>
            </div>
        </>
    )
}

export default StepOne;