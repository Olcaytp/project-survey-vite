export const Course = ({ updateFormData, value }) => {
    const course = (e) =>
      updateFormData("course", e.target.value);
  
    return (
      <div className="course-container">
        <label className="course-label">Select the course that you participated?</label>
        <select className="course-select" value={value} onChange={course}>
        <option value=''>Select a course</option>
              <option value='Javascript and React'>Javascript and React</option>
              <option value='UX/UI'>UX/UI</option>
              <option value='Frontend bootcamp'>Frontend bootcamp</option>
              <option value='Python'>Python</option>
              <option value='C++'>C++</option>
              <option value='CAD'>CAD</option>
              <option value='C#'>C#</option>
              <option value='Java'>Java</option>
        </select>
      </div>
    );
  };
  