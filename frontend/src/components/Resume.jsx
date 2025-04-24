export default function Resume() {
    return (
      <section>
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Resume</h1>
            <p class="col-md-8 fs-4">Click the button below to download my resume.</p>
            {/* <button class="btn btn-primary btn-lg" type="button">Example button</button> */}
            <a href="/docs/Sebastian Muramara CV PDF.pdf" download><button class="btn btn-primary btn-lg" type="button">Download My Resume</button></a>
          </div>
        </div>
      </section>
    )
  }
  