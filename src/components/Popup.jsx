import React from "react";

export default function Popup(props) {
    return(
        <div className="project-popup">
            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {props.onImgNames.map((imgName, index) => (
                  <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {props.onImgNames.map((imgName, index) => {
                    return(
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={"images/"+props.onFolder+"/"+imgName+""} className="d-block w-100" alt={`Slide ${index + 1}`} />
                            <div className="container">
                                <div className="carousel-caption text-start">
                                </div>
                            </div>
                        </div>
                    );
                })}
                
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <button onClick={(event) => {
                event.preventDefault();
                props.onClose(false);
                props.onClear();
            }}>Close</button>
          </div>
    )
}