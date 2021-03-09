// import { getDefaultNormalizer } from "@testing-library/dom";
// import { render } from "@testing-library/react";
import React from "react"
import { Link } from "react-router-dom"
// import Rafik from "../image/Rafik.jpg"
// import { Profilepage } from 'profile.';


export const Profilepage = () => {
  return (
    
      <Link  className='link'to='/'>Profile</Link>
      
    
    
  )
}




// class person extends React.Component{
//     constructor(props){
//     super(props);
//     this.state={
//         firstName:'Kubula',
//         lastName:'Marion',
//         educationLevel:'University',
//         emailAdress: 'kmarion548@gmail.com',
//        nationality :'Ugandan',
//        hobbies:'Dancing',
//        city:"Kampala"
       
//     };
// }
//     render() {
//         return(
//             <div className='info'>
//            
//             <p>{"Name: "}{this.state.firstName} {" "}
//             {this.state.lastName}</p>
//             <p>{"EducationLevel:"} {this.state.educationLevel}</p>
//            <p>{"Email:"} {this.state.emailAdress}</p>
//             <p>{"Natioality:"} {this.state.nationality}</p>
//             <p>{"Hobbie:"} {this.state.hobbies}</p>
//             <p>{"city:"} {this.state.city}</p>


//             </div>
//         );
//      }


export default Profilepage ;

