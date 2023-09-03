import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


const Experience = ({handleStartDate, handleEndDate, handleWorkExp, date}
 ) => {

	
	return (
        <fieldset>
            <legend>Work Experience</legend>
            <section>
                <label htmlFor="startDate">Start Date</label> 
                <DatePicker
                    name="startDate" 
                    id="startDate"
                    selected={date.startDate}
                    onChange={handleStartDate} />
                    <label htmlFor="endDate">End Date</label> 
                
                <DatePicker
                    selected= {date.endDate}
                    name="endDate" 
                    id="endDate"
                    onChange={handleEndDate}
                    />                
                <label htmlFor="companyName">Company Name</label>
                <input 
                onChange={handleWorkExp}
                type="text" 
                name="companyName"
                id="companyName"
                />
                <label htmlFor="positionTitle">Position Title</label>
                <input 
                onChange={(e)=> handleWorkExp(e)}
                type="text"
                name="positionTitle"
                id="positionTitle"
                 />
                 <label htmlFor="responsibilities">Responsibilities</label>
                 <textarea 
                 onChange={(e)=> handleWorkExp(e)}
                 name="responsibilities" 
                 id="responsibilities" 
                 cols="30" 
                 rows="5"
                 />
            </section>
        </fieldset>
    )
}

export default Experience