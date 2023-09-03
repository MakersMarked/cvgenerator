import { useState } from 'react';
import Preview from './Preview';
import ContactInfo from './ContactInfo';
import Education from './Education';
import Experience from './Experience';
function App() {

// Contact Info components's State and Fn's
const [contactInfo, setContactInfo] = useState({
       firstName:'',
       lastName:'',
       currentJob:'',
       summary:'',
       email:'',
       phoneNum:'',
       location:'',
       website:'' 
    })
    
    const handleContactInfo = (e) => {
        const newInfo = e.target.name;
        setContactInfo(({...contactInfo, [newInfo]:  e.target.value}))
    }
  // Education component's state and Fn's
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
  // Work Exp  component's State and Fn
  const [workExp, setWorkExp ] = useState({
		companyName: '',
		positionTitle: '',
		responsibilities:'',
		dates: {
            startDate:'',
            endDate:''
        }
	})
  const [date, setDate] = useState(workExp.dates);

     const handleStartDate = (e) => {
        setDate({...date, startDate: e })
        setWorkExp({...workExp, dates: date})
        console.log(workExp)
     }
     const handleEndDate = (e) => {
        setDate({...date, endDate: e })
        setWorkExp({...workExp, dates: date})
        console.log(workExp)

     }
	const handleWorkExp = (e)=> {
		const tempName = e.target.name;
		setWorkExp({...workExp,[tempName]:e.target.value});
        console.log(workExp)
	}
  return (
    <>
     <div className="temp">
      <ContactInfo handleContactInfo={handleContactInfo} />
      <Education handleSchoolInfo={handleSchoolInfo}/>
      <Experience
        handleStartDate = {handleStartDate}
        handleEndDate = {handleEndDate}
        handleWorkExp = {handleWorkExp}
        date= {date}
      />
     </div>
      
      <Preview 
        contactInfo={contactInfo}
        schoolInfo={schoolInfo}
        workExp={workExp}
      />
    </>
  )
}

export default App
