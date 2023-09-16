import React from "react";
import "./Home.css"
import { FaCartArrowDown,FaUserAlt,FaSafari,FaFlask,FaFileAlt,FaRegHospital} from "react-icons/fa";
import { Link } from "react-router-dom";

function Home(){
  return<div className="d-flex home">
      <div className="d-flex sidebar flex-shrink-0 text-white bg-dark">
                    <ul className="nav nav-pills flex-column mb-auto px-x">
                    <br/>
                   <br/>
                    &nbsp;&nbsp;&nbsp;<label style={{textAlign:'center',background:'white',fontSize:'18px',width:'190px'}}><FaRegHospital/>XPERT CURE</label>
                    <br/>
                    <br/>
                    <li className="nav-item">    
                      <Link to="/dashboard" className="my"><FaFileAlt/> Dashboard</Link>              
                    </li>                  
                    <li className="nav-item">
                    <Link to="/wish" className="my"><FaFileAlt/> New Admission</Link>
                     {/* <a href="" className="nav-link">
                      <FaFileAlt/>  New Admission</a>                   */}
                    </li> 
                    <li className="nav-item">
                    <Link to="/display" className="my"><FaFileAlt/> Individual</Link>
                     {/* <a href="" className="nav-link">
                      <FaFileAlt/>  Individual</a>                   */}
                    </li> 
                    <li className="nav-item">
                     <a href="" className="nav-link">
                      <FaFileAlt/>  Aplication status</a>                  
                    </li> 
                    <li className="nav-item">
                     <a href="" className="nav-link">
                      <FaFileAlt/>  Coporate</a>                  
                    </li> 
                    <br/>
                    <li className="nav-item">
                     <a href="" className="nav-link">
                      <FaFileAlt/>  Roles</a>                  
                    </li> 
                    </ul>
       {/* <div className="content container">
          content          
       </div> */}

      </div>
  </div>
}
export default Home;