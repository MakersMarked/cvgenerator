import Preview from "./Preview"

const Modal = ({contactInfo,educationList,workExpList,handleDeleteSchool,handleDeleteWork}) => {

    return (
        <div className="modal-bg">
            <div className="Modal-content">
                {<Preview
                contactInfo={contactInfo}
                educationList={educationList}
                workExpList={workExpList}
                handleDeleteWork={handleDeleteWork}
                handleDeleteSchool={handleDeleteSchool}
                
                />}
            </div>
        </div>
    )
}

export default Modal