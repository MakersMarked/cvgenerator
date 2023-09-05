
const ContactInfo = ({handleContactInfo}) => {
    return (
        <form >
            <fieldset className="basic-info">
                <legend>Contact Information</legend>
                <section className="name-input">
                    <div>
                        <label htmlFor="fname">First Name:</label>
                        <input 
                            onChange= {handleContactInfo}  
                            type="text" 
                            id="fname" 
                            name="firstName" 
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="lname">Last Name:</label>
                        <input 
                            onChange= {handleContactInfo} 
                            type="text" 
                            id="lname" 
                            name="lastName" 
                            placeholder="Last Name"
                        />
                    </div>
                </section>
                <section className="email-phone">
                    <div>
                        <label htmlFor="email">Email Address:</label>
                        <input  
                            onChange= {handleContactInfo} 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="John.Doe@gmail.com"
                        /> 
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <input 
                            onChange= {handleContactInfo} 
                            type="tel" 
                            id="phone" 
                            name="phoneNum" 
                        />
                    </div>
                </section>
                <section className= "loc-web">
                    <div>
                        <label htmlFor="location">Location:</label>
                        <input
                            onChange= {handleContactInfo} 
                            type="text" 
                            id="location" 
                            name="location" 
                            placeholder="ex: Los Angeles, Ca"
                        />
                    </div>
                    <div>
                        <label htmlFor="website">Website:</label>
                        <input 
                            onChange= {handleContactInfo} 
                            type="text" 
                            id="website" 
                            name="website" 
                            placeholder="https://linkedin.com/in/yourname"
                        /> 
                    </div>
                    
                </section>
                <section className="job-input">
                    <div>
                        <label htmlFor="job">Current Title:</label>
                        <input 
                            onChange= {handleContactInfo} 
                            type="text" 
                            id="job" 
                            name="job" 
                            placeholder="Senior software Developer" 
                        />
                    </div>
                    
                </section>
                <section>
                    <div>
                        <label htmlFor="summary">Summary:</label>
                        <textarea 
                            onChange= {handleContactInfo} 
                            type="" 
                            id="summary" 
                            name="summary" 
                            rows="4" 
                            cols="30"
                        >
                    </textarea> 
                    </div>
                </section>
                
            </fieldset>
        </form>
    )
}
export default ContactInfo