const Preview = ({contactInfo, schoolInfo, workExp,}) => {
    const fullName = contactInfo.firstName + ' ' + contactInfo.lastName;
    return (
        <>
        <nav>
          <h1>{fullName}</h1>
          <div className="connect">
            <div>{contactInfo.phoneNum}</div>
            <div>{contactInfo.email}</div>
            <div>{contactInfo.location}</div>
          </div>

        </nav>
        

        
        </>
    )
}

export default Preview