import { useState } from "react";

const Experience = () => {

	const [workExp, setWorkExp ] = useState({
		companyName: '',
		positionTitle: '',
		responsibilities:'',
		startDate:'',
		endDate:'',
		current:false
	})

	const handleWorkExp = (e)=> {
		const keyName = e.target.name;
		setWorkExp({...workExp,[keyName]:e.target.value});
        console.log(workExp)
	}
	return (
        <fieldset>
            <legend>Work Experience</legend>
            <section>
                <label htmlFor="companyName">Company Name</label>
                <input 
                onChange={(e)=> handleWorkExp(e)}
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
                 rows="10" 
                 />
                 {/* start Date and End Date new Date() */}
            </section>
        </fieldset>

    )

}

export default Experience