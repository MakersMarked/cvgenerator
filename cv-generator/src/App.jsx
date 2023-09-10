import { useState } from 'react';
import  uniqid  from 'uniqid'
import Preview from './components/Preview';
import { SubmitBtn } from './components/Utils';
import Form from './components/Form';


function App() {
  const [openModal, setOpenModal] = useState(false)

// Contact Info components's State and Fn's
  const [contactInfo, setContactInfo] = useState({
       firstName:'',
       lastName:'',
       currentJob:'',
       summary:'',
       email:'',
       phoneNum:'',
       location:'',
       website:'', 
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
    <>
    {!openModal && 
    <div className='module'>
        <div className='main-content'>
          <Form 
          handleContactInfo={handleContactInfo}
          handleSchoolInfo={handleSchoolInfo}
          handleEducationList={handleEducationList}
          handleWorkExp={handleWorkExp}
          handleWorkExpList={handleWorkExpList}
          />
          <SubmitBtn onClick={()=> setOpenModal(true)} text="Submit" />
          
        </div>
        
      </div>}
      
      {openModal && <Preview 
                  closeModal={setOpenModal}
                  contactInfo={contactInfo}
                  educationList={educationList}
                  workExpList={workExpList}
                  handleDeleteWork={handleDeleteWork}
                  handleDeleteSchool={handleDeleteSchool}/>}
    </>
    
    
  )
}

export default App
