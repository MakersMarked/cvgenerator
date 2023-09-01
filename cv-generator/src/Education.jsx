import { useState } from "react";



const Education = () => {
const degreeTypes = ['Associates', 'Bachelors', 'Masters', 'Doctorate'];
const degreeList = degreeTypes.map((item, index)=> <option key={index} value={item}>{item}</option>);

 return (
    <>
        <fieldset>
            <legend>Education</legend>
            <section>
                <label htmlFor="school">School</label>
                <input 
                type="text" 
                id="school" 
                placeholder="College or University" 
                />
               <label htmlFor="degree">Degree</label> 
               <select id="degree" placeholder="">
                    {degreeList}
               </select>
               <label htmlFor="fos">Field of Study</label>
               <input 
               type="text" 
               id="fos"
               placeholder="Computer Science" 
               />
                
            </section>
        </fieldset>
    </>
 ) 
}

export default Education