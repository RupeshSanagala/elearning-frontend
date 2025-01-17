import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import constantData from '../Shared/Constant/MyImagesComp';
const WebDevelopment = () => {
    const courses = [
            { image: constantData.Angular, description: 'Dive into this to learn Angular in a detailed manner' },
            { image: constantData.react, description: 'Dive into this to learn React in a detailed manner' },
            { image: constantData.Testing, description: 'Dive into this to learn Testing in a detailed manner' },
            { image: constantData.java, description: 'Dive into this to learn Java in a detailed manner' },
            { image: constantData.python, description: 'Dive into this to learn Python in a detailed manner' },
            { image: constantData.datavisualization, description: 'Dive into this to learn Data Visualization in a detailed manner' },
          ];
        
          return (
            <div className="container mt-5">
              <h2 className="text-center mb-4">Web Development Courses</h2>
              <div className="row">
                {courses.map((course, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img 
                        src={course.image} 
                        alt={`Course ${index + 1}`} 
                        className="card-img-top" 
                        style={{ height: '300px', objectFit: 'cover' }}
                      />
                      <div className="card-body d-flex flex-column">
                        <p className="card-text mb-4">{course.description}</p>
                        <button className="btn btn-danger mt-auto">Enroll Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
};

export default WebDevelopment;


