import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import constantData from "../Shared/Constant/MyImagesComp";

const MachineLearning = () => {
  const courses = [
    { image: constantData.mlIntro, description: "Introduction to Machine Learning." },
    { image: constantData.neuralNetworks, description: "Learn Neural Networks from scratch." },
    { image: constantData.svm, description: "Understand Support Vector Machines." },
    { image: constantData.regression, description: "Master Regression Techniques." },
    { image: constantData.kmeans, description: "Dive into Clustering with K-Means." },
    { image: constantData.deployment, description: "Deploy Machine Learning Models." },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Machine Learning Courses</h2>
      <div className="row">
        {courses.map((course, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={course.image}
                alt={`Course ${index + 1}`}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <p className="card-text mb-4">{course.description}</p>
                <button className="btn btn-success mt-auto">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MachineLearning;
