import { useState } from 'react';
import  uniqid  from 'uniqid'
import Preview from './components/Preview';
import ContactInfo from './components/ContactInfo';
import Education from './components/Education';
import Experience from './components/Experience';

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
        degree:'',
        fieldOfStudy:'',
        gradYear:'',
        id:''
    });
    const [educationList, setEducationList] = useState([])
    
const handleSchoolInfo = (e) => {
        const name = e.target.name;
        setSchoolInfo({...schoolInfo, [name]: e.target.value, id: uniqid()})
        
    }
const handleEducationList = () => { 
    const list = educationList
      list.push(schoolInfo)
      setEducationList([...list])
      
    }    
  // Work Exp  component's State and Fn
  const [workExp, setWorkExp ] = useState({
		companyName: '',
		positionTitle: '',
		responsibilities:'',
    id:''
	})
  const [workExpList, setWorkExpList] = useState([])
  
  const handleWorkExpList = () => { 

    const list = workExpList;
      list.push(workExp)
        setWorkExpList([...list])
        
      }

	const handleWorkExp = (e)=> {
		const tempName = e.target.name;
		setWorkExp({...workExp,[tempName]:e.target.value, id:uniqid()});
        
	}
  const handleDeleteWork = (id) =>{
    const temp = workExpList.filter(job => job.id !== id)
    setWorkExpList(temp)
  }
  const handleDeleteSchool = (id) => {
    const temp = educationList.filter(school => school.id !== id)
    setEducationList(temp)
  }
 
  return (
    <div className='module'>

      <div>
        <ContactInfo 
        handleContactInfo={handleContactInfo} 
      />
      <Education 
        handleSchoolInfo={handleSchoolInfo} 
        handleEducationList={handleEducationList}
       
      />
      <Experience
        handleWorkExp = {handleWorkExp}
        handleWorkExpList={handleWorkExpList}
        
      />

      
        <Preview 
                contactInfo={contactInfo}
                educationList={educationList}
                workExpList={workExpList}
                handleDeleteWork={handleDeleteWork}
                handleDeleteSchool={handleDeleteSchool}
                
        />
      </div>
      
    </div>
     
     
    
  )
}

export default App
