import { useState } from "react"
// firstName, lastName, currentJob, summary, email, phoneNum, location, website
const ContactInfo = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [currentJob, setCurrentJob] = useState('');
    const [summary, setSummary] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [location, setLocation] = useState('');
    const [website, setWebsite] = useState('')



    return (
        <form >
            <fieldset className="basic-info">
                <legend>Who are You?</legend>
                <section className="name-input">
                    <div>
                        <label htmlFor="fname">First Name:</label>
                        <input onChange= {(e)=> setFirstName(e.target.value)}  type="text" id="fname" name="fname" placeholder="First Name"/>
                        
                    </div>
                    <div>
                        <label htmlFor="lname">Last Name:</label>
                        <input onChange= {(e)=> setLastName(e.target.value)} type="text" id="lname" name="lname" placeholder="Last Name"/>
                    </div>
                </section>
                
                <section className="job-input">
                    <label htmlFor="job">Current Title:</label>
                    <input onChange= {(e)=> setCurrentJob(e.target.value)} type="text" id="job" name="job" placeholder="Senior software Developer" />
                    <label htmlFor="summary">Summary:</label>
                    <textarea onChange= {(e)=> setSummary(e.target.value)} type="" id="summary" name="summary" rows="4" cols="30"></textarea>
                </section>
                
            </fieldset>
            <fieldset className="contact-info">
                <legend>Contact Information</legend>
                <section className="email-phone">
                    <label htmlFor="email">Email Address:</label>
                    <input  onChange= {(e)=> setEmail(e.target.value)} type="email" id="email" name="email" placeholder="John.Doe@gmail.com"/>
                    <label htmlFor="phone">Phone Number:</label>
                    <input onChange= {(e)=> setPhoneNum(e.target.value)} type="tel" id="phone" name="phone" />
                </section>
                <section className= "loc-web">
                    <label htmlFor="location">Location:</label>
                    <input onChange= {(e)=> setLocation(e.target.value)} type="text" id="location" name="location" placeholder="ex: Los Angeles, Ca"/>
                    <label htmlFor="website">Website:</label>
                    <input onChange= {(e)=> setWebsite(e.target.value)} type="text" id="website" name="website" placeholder="https://linkedin.com/in/yourname"/>
                </section>
                

            </fieldset>
            
                 

            
            

        </form>
    )

}
export default ContactInfo