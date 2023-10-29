export const Rate = ({ updateFormData, value }) => {
    const rate = (e) => updateFormData("rate", e.target.value);
  
    return (
      <div className="slider-container">
        <label className="label">How much rate do you have for Technigo? </label>
        <input
          type="range"
          className="slider"
          min="0"
          max="100"
          value={value}
          onChange={rate}
        />
        <span>%{value}</span>
      </div>
    );
  };
  