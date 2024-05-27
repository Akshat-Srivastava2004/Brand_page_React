import './App.css';  
import Hero from './components/Hero.jsx';
import Navigation from './components/navigation.jsx';                 //global css 
const App=()=>{                      // this is a component not a function 
   
  return <div>
      <Navigation />
      <Hero />
  </div>
};
export default App;