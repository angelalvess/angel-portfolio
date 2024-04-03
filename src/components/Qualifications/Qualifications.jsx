import './Qualifications.css';

const Qualifications = () => {
  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My personal journey</span>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div
            className="qualification-button
          qualification-active button-flex"
          >
            <i
              className="uil uil-graduation-cap
            
            qualification-icon"
            ></i>
            Education
          </div>

          <div className="qualification-button button-flex">
            <i className="uil uil-briefcase-alt qualification-icon"></i>
            Courses
          </div>
        </div>

        <div className="qualification-sections">
          <div className="qualification-content qualification-content-active">
            {/* ************* 1 */}
            <div className="qualification-data title-fix-1">
              <div>
                <h3 className="qualification-title ">Ciência da Computação </h3>
                <span className="qualification-subtitle">
                  Centro Universitário FAM
                </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - 2026
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            {/* *************  2 */}

            <div className="qualification-data title-fix-3">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <h3 className="qualification-title">Lógica de programação</h3>
                <span className="qualification-subtitle">Alura</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2024
                </div>
              </div>
            </div>

            {/* ************* 3 */}
            <div className="qualification-data title-fix-2">
              <div>
                <h3 className="qualification-title">JavaScript e TypeScript</h3>
                <span className="qualification-subtitle">Udemy</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            {/* *************  4 */}

            <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <h3 className="qualification-title">Web Frontend</h3>
                <span className="qualification-subtitle">Udemy</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023
                </div>
              </div>
            </div>

            {/* *************  5 */}
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Python 3 </h3>
                <span className="qualification-subtitle">Udemy</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
            {/* *************  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
