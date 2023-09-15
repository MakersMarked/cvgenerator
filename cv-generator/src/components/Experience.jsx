
import "react-datepicker/dist/react-datepicker.css";
import { SubmitBtn } from "./Utils";


const Experience = ({handleWorkExp, handleWorkExpList}
 ) => {

	
	return (
        <fieldset>
            <legend>Work Experience</legend>
            <section className="companyName">
                <div>
                    <label htmlFor="companyName">Company Name</label>
                    <input 
                    onChange={handleWorkExp}
                    type="text" 
                    name="companyName"
                    id="companyName"
                    />  
                </div>               
                <div>
                    <label htmlFor="positionTitle">Position Title</label>
                    <input 
                    onChange={(e)=> handleWorkExp(e)}
                    type="text"
                    name="positionTitle"
                    id="positionTitle"
                    />
                </div>
            </section>
            <section>
                <div>
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <textarea 
                    onChange={(e)=> handleWorkExp(e)}
                    name="responsibilities" 
                    id="responsibilities" 
                    cols="30" 
                    rows="5"
                    />  
                </div>
            </section>
                 
            
            <SubmitBtn onClick={handleWorkExpList} text="Add"/>
        </fieldset>
    )
}

export default Experience