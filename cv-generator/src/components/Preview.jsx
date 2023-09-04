import '../Styles/preview.css';

const Preview = ({contactInfo, educationList, workExpList}) => {
    const fullName = contactInfo.firstName + ' ' + contactInfo.lastName;
    
    const degreeList = educationList.map((school, index) => {
      return(
      <div className="resume-section-content" key ={index}>
        <div>{school.schoolName}</div>
        <div>{school.degree+': '+school.fieldOfStudy}</div>
        <div>{}</div>
        
      </div>
    )})
const workList = workExpList.map((job, index) => {
  return (
    <div className="resume-section-content" key={index}>
      <div className='work-title'>
        <div>{job.positionTitle}</div>
        <div>{job.companyName}</div>
      </div>
      {/* <p>{job.dates.startDate + '-' + job.dates.endDate}</p> */}
      <p>{job.responsibilities}</p>
    </div>
  )
})
    return (
        <div className='preview'>
          
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
        
        </div>
    )
}

export default Preview