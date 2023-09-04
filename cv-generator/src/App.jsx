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
    const [educationList, setEducationList] = useState([])
    
const handleSchoolInfo = (e) => {
        const name = e.target.name;
        setSchoolInfo({...schoolInfo, [name]: e.target.value})
    }
const handleEducationList = () => { 
  const list = educationList.push(schoolInfo)
      setEducationList([{list}, ...educationList])
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
  const [workExpList, setWorkExpList] = useState([])
  
  const handleWorkExpList = () => { 
    const list = workExpList.push(workExp)
        setWorkExpList([{list}, ...workExpList])
        console.log(workExpList)
      }

  const [date, setDate] = useState(workExp.dates);

  
     const handleStartDate = (e) => {
        setDate({...date, startDate: e })
        setWorkExp({...workExp, dates: date})
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
    <div className='module'>

<div className="temp">
      <ContactInfo 
        handleContactInfo={handleContactInfo} 
      />
      <Education 
        handleSchoolInfo={handleSchoolInfo} 
        handleEducationList={handleEducationList}
      />
      <Experience
        handleStartDate = {handleStartDate}
        handleEndDate = {handleEndDate}
        handleWorkExp = {handleWorkExp}
        handleWorkExpList={handleWorkExpList}
        date= {date}
      />
     </div>
      <div>
        <Preview 
                contactInfo={contactInfo}
                educationList={educationList}
                workExpList={workExpList}
              />
      </div>
    </div>
     
     
    
  )
}

export default App
