import Resume from './Resume'

const skills = ['React', 'Node.js', 'Express', 'PostgreSQL', 'CSS', 'JavaScript']

export default function Skills() {
  return (
    <section>
      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Developer Skills</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
              <img style={{width: '1.75em', height: '1.75em', borderRadius: '20%', marginRight: '10px'}} src="/images/nodejs-logo.png" alt="nodejs" />
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Node.JS</h3>
              <p>Creating backend APIs that can communicate between the website and other interfaces. Used with the Express framework.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img style={{width: '1.75em', height: '1.75em', borderRadius: '20%', marginRight: '10px'}} src="/images/html-logo.png" alt="nodejs" />
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">HTML</h3>
              <p>Implementing frontend components of the websites. Used with React or Embedded JavaScript.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img style={{width: '1.75em', height: '1.75em', borderRadius: '20%', marginRight: '10px'}} src="/images/css-logo.png" alt="nodejs" />
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">CSS</h3>
              <p>Styling the frontend components.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img style={{width: '1.75em', height: '1.75em', borderRadius: '20%', marginRight: '10px'}} src="/images/react-logo.png" alt="nodejs" />
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">React</h3>
              <p>Used to implement well-structured, responsive and scalable frontend components.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img style={{width: '1.75em', height: '1.75em', borderRadius: '20%', marginRight: '10px'}} src="/images/postgresql-logo.png" alt="nodejs" />
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Postgres</h3>
              <p>Database management system used to store data used by the website. Connected through the backend APIs.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img style={{width: '1.75em', height: '1.75em', borderRadius: '20%', marginRight: '10px'}} src="/images/java-logo.png" alt="nodejs" />
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Java</h3>
              <p>Used for creating backend APIs for websites and other systems.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img style={{width: '1.75em', height: '1.75em', borderRadius: '20%', marginRight: '10px'}} src="/images/jsp-logo.jpg" alt="nodejs" />
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">JSP</h3>
              <p>Used to create frontend components for websites.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img style={{width: '1.75em', height: '1.75em', borderRadius: '20%', marginRight: '10px'}} src="/images/git-logo.png" alt="nodejs" />
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Version Control</h3>
              <p>Use Git to remotely manage project repositories, as well as collaborate on various projects.</p>
            </div>
          </div>
        </div>
      </div>
      <Resume />
    </section>
  )
}
