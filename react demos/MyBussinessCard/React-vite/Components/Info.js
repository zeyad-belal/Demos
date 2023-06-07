import React from "react"

export default function Info (){
    return (
        <div className="info">
          <img src="../images/IMG_20220907_095000_Bokeh__01.jpg" border="0" />
          <h2>Zeyad Belal</h2>
          <h4>Frontend Developer</h4>
          <a href="#">zeyadbelal.website</a>
          <div className="buttons">
            <button className="email"><i class="fa-regular fa-envelope"></i> Email </button>
            <button className="linkedin"><i class="fa-brands fa-linkedin-in"></i> Linkedin </button>
          </div>
        </div>  
    )
}
