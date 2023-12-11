import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Professional from './components/Professional';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <About />
    <Professional />
    <Projects />
    <Footer />
    </>
  );
}

export default App;
