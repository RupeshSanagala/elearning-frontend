import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import constantData from "../Shared/Constant/MyImagesComp";

const DataScience = () => {
  const courses = [
    { image: constantData.python, description: "Master Python for Data Science." },
    { image: constantData.ml, description: "Understand Machine Learning principles." },
    { image: constantData.dataCleaning, description: "Learn Data Cleaning techniques." },
    { image: constantData.datavisualization, description: "Explore Data Visualization tools." },
    { image: constantData.statistics, description: "Dive into Statistics for Data Science." },
    { image: constantData.deepLearning, description: "Understand Deep Learning basics." },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Data Science Courses</h2>
      <div className="row">
        {courses.map((course, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={course.image}
                alt={`Course ${index + 1}`}
                className="card-img-top"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <p className="card-text mb-4">{course.description}</p>
                <button className="btn btn-primary mt-auto">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataScience;

