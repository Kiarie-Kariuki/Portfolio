import swiftReview from '/home/kiarie/Development/Code/portfolio/src/Images/swiftReview.png';
import adventura from '/home/kiarie/Development/Code/portfolio/src/Images/adventura.png'
import Adventura from '/home/kiarie/Development/Code/portfolio/src/Images/Adventura.png'
import recipe from '/home/kiarie/Development/Code/portfolio/src/Images/recipe.png'
import Recipe from '/home/kiarie/Development/Code/portfolio/src/Images/Recipe.png'
import inventory from '/home/kiarie/Development/Code/portfolio/src/Images/inventory.png'



function Projects() {
    const projects = [
      {
        title: 'Swift-Review',
        description: 'This project combines a Flask API for managing business reviews with a React frontend for a seamless user experience.',
        imageUrl: swiftReview,
        deployedLink: 'https://swift-review.onrender.com/',
        githubRepo: 'https://github.com/Kiarie-Kariuki/Swift-Review',
      },
      {
        title: 'Adventura',
        description: 'Adventura is a travel app that allows users to book travelling packages to different areas and has expedition packages. It also has a hotel booking option that allows users to book different types of accommodation during their expeditions. ',
        imageUrl: Adventura,
        deployedLink: 'https://kiarie-kariuki.github.io/Adventura/',
        githubRepo: 'https://github.com/Kiarie-Kariuki/Adventura',
      },
      {
        title: 'Adventura (CLI App)',
        description: 'The travel itinerary planner is a CLI application designed to address the challenges travellers face when planning and organizing their trips. This application will provide users with a convenient way to plan their trips, schedule activities, track expenses and generate travel summaries. ',
        imageUrl: adventura,
        deployedLink: '', 
        githubRepo: 'https://github.com/Kiarie-Kariuki/travel-itinerary-back-end',
      },
      {
        title: 'Recipe Room',
        description: ' Recipe Room is a dynamic and user-friendly React web application that empowers users to explore a diverse collection of recipes while also providing them with the creative space to contribute their own culinary masterpieces.',
        imageUrl: Recipe,
        deployedLink: 'https://frontend-final-phase.vercel.app/',
        githubRepo: 'https://github.com/Kiarie-Kariuki/frontend-final-phase',
      },
      {
        title: 'Inventory Control System',
        description: ' The Inventory Control System  is a user friendly web application built with React, designed to provide users with an easy-to-use interface for managing inventory. It offers a seamless and intuitive experience for small businesses and organizations to efficiently handle their operational data.',
        imageUrl: inventory,
        deployedLink: '',
        githubRepo: 'https://github.com/Kiarie-Kariuki/inventory-control-system',
      },
      {
        title: 'Recipe Room (Backend)',
        description: ' The Recipe Room backend built with FastAPI serves as the robust foundation for the Recipe Room web application. Leveraging the power and speed of FastAPI, this backend handles various functionalities, including user authentication, recipe management, and interaction with the database.',
        imageUrl: recipe,
        deployedLink: 'https://recipe-room-api.onrender.com/docs',
        githubRepo: 'https://github.com/Kiarie-Kariuki/recipe-room-backend',
      },
    ];
  
    return (
        <div className="container " style={{ marginTop: '80px' }}>
        <h3 className="text-center mb-4 fw-bold" style={{fontFamily: 'Montserrat, Helvetica Neue', fontSize: '1.714em'}}> Practice Projects</h3>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card" style={{ border: '1px solid #ccc', borderRadius: '0px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', fontFamily: 'Montserrat, Helvetica Neue', fontSize: '14px' }}>
                <img
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body" style={{ height: '240px' }}>
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="d-flex justify-content-center">
                    {project.deployedLink && (
                      <a href={project.deployedLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        View
                      </a>
                    )}
                    {!project.deployedLink && (
                      <a href={project.githubRepo} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        GitHub Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;
  