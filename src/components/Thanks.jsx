export const Thanks = ({formData}) => {
    // Format the data and show an alert message with it
    const formattedData = `Hello, your name is ${formData.name}. You are ${formData.age} years old, and you live in ${formData.city}. By the way you enrolled Technigo ${formData.course} course and you are in a ${formData.team}. Lastly you gave the Technigo ${formData.rate} score, Thanks! We can reach you at ${formData.email}.`;

    return (
      <div>
        <h2>Thank you for your participation!</h2>
        <article className="summary-text">
          <p>{formattedData}</p>
        </article>

        <button
        onClick={() => window.location.reload(false)}
        type="button"
        className="link-button"
      >
        One more time
      </button>
      </div>
    );
  };
