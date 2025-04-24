import React from "react";

export default function Popup(props) {
    return(
        <div class="project-popup">
            <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
              <div class="carousel-indicators">
                {props.onImgNames.map((imgName, index) => (
                  <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to={index}
                    class={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
                {/* <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" class=""></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5" class=""></button> */}
              </div>
              <div class="carousel-inner">
                {props.onImgNames.map((imgName, index) => {
                    return(
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={"images/"+props.onFolder+"/"+imgName+""} className="d-block w-100" alt={`Slide ${index + 1}`} />
                            {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
                            <div class="container">
                                <div class="carousel-caption text-start">
                                {/* <h1>Example headline.</h1> */}
                                {/* <p class="opacity-75" style={{textAlign: 'center', color: 'black'}}>Some representative placeholder content for the first slide of the carousel.</p> */}
                                {/* <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p> */}
                                </div>
                            </div>
                        </div>
                    );
                })}
                
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
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