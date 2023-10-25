export const Age = ({ updateFormData, value }) => {
    const ageInput = (e) => {
      let age = e.target.value;
      age = age.replace(/^0+/, '');
      if (age === '' || (parseInt(age, 10) >= 0 && parseInt(age, 10) <= 99)) {
        updateFormData("age", age);
      }
    };
  
    return (
      <div>
        <label>What is your age?</label>
        <input
          type="number"
          value={value}
          onChange={ageInput}
        />
      </div>
    );
  };
