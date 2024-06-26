import React from 'react'
import { FaShare, FaEye, FaHeart, FaLinkedin } from 'react-icons/fa';
const doctors = () => {
  return (
    <div className="maindoctors">
      <div className="doctorsheading">
        <h2>Our doctor</h2>
      </div>

      <div className="maininnerdoctor">
        

        <div className="docposter">
          <div className="docicons">
            
            <FaEye />
            
          </div>
          
          <img id="doctor" src="/DekhneDocator.jpg" alt="" width={400} height={300} />

          <div className="docdetails">
            <h2>Dr.Anish .A. Dekhne</h2>
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default doctors
