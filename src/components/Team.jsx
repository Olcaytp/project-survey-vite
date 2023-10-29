export const Team = ({ updateFormData, value }) => {
    const team = (e) =>
      updateFormData("team", e.target.value);
  
    return (
      <div className="team-container">
        <label className="team-label">Select the team that you participated?</label>
        <select className="team-select" value={value} onChange={team}>
        <option value=''>Select a team</option>
        <option value='Team Banana'>Team Banana</option>
              <option value='Team Grape'>Team Grape</option>
              <option value='Team Watermelon'>Team Watermelon</option>
              <option value='Team Pineapple'>Team Pineapple</option>
              <option value='Team Cherry'>Team Cherry</option>
              <option value='Team Mango'>Team Mango</option>
        </select>
      </div>
    );
  };
  