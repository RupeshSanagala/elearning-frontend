
import React from 'react';
import './AboutComp.css';



import constantData from '../Shared/Constant/MyImagesComp';


const AboutComp = () => {
  return (
    <div >


        
     <div className='heading'> 
        <h2>About us</h2>
     </div>
<div className='container'>

</div>

<div className='container'>
    <p className='p1'>In addition to IT education, Our  offers IT training, consulting, corporate training, application development, and digital marketing services. Our young team of technology experts is committed to providing the best solutions to our customers. We specialize in equipping workforces with the skills and knowledge needed to excel in today’s dynamic business landscape. By delivering comprehensive, tailored training solutions across various industries, we empower individuals and organizations to reach their full potential. Our commitment to excellence and passion for learning drive us to continuously upgrade our performance and deliver top-notch training programs that achieve significant results.    
    </p>
</div>

<div className='container-mvp'>
    <h3>Our Mission, Vision and Values</h3>
    </div>

    <div className='container-c'>
          <div className='card'>
           <img src={constantData.mission}></img>
           <div className='card-title'>
         <h3>Mission</h3>
    </div>
          <div className='card-body'>
               To provide the best quality IT training to our clients with the understanding of industry requirements , the latest technology, and customer satisfaction
            </div>
</div>



<div className='card'>
    <img src={constantData.purpose}></img>
    <div className='card-title'>
<h3>Purpose</h3>
    </div>
    <div className='card-body'>
    To transform and empower the clients using our effective and excellent training techniques , and to become a leader in the training industry
    </div>
</div>





<div className='card'>
    <img src={constantData.values}></img>
    <div className='card-title'>
<h3>Values</h3>
    </div>
    <div className='card-body'>
    Integrity,Efficiency, Responsibility, and Continuous Growth
    </div>
</div>



    </div>




    
</div>
    
  )
}

export default AboutComp