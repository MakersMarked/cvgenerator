import '../Styles/preview.css';
import { SubmitBtn } from './Utils';


const Preview = ({closeModal, contactInfo, educationList, workExpList, handleDeleteWork, handleDeleteSchool}) => {
    const fullName = contactInfo.firstName + ' ' + contactInfo.lastName;
    const degreeList = educationList.map((school) => {
      
      return(
      <div className="resume-section-content" key ={school.id}>
        <div className='school-title'>
          <span onClick={()=>handleDeleteSchool(school.id)}>X</span>
          <div>{school.schoolName + ', ' + school.gradYear} </div>
          <div>{school.degree+': '+school.fieldOfStudy}</div> 
          
        </div>
        
      </div>
      
    )})
const workList = workExpList.map((job) => {
  
  return (
    <div className="resume-section-content" key={job.id}>
      <div className='work-title'>
        <div>{job.positionTitle}</div>
        <div>{job.companyName}</div>
        <span onClick={()=>handleDeleteWork(job.id)} >X</span>
      </div>
      <p>{job.responsibilities}</p>
      
    </div>
  )
})
    return (
      <div className='preview-container'>
          <div className="preview-content">
              <div className="resume-section">
                  <h1>{fullName}</h1>
                <div className="contact-info-section">
                    <div>{contactInfo.location}</div>
                    <div>{contactInfo.email}</div>
                    <div>{contactInfo.phoneNum}</div>
                    <div>{contactInfo.website}</div>
                </div>
              </div>
              <div className="resume-section" id='summary'>
                  <h2 className="resume-section-header">Summary</h2>
                  <div className="resume-section-content">
                      {/* current Job */}
                    <p>{contactInfo.summary}</p>
                  </div>
              </div>
              <div className="resume-section">
                  <h2 className="resume-section-header">Education</h2>
                  <div>{degreeList}</div>
              </div>
              <div className="resume-section">
                  <h2 className="resume-section-header">Work Experience</h2>
                  <div>{workList}</div>
              </div>
              <div>
                <SubmitBtn onClick={()=> closeModal(false)} text="Close"/>
              </div>
          </div>
      </div>
            
    )
}

export default Preview