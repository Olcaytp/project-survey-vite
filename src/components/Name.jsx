// Purpose: display name of the user

export const Name = ({ value, updateFormData, isNameValid, setIsNameValid }) => {
    const userName = (e) => {
      const name = e.target.value;
      
      const lettersAndSpaces = /^[A-Za-z\s]*$/;

      if (lettersAndSpaces.test(name) || name === "") {
        updateFormData("name", name);
        if (name.length >= 3) {
          setIsNameValid(true);
        }
      }
    };
    return (
        <div>
          <label>What is your name?</label>
          <input type="text" value={value} onChange={userName} />
          {isNameValid === false && value.length < 3 && (
            <div style={{ color: "red" }}>Name must be at least 3 characters</div>
          )}
        </div>
      );
    };
