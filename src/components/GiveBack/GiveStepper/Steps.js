import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";

const Steps=()=>{
    const [step, setStep] = useState(1);

    // Funkcja przechodząca do następnego kroku Stepera
    const prevStep=() =>{
        setStep((step) => step - 1)
    }

    // Funkcja przechodząca do poprzedniego kroku Stepera
    const nextStep=() =>{
        setStep((step) => step + 1)
    }

    //console.log({step})
    const renderSteps=()=>{
        switch (step) {
            case 1: 
                return (
                    <StepOne
                        nextStep={nextStep}
                    />
                )
            case 2: 
                return (
                    <StepTwo
                        prevStep={prevStep}
                        nextStep={nextStep}
                    />
                )
            case 3: 
                return (
                    <StepThree
                        prevStep={prevStep}
                        nextStep={nextStep}
                    />
                )
            case 4:
                return (
                    <StepFour
                        prevStep={prevStep}
                        nextStep={nextStep}
                    />
                )
            case 5:
                return (
                    <StepFive
                        prevStep={prevStep}
                        nextStep={nextStep}
                    />
                )
            case 6:
                return (
                    <StepSix/>
                )
                // never forget the default case, otherwise VS code would be mad!
            default: 
                // do nothing
        }
    }
    return (
        <>
            {renderSteps()}
        </>
    )
    

}




// import React, { useState, useContext } from "react";
// import { Stepper, Step, StepLabel, Button } from "@material-ui/core";

// // Importujemy komponenty z formularzem
// import PersonalInfoForm from "./PersonalInfoForm";
// import ContactInfoForm from "./ContactInfoForm";
// import ConfirmationForm from "./ConfirmationForm";

// // Tworzymy kontekst dla Stepera
// const StepperContext = React.createContext();

// // Tworzymy listę kroków Stepera
// const steps = ["Personal Info", "Contact Info", "Confirmation"];

// // Funkcja renderująca Steper
// function FormStepper() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [personalInfo, setPersonalInfo] = useState({});
//   const [contactInfo, setContactInfo] = o
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   }

//   // Funkcja aktualizująca dane personalne
//   function handlePersonalInfoChange(info) {
//     setPersonalInfo(info);
//   }

//   // Funkcja aktualizująca dane kontaktowe
//   function handleContactInfoChange(info) {
//     setContactInfo(info);
//   }

//   return (
//     <StepperContext.Provider
//       value={{
//         activeStep,
//         personalInfo,
//         contactInfo,
//         handlePersonalInfoChange,
//         handleContactInfoChange,
//       }}
//     >
//       <Stepper activeStep={activeStep}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       {/* Renderujemy formularz w zależności od aktywnego kroku */}
//       {activeStep === 0 && <StepOne/>}
//       {activeStep === 1 && <StepTwo/>}
//       {activeStep === 2 && <StepThree/>}
//       {activeStep === 3 && <StepFour/>}
//       {activeStep === 4 && <StepFive/>}
//       <div>
//         <Button disabled={activeStep === 0} onClick={handleBack}>
//           Back
//         </Button>
//         <Button variant="contained" color="primary" onClick={handleNext}>
//           {activeStep === steps.length - 1 ? "Finish" : "Next"}
//         </Button>
//       </div>
//     </StepperContext.Provider>
//   );
// }

// // Komponent z formularzem do wprowadzania danych personalnych
// function PersonalInfoForm() {
//   const { personalInfo, handlePersonalInfoChange } = useContext(
//     StepperContext
//   );

//   // Funkcja obsługująca zmianę pola formularza
//   function handleChange(event) {
//     handlePersonalInfoChange({
//       ...personalInfo,
//       [event.target.name]: event.target.value,
//     });
//   }

//   return (
//     <form>
//       <label>
//         First Name:
//         <input
//           type="text"
//           name="firstName"
//           value={personalInfo.firstName || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Last Name:
//         <input
//           type="text"
//           name="lastName"
//           value={personalInfo.lastName || ""}
//           onChange={handleChange}
//         />
//       </label>
//     </form>
//   );
// }
//
export default Steps;