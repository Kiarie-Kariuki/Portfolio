import 'bootstrap/dist/css/bootstrap.min.css';

const Professional = () => {
  return (
    
    <div class="container" id='skill'>
        <div class="h4 text-center mb-4 title fw-bold">Professional Skills</div>
        <div class="card aos-init aos-animate" data-aos="fade-up" data-aos-anchor-placement="top-bottom " style={{border: '1px solid #ccc', borderRadius: '0', boxShadow: '0 4px 8px rgb(0, 0, 0, 0.1)'}}>
            <div class="card-body">
                <div class="row my-0 my-lg-4">
                    <div class="col-md-6 mb-2 ">
                    <div class="progress-container progress-primary">
                        <span class="progress-badge text-uppercase">Javascript </span>
                        <div class="progress mt-1 d-none d-lg-block" style={{height: '5px'}}>
                            <div class="progress-bar progress-bar-primary aos-init aos-animate" 
                            data-aos="progress-full" 
                            data-aos-offset="10" 
                            data-aos-duration="2000" 
                            role="progressbar" 
                            aria-valuenow="60" 
                            aria-valuemin="0" 
                            aria-valuemax="100" 
                            style={{ width: '100%', backgroundColor: 'grey' , minHeight: '10px'}}></div>
                        </div>
                        <p class="skill-desc mt-2 text-secondary">React JS </p>
                    </div>
                    </div>

                    <div class="col-md-6 mb-2 ">
                    <div class="progress-container progress-primary">
                        <span class="progress-badge text-uppercase">Backend Development</span>
                        <div class="progress mt-1 d-none d-lg-block" style={{height: '5px'}}>
                            <div class="progress-bar progress-bar-primary aos-init aos-animate" 
                            data-aos="progress-full" 
                            data-aos-offset="10" 
                            data-aos-duration="2000" 
                            role="progressbar" 
                            aria-valuenow="60" 
                            aria-valuemin="0" 
                            aria-valuemax="100" 
                            style={{ width: '100%', backgroundColor: 'grey' , minHeight: '10px' }}></div>

                        </div>
                        <p class="skill-desc mt-2 text-secondary">NodeJS / Python</p>
                    </div>
                    </div>
                </div>
                <div class="row my-0 my-lg-4">
                    <div class="col-md-6 mb-2 ">
                    <div class="progress-container progress-primary">
                        <span class="progress-badge text-uppercase">Python</span>
                        <div class="progress mt-1 d-none d-lg-block" style={{height: '5px'}}>
                            <div class="progress-bar progress-bar-primary aos-init aos-animate" 
                            data-aos="progress-full" 
                            data-aos-offset="10" 
                            data-aos-duration="2000" 
                            role="progressbar" 
                            aria-valuenow="60" 
                            aria-valuemin="0" 
                            aria-valuemax="100" 
                            style={{ width: '100%', backgroundColor: 'grey' , minHeight: '10px' }}></div>

                        </div>
                        <p class="skill-desc mt-2 text-secondary">Flask / FASTAPI </p>
                    </div>
                    </div>

                    <div class="col-md-6 mb-2 ">
                    <div class="progress-container progress-primary">
                        <span class="progress-badge text-uppercase">Databases</span>
                        <div class="progress mt-1 d-none d-lg-block" style={{height: '5px'}}>
                            <div class="progress-bar progress-bar-primary aos-init aos-animate" 
                            data-aos="progress-full" 
                            data-aos-offset="10" 
                            data-aos-duration="2000" 
                            role="progressbar" 
                            aria-valuenow="60" 
                            aria-valuemin="0" 
                            aria-valuemax="100" 
                            style={{ width: '100%', backgroundColor: 'grey' , minHeight: '10px' }}></div>

                        </div>
                        <p class="skill-desc mt-2 text-secondary">Postgres / MySQL / MongoDB
                        </p>
                    </div>
                    </div>
                </div>
                <div class="row my-0 my-lg-4">
                    <div class="col-md-6 mb-2 ">
                    <div class="progress-container progress-primary">
                        <span class="progress-badge text-uppercase">Chat /Email Integrations</span>
                        <div class="progress mt-1 d-none d-lg-block" style={{height: '5px'}}>
                            <div class="progress-bar progress-bar-primary aos-init aos-animate" 
                            data-aos="progress-full" 
                            data-aos-offset="10" 
                            data-aos-duration="2000" 
                            role="progressbar" 
                            aria-valuenow="60" 
                            aria-valuemin="0" 
                            aria-valuemax="100" 
                            style={{ width: '100%', backgroundColor: 'grey' , minHeight: '10px' }}></div>

                        </div>
                        <p class="skill-desc mt-2 text-secondary">Twilio API
                        </p>
                    </div>
                    </div>

                    <div class="col-md-6 mb-2 ">
                    <div class="progress-container progress-primary">
                        <span class="progress-badge text-uppercase">Collaboration Tools</span>
                        <div class="progress mt-1 d-none d-lg-block" style={{height: '5px'}}>
                            <div class="progress-bar progress-bar-primary aos-init aos-animate" 
                            data-aos="progress-full" 
                            data-aos-offset="10" 
                            data-aos-duration="2000" 
                            role="progressbar" 
                            aria-valuenow="60" 
                            aria-valuemin="0" 
                            aria-valuemax="100" 
                            style={{ width: '100%', backgroundColor: 'grey' , minHeight: '10px' }}></div>

                        </div>
                        <p class="skill-desc mt-2 text-secondary">Git / Postman / Slack / MatterMost </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 

  );
};

export default Professional;
