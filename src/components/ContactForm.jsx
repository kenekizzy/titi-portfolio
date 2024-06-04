

const ContactForm = () => {
  return (
    <div className="contactform">
      <h2 className="contactform-header">Let's Connect</h2>
      <hr/>
      <p className="text">
        Fill out the form and you'll get a response within the next 24hours, or reach out to me at 
        <span className="white-text"> ebi.titi96@gmail.com</span>
      </p>
      <form className="imput-form">
        <div className="name-label">
          <label>Your name</label>
        </div>
        <div className="name-input">
          <input type="text" placeholder="Enter name"/>
        </div>
        <div className="email-label">
          <label>Your email address?</label>
        </div>
        <div className="email-input">
          <input type="email" placeholder="Enter email address" />
        </div>
        <div className="description-label">
          <label>Describe the project you have in mind?</label>
        </div>
        <div className="description-input">
          <textarea placeholder="Enter description"/>
        </div>
        <div className="submit">
          <button className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm