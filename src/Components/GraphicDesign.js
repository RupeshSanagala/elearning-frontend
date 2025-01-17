import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import constantData from "../Shared/Constant/MyImagesComp";

const GraphicDesign = () => {
  const courses = [
    { image: constantData.photoshop, description: "Learn Photoshop for Graphic Design." },
    { image: constantData.illustrator, description: "Master Adobe Illustrator." },
    { image: constantData.UIUX, description: "Design stunning User Interfaces." },
    { image: constantData.logoDesign, description: "Create Professional Logos." },
    { image: constantData.motionGraphics, description: "Learn Motion Graphics Design." },
    { image: constantData.webGraphics, description: "Build Graphics for Web Design." },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Graphic Design Courses</h2>
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
                <button className="btn btn-warning mt-auto">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphicDesign;
