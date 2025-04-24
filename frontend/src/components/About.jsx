export default function About() {
    return (
      <section>
        <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img src="/images/Sebastian Muramara passport photo.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Sebastian Muramara</h1>
              <p class="lead">Young, aspiring software developer currently well-versed in full stack web development. <br />
                I have a passion for learning and creating new things, and I am always looking for new opportunities to grow and improve my skills.
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                {/* <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> */}
              </div>
            </div>
          </div>
        </div>
        <hr class="featurette-divider"></hr><br /><br />
        <div class="container marketing">

          <div class="row">
            <div class="col-lg-4">
              <div style={{textAlign: 'center'}}>
                {/* <svg 
                  class="bi bi-mortarboard rounded-circle" 
                  width="140" 
                  height="140" 
                  xmlns="http://www.w3.org/2000/svg" 
                  role="img" 
                  aria-label="Higher Learning" 
                  preserveAspectRatio="xMidYMid slice"
                  viewBox="0 0 16 16">
                    <title>Higher Learning</title>
                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
                  </svg> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
                  </svg>
              </div>
              <h2 class="fw-normal" style={{textAlign: 'center'}}>Higher Learning</h2>
              <p>Graduated from Strathmore University with a second class (upper) degree in Bachelor of Business Information Technology.</p>
              {/* <p style={{textAlign: 'justify'}}><a class="btn btn-secondary" href="#">View details »</a></p> */}
            </div>
            <div class="col-lg-4">
              <div style={{textAlign: 'center'}}>
                {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Professional Courses" preserveAspectRatio="xMidYMid slice"><title>Professional Courses</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>    
              </div>
              <h2 class="fw-normal" style={{textAlign: 'center'}}>Professional Courses</h2>
              <p>Took on an online course in Full Stack Web Development, building the foundation for my web development journey.</p>
              {/* <p style={{textAlign: 'justify'}}><a class="btn btn-secondary" href="#">View details »</a></p> */}
            </div>
            <div class="col-lg-4">
              <div style={{textAlign: 'center'}}>
                {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Work Experience" preserveAspectRatio="xMidYMid slice"><title>Work Experience</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
                </svg>
              </div>
              <h2 class="fw-normal" style={{textAlign: 'center'}}>Work Experience</h2>
              <p>
              Worked as a Business Analyst Intern at KCB, which entailed being mostly involved with the design phase of the SDLC process. <br /><br />
              Worked as a Software Developer Intern at Dew CIS Solutions Ltd, being involved in API development and database design
              </p>
              {/* <p style={{textAlign: 'justify'}}><a class="btn btn-secondary" href="#">View details »</a></p> */}
            </div>
          </div>
        </div>
      </section>
    )
  }
  