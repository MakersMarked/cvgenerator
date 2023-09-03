
const ContactInfo = ({handleContactInfo}) => {
    return (
        <form >
            <fieldset className="basic-info">
                <legend>Contact Information</legend>
                <section className="name-input">
                    <div>
                        <label htmlFor="fname">First Name:</label>
                        <input 
                            onChange= {(e)=> handleContactInfo(e)}  
                            type="text" 
                            id="fname" 
                            name="firstName" 
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="lname">Last Name:</label>
                        <input 
                            onChange= {(e)=> handleContactInfo(e)} 
                            type="text" 
                            id="lname" 
                            name="lastName" 
                            placeholder="Last Name"
                        />
                    </div>
                </section>
        
                <section className="email-phone">
                    <label htmlFor="email">Email Address:</label>
                    <input  
                        onChange= {(e)=> handleContactInfo(e)} 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="John.Doe@gmail.com"
                    />
                    <label htmlFor="phone">Phone Number:</label>
                    <input 
                        onChange= {(e)=> handleContactInfo(e)} 
                        type="tel" 
                        id="phone" 
                        name="phoneNum" 
                    />
                </section>
                <section className= "loc-web">
                    <label htmlFor="location">Location:</label>
                    <input
                        onChange= {(e)=> handleContactInfo(e)} 
                        type="text" 
                        id="location" 
                        name="location" 
                        placeholder="ex: Los Angeles, Ca"
                     />
                    <label htmlFor="website">Website:</label>
                    <input 
                        onChange= {(e)=> handleContactInfo(e)} 
                        type="text" 
                        id="website" 
                        name="website" 
                        placeholder="https://linkedin.com/in/yourname"
                    />
                </section>
                <section className="job-input">
                    <label htmlFor="job">Current Title:</label>
                    <input 
                    onChange= {(e)=> handleContactInfo(e)} 
                    type="text" 
                    id="job" 
                    name="job" 
                    placeholder="Senior software Developer" 
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea 
                        onChange= {(e)=> handleContactInfo(e)} 
                        type="" 
                        id="summary" 
                        name="summary" 
                        rows="4" 
                        cols="30"
                    >
                    </textarea>
                </section>
            </fieldset>
        </form>
    )
}
export default ContactInfo