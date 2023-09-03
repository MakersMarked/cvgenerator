import { useState } from 'react';

import ContactInfo from './ContactInfo';
import Education from './Education';
import Experience from './Experience';
function App() {

// Contact Info components's State and Fn's
const [contactInfo, setContactInfo] = useState({
       firstName:null,
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
     
     <ContactInfo handleContactInfo={handleContactInfo} />
     <Education />
    <Experience
    handleStartDate = {handleStartDate}
    handleEndDate = {handleEndDate}
    handleWorkExp = {handleWorkExp}
    date= {date}
    />
    </>
  )
}

export default App
