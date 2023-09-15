import { SubmitBtn } from "./Utils"


const Education = ({handleSchoolInfo, handleEducationList }) => {

    const degreeTypes = ['Associates', 'Bachelors', 'Masters', 'Doctorate']
    .map((item, index)=> <option key={index} value={item}>{item}</option>)

 return (
        <fieldset>
            <legend>Education</legend>
            <section className="school">
                <div >
                    <label htmlFor="school">School:</label>
                    <input 
                        onChange= {handleSchoolInfo}
                        type="text" 
                        id="school" 
                        name="schoolName"
                        placeholder="College or University" 
                    />
                </div>
                <div>
                    <label htmlFor="degree">Degree:</label> 
                    <select onClick={handleSchoolInfo} name="degree" id="degree" value={degreeTypes[0]}>
                        {degreeTypes}
                    </select>
                </div>
            </section>
            <section className="fieldOfStudy">
                <div>
                    <label htmlFor="fos">Field of Study:</label>
                    <input 
                        onChange= {handleSchoolInfo}
                        type="text"
                        name="fieldOfStudy"
                        id="fos"
                        placeholder="Computer Science" 
                    />
                </div>
                <div>
                    <label htmlFor="gradYear">Year Completed:</label>
                    <input type="num" 
                    onChange={handleSchoolInfo}
                    name="gradYear"
                    id="gradYear"
                    />
                    
                </div>
            </section>
            <SubmitBtn 
                onClick={handleEducationList} 
                text = "Add"
            />
                
            
        </fieldset> 
        
 ) 
}

export default Education