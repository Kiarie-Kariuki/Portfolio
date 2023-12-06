function About(){
    return(
        <div className="AboutContainer">
            <div className="head">
                <h3>About</h3>
                <p>I am  a software developer with 1 years of experience. I have worked on a variety of projects, including web <span className="sentence-space"> </span> applications, mobile applications, and desktop applications. I am proficient in a variety of programming languages,<span className="sentence-space"> </span> including JavaScript, Python, Java, and some of the frameworks sucj as React, Django, Flask and FASTAPI. I am also<span className="sentence-space"> </span> experienced in working with a variety of technologies, including HTML, CSS, and SQL. 
                I am a highly motivated and<span className="sentence-space"> </span> results-oriented individual. I'm also a team player and I'm always willing to help others. I am confident that I can<span className="sentence-space"> </span> make a significant contribution to any team or project.<br /> <span className="sentence-space"> </span>Reach out to me and let us work together or let me build you world class efficient and scalable software to meet your needs.</p>
            </div>
            <div className="bio">
                <h3>Basic Information</h3>
                <div className="bioInfo"> 
                    <div className="email">
                        <div>
                            <strong>EMAIL:</strong>
                        </div>
                        <div>
                            collinskairie13@gmail.com
                        </div>
                    </div>
                    <div className="address">
                        <div>
                            <strong>ADDRESS:</strong>
                        </div>
                        <div>
                            Naivasha, Kenya
                        </div>
                    </div>
                    <div className="nationality">
                        <div>
                            <strong>NATIONALITY:</strong>
                        </div>
                        <div className="nation">
                            Kenyan
                        </div>
                    </div>
                    <div className="languages">
                        <div>
                            <strong>LANGUAGES:</strong>
                        </div>
                        <div className="lang">
                            English, Swahili, French (Intermediate)
                        </div>
                    </div>
                    <div className="competencies">
                        <div>
                            <strong>COMPETENCIES:</strong>
                        </div>
                        <div className="comp">
                            Web Development, Mobile App Development, Systems Design, CI/CD Pipelines, Database Design, API Development, Automated Testing and Debugging
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;