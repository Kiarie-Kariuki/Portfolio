function About(){
    return(
        <div className="AboutContainer" id="about">
            <div className="head">
                <h3>About</h3>
                <p>Hello, I am Collins Kiarie, popularly known as Kiarie. I like playing with code to make awesome stuff.</p>
                <p>I am a passionate software developer with 1 year of hands-on experience in crafting diverse projects, ranging from web applications and mobile apps to desktop solutions. Proficient in an array of programming languages, I specialize in JavaScript, Python, Java, and utilize frameworks such as React, Django, Flask, and FASTAPI. My tech toolkit also includes expertise in HTML, CSS, and SQL.</p>
                <p>Motivated by results, I am a highly dedicated individual with a collaborative spirit. As a team player, I find joy in helping others and believe in the collective success of any project. My confidence stems from the belief that I can make a significant contribution to any team or project.</p>
                <p>Whether you're looking to enhance your online presence, streamline operations, or create world-class, efficient, and scalable software, I am here to make it happen. Let's connect and explore the possibilities of working together.</p>
            </div>
            <div className="bio">
                <h3>Basic Information</h3>
                <div className="bioInfo"> 
                    <div className="email">
                        <div>
                            <strong>EMAIL:</strong>
                        </div>
                        <div>
                            collinskiarie13@gmail.com
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