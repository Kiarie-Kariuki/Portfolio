import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import footer from '/home/kiarie/Development/Code/portfolio/src/Images/footer.webp';

function Footer() {
    return (
        <div id="contact" className="section" tabIndex={'-1'} style={{marginTop: '80px', height: '590px'}}>
            <div className="cc-contact-information d-flex align-items-center justify-content-center" style={{ height: '450px', backgroundImage: `url(${footer})`, backgroundSize: '100% auto', backgroundPosition: 'center' }}>
                <div className="container">
                    <div className="cc-contact">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="card mb-0 aos-init aos-animate" data-aos="zoom-in" style={{ }}>
                                    <div className="h4 text-center title fw-bold" style={{ marginBottom: '15px', marginTop: '25px' }}>Contact Me</div>
                                    <div className="container d-flex justify-content-center flex-column align-items-center" style={{ marginTop: '0px' }}>
                                        <div className="button-container py-3">
                                            <a
                                                className="btn btn-default btn-round btn-lg btn-icon"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://www.linkedin.com/in/collins-kiarie"
                                                title="Follow me on LinkedIn"
                                                data-original-title="Follow me on LinkedIn"
                                            >
                                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                            </a>
                                            <a
                                                className="btn btn-default btn-round btn-lg btn-icon"
                                                href="https://github.com/Kiarie-Kariuki"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="Check me out on Github"
                                                data-original-title="Check me out on Github"
                                            >
                                                <FontAwesomeIcon icon={faGithub} size="2x" />
                                            </a>
                                        </div>
                                        <div className="row pb-2">
                                            <div className="col text-center">
                                                <a
                                                    href="mailto:collinskiarie13@gmail.com"
                                                    title="Email to collinskiarie13@gmail.com"
                                                    className="btn btn-primary"
                                                    type="submit"
                                                >
                                                    Send Me an Email <br /> <span style={{ fontSize: '10px' }}>collinskiarie13@gmail.com</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright' style={{ textAlign: 'center', marginTop: '20px' }}>
                <h2 style={{ fontWeight: 'bold' }}>Collins K Kiarie</h2>
                <p style={{ opacity: 0.7 }}>&copy; All Rights Reserved.</p>
                <p style={{ opacity: 0.5 }}>Designed by Kiarie</p>
            </div>
        </div>
    );
}

export default Footer;
