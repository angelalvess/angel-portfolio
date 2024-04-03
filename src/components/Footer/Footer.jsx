import './Footer.css';

const Footer = () => {
  return (
    <section className="footer ">
      <div className="footer-container container">
        <h1 className="footer-title">Angel</h1>
        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/angell1000000/"
            className="footer-social-link"
            target={'_blank'}
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/angelalvess/"
            className="footer-social-link"
            target={'_blank'}
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/angelalvess"
            className="footer-social-link"
            target={'_blank'}
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer-copy">
          &copy; 2024 Angel Alves. All rights reserved.
        </span>
      </div>
    </section>
  );
};

export default Footer;
