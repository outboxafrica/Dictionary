import React from "react"
// import Header from "./profile"
  //  import Links from "./homepage"
import "./style.css"
import marion from "../image/marion.jpeg"
// import { Header } from './../../../.cache/fast-refresh-overlay/components/overlay';


class Main extends React.Component {
  render() {
    return (
      <div
      style={{
        display:"flex",
        width: '100%',
        justifyContent:'space-around'
      }}
      >
        <div className='contain'
        style={{
          background: 'grey',
          width:'40rem',
          minheight: '100%',
         
        }}>
        Take control learn how to code; change career today
        </div>
        <img className='image' src={marion}  alt ='mari'width="80%" height="100%" />
          
      </div> 
    )
  }
}
export default Main
