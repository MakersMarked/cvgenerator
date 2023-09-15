import ContactInfo from "./ContactInfo";
import Education from "./Education";
import Experience from "./Experience";

 const Form = ({handleContactInfo,handleSchoolInfo, handleEducationList,handleWorkExp,handleWorkExpList}) => {
    return (

    <div className='form-content'>
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
    </div>
    )
}

export default Form