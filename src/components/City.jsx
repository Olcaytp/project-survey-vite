export const City = ({ updateFormData, value }) => {
    const city = (e) => updateFormData("city", e.target.value);
  
    return (
      <div>
        <label>Which city do you live?</label>
        <div>
          <label>
            <input
              type="radio"
              name="city"
              value="Gothenburg"
              checked={value === "Gothenburg"}
              onChange={city}
            />
            Gothenburg
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="city"
              value="Stockholm"
              checked={value === "Stockholm"}
              onChange={city}
            />
            Stockholm
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="city"
              value="Malmö"
              checked={value === "Malmö"}
              onChange={city}
            />
            Malmö
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="city"
              value="Norrköping"
              checked={value === "Norrköping"}
              onChange={city}
            />
            Norrköping
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="city"
              value="Umeå"
              checked={value === "Umeå"}
              onChange={city}
            />
            Umeå
          </label>
        </div>
      </div>
    );
  };
  