import { useState } from "react"

const ContactInfo = () => {


    return (
        <form >
            <fieldset className="basic-info">
                <legend>Who are You?</legend>
                <section>
                    <div className="name-input">
                        <label htmlFor="fname">First Name:</label>
                        <input type="text" id="fname" name="fname" placeholder="First Name"/>
                    </div>
                    <div className="name-input">
                        <label htmlFor="lname">Last Name:</label>
                        <input type="text" id="lname" name="lname" placeholder="Last Name"/>
                    </div>
                </section>
                
                
                <label htmlFor="job">Current Title:</label>
                <input type="text" id="job" name="job" placeholder="Senior software Developer" />
                <label htmlFor="summary">Summary:</label>
                <textarea type="" id="summary" name="summary" rows="4" cols="30"></textarea>
            </fieldset>
            <fieldset className="contact-info">
                <legend>Contact Information</legend>
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" placeholder="John.Doe@gmail.com"/>
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" />
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" placeholder="ex: Los Angeles, Ca"/>
                <label htmlFor="website">Website:</label>
                <input type="text" id="website" name="website" placeholder="https://linkedin.com/in/yourname"/>

            </fieldset>
            
                 

            
            

        </form>
    )

}
export default ContactInfo