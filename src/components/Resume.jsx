export default function Resume() {
    return (
      <section>
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Resume</h1>
            <p className="col-md-8 fs-4">Click the button below to download my resume.</p>
            <a href="/docs/sebastian-muramara-cv.pdf" download><button className="btn btn-primary btn-lg" type="button">Download My Resume</button></a>
          </div>
        </div>
      </section>
    )
  }
  