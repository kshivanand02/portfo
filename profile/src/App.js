import './App.css';
import Intro from  "./intro.js";
import Navbar from "./navbar.js";
import Skill from "./skill.js"
import Work from "./work.js"
import Contact from  "./contact.js"
import F from "./footer.js" 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Work/>
      <Contact/>
      <F/>
    </div>
  );
}

export default App;
