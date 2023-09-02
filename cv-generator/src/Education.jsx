import { useState } from "react";



const Education = () => {

    const [schoolInfo, setSchoolInfo] = useState({
        schoolName:'',
        fieldOfStudy:'',
        degree:''
    });
    const handleSchoolInfo = (e) => {
        const name = e.target.name;
        setSchoolInfo({...schoolInfo, [name]: e.target.value})
        console.log(schoolInfo)
    }
const degreeTypes = ['Associates', 'Bachelors', 'Masters', 'Doctorate']
        .map((item, index)=> <option key={index} value={item}>{item}</option>);
 

 return (
    <>
        <fieldset>
            <legend>Education</legend>
            <section>
                <label htmlFor="school">School:</label>
                <input 
                    onChange= {(e)=> handleSchoolInfo(e)}
                    type="text" 
                    id="school" 
                    name="schoolName"
                    placeholder="College or University" 
                />
               <label htmlFor="degree">Degree:</label> 
               <select
               onClick={(e)=> handleSchoolInfo(e)} name="degree" id="degree">
                    {degreeTypes}
               </select>
               
               <label htmlFor="fos">Field of Study:</label>
               <input 
                    onChange= {(e)=> handleSchoolInfo(e)}
                    type="text"
                    name="fieldOfStudy"
                    id="fos"
                    placeholder="Computer Science" 
               />
            </section>
        </fieldset>
    </>
 ) 
}

export default Education
