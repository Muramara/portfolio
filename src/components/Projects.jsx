import React, { useState } from 'react'
import Popup from './Popup'
import ContactPopup from './ContactPopup';
  
  export default function Projects() {
    
    const [showPopup, setShowPopup] = useState(false);

    const [showContactPopup, setShowContactPopup] = useState(false);

    const [imgNames, setImgNames] = useState([]);

    const [imgFolder, setImgFolder] = useState("");

    function handleClosePopup(){
      setImgNames([]);
      setImgFolder("");
    }

    return (
      <section>
        {showPopup && (<Popup onClose={setShowPopup} onFolder={imgFolder} onImgNames={imgNames} onClear={handleClosePopup} />)}
        {showContactPopup && (<ContactPopup onClose={setShowContactPopup} />)}
        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Works by Me</h1>
                <p className="lead text-body-secondary">Below are some projects done by me.</p>
                <p>
                  <a href="https://github.com/Muramara" className="btn btn-primary my-2" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg> GitHub
                  </a>
                  <button
                    className='btn btn-secondary my-2'
                    onClick={(event) => {
                      event.preventDefault();
                      setShowContactPopup(true);
                    }}
                    >Contact Me</button>
                </p>
              </div>
            </div>
          </section>
          <div className="album py-5 bg-body-tertiary">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card shadow-sm">
                    <img src="images/AirWeather/main-page.png" alt="Air/Weather App" />
                    <div className="card-body text-container">
                      <p className="card-text">
                      A Node.js application that provides real-time, location-based air quality and weather information using the IQAir API.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            onClick={(event) => {
                              event.preventDefault();
                              setImgFolder("AirWeather");
                              setImgNames([
                                "main-page.png",
                                "countries-list.png",
                                "states-list.png",
                                "cities-list.png",
                                "weather-data.png"
                              ])
                              setShowPopup(true);
                            }}
                            >View</button>
                          <a href="https://github.com/Muramara/Air-Weather-info-usin-IQAir-API" target='_blank'>
                              <button type="button" class="btn btn-sm btn-outline-secondary">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                              </svg> GitHub
                              </button>
                            </a>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img src="images/BlogPosts/posted-blog.png" alt="Blog Posts App" />
                    <div className="card-body text-container">
                      <p className="card-text">
                      On a front-end perspective, the website allows the user to make a post, edit it and also delete, as well as view all the posts that have been made.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            onClick={(event) => {
                              event.preventDefault();
                              setImgFolder("BlogPosts");
                              setImgNames([
                                "empty-page.png",
                                "form-page.png",
                                "posted-blog.png"
                              ])
                              setShowPopup(true);
                            }}
                            >View</button>
                          <a href="https://github.com/Muramara/Blog-Post-Site-with-RESTful-API" target='_blank'>
                              <button type="button" className="btn btn-sm btn-outline-secondary">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                              </svg> GitHub
                              </button>
                            </a>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img src="images/BookNotes/page-with-review.png" alt="Blog Posts App" />
                    <div className="card-body text-container">
                      <p className="card-text">
                      A simple application for tracking your book reading history, notes, and ratings.
                      It uses the openlibrary API to fetch book covers. This is accomplished by providing the ISBN-10 value of the book being reviewed.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            onClick={(event) => {
                              event.preventDefault();
                              setImgFolder("BookNotes");
                              setImgNames([
                                "empty-page.png",
                                "add-user-form.png",
                                "page-with-users.png",
                                "add-review-form.png",
                                "page-with-review.png"
                              ])
                              setShowPopup(true);
                            }}
                            >View</button>
                            <a href="https://github.com/Muramara/Book-Notes" target='_blank'>
                              <button type="button" className="btn btn-sm btn-outline-secondary">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                              </svg> GitHub
                              </button>
                            </a>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    )
  }
  