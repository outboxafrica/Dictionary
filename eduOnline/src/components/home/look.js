import React from "react"
import { Link } from "react-router-dom"
// import Rafik from "../image/Rafik.jpg"
// import { render } from '@testing-library/react';

const LookBookpage = () => {
  return (
  
      <Link className="link" to="/">
        LookBook
      </Link>
     
    
  )
}
// class look extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//    firstName:'Kubula' ,
//    lastName:'Marion'
// }
//   }
// render() {
//   return(
//     <div className='info'>
//     <LookBookpage/>
//     <p>{this.state.firstName}  {""}
//     {this.state.lastName}</p>
//     </div>
//   );
//   }
//   }
export default LookBookpage;
