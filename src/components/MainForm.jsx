// Import React, components, css
import { useState } from "react";
import "../App.css";
import { Thanks } from "./Thanks";
import { Name } from "./Name";
import { Age } from "./Age";
import { Email } from "./Email";

export const MainForm = () => {
  // Define state variables
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    city: "",
    job: "",
    favmovie: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);

  // Function for handling form data
  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  //Function for the next step
  const nextStep = () => {
    if (currentStep < 6 && validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  //Function for the previous step
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  //Function for validating the step
  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.name.trim().length >= 3;
      case 2: {
        const age = parseInt(formData.age, 10);
        return !isNaN(age) && age >= 1 && age <= 99;
      }
      case 3: {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(formData.email);
      }
      case 4:
        return formData.city !== "";
      case 5:
        return formData.job !== "";
      case 6:
        return formData.favmovie !== "";
      default:
        return true;
    }
  };

  //Function for handling form submission
  const submitForm = () => {
    // Format the data and show an alert message with it
    const formattedData = `Hello, your name is ${formData.name}. You are ${formData.age} years old, and you live in ${formData.city}. You work as a ${formData.job}, and your favorite movie is "${formData.favmovie}". We can reach you at ${formData.email}.`;
    const alertMessage = `You have submitted the form with the following data: ${formattedData}`;
    alert(alertMessage);

    //Submit the form
    setSubmitted(true);
  };

  //Function to start survey
  const startSurvey = () => {
    setCurrentStep(1);
    console.log("Survey started");
  };

  //Reset the form and the state
  const restartSurvey = () => {
    setCurrentStep(1);
    setFormData({
      name: "",
      age: "",
      email: "",
      potato: "",
      trust: "",
      movie: "",
    });
    setSubmitted(false);
  };

  //Render the form
  return (
    <div>
      {submitted ? (
        <Thanks />
      ) : (
        <>
          <div className="button-container">
            {currentStep === 0 && (
              <div>
                <div className="start-button">
                  <button onClick={startSurvey}>Start survey</button>
                </div>
              </div>
            )}
            {currentStep !== 0 && (
              <>
                {currentStep === 1 && (
                  <Name isNameValid={isNameValid} value={formData.name} updateFormData={updateFormData} />
                )}
                {currentStep === 2 && (
                  <Age value={formData.age} updateFormData={updateFormData} />
                )}
                {currentStep === 3 && (
                  <Email
                    value={formData.email}
                    updateFormData={updateFormData}
                  />
                )}
                {/*                
                {currentStep === 4 && (
                  <Potato value={formData.potato} updateFormData={updateFormData} />
                )}
                {currentStep === 5 && (
                  <Trust value={formData.trust} updateFormData={updateFormData} />
                )}
                {currentStep === 6 && (
                  <Movie value={formData.movie} updateFormData={updateFormData} />
                )}*/}
                <div>
                  {currentStep > 1 && <button onClick={prevStep}>Back</button>}
                  {currentStep < 6 ? (
                    <button
                      onClick={nextStep}
                      disabled={!validateStep(currentStep)}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={submitForm}
                      disabled={!validateStep(currentStep)}
                    >
                      Submit
                    </button>
                  )}
                  {currentStep === 6 && (
                    <button onClick={restartSurvey}>Restart</button>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};
