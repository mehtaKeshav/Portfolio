import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
 return(
  <div>
    <Navbar/> 
    <Home/>
    <About/>
    <Portfolio/>
    <Skills/>
    <SocialLinks/>
    <Contact/>
    <Footer/>

  </div>
 )
}

export default App;
