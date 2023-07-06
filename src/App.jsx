import { useState } from "react";
import img from './assets/lenever.jpeg';
<assets />
import data from "./data";

const App = () => {
 const[people, setPeople]=useState(data);

const removePerson=(id)=>{

  const newPerson= people.filter((person)=> person.id !== id)

  setPeople(newPerson);
}

 const handleClick=()=>{

  setPeople([]);
 }

  return(
     <main> 
      <section className="container">
    <h2>{people.length} BIRTHDAY REMINDER</h2>
    <br/>
      
 
      {people.map((person)=>{
        const{id,age,name,image}=person

        return(
         <div className="minholder">
           <div className="person" key={id}>
            <div>
            <img src={image} alt={name}/>
            </div>
            <div>
            <h4>{name}</h4>
            <h5> {age}</h5>
            <button type="button" className="btn" onClick={()=>removePerson(id)}>REMOVE</button>
          </div>
            </div>
            
         </div>
        
          
        )

      })}
    <button type="button" className="btn btn-block" onClick={handleClick}>CLEAR ALL</button>
    </section> 
     </main>
    
  )
}
export default App;
