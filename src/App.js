import react,{Component}  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Routes,
  Link
} from "react-router-dom";
import './components/css/nav-bar.css';
import { AllGuiters } from "./components/AllGuiters";
import { AllManufactures } from "./components/AllManufactures";
import { HomePage } from "./components/HomePage";
import { TitlePage } from "./components/TitlePage";
import { ManufacturersContainer } from "./containers/manufacturersContainer";
import { GuitarsContainer } from "./containers/guitarsContainer";

class App extends Component {
  
  render(){
    return (
    <Router>
      <Routes>
         <Route path="/" element={<TitlePage/>} exact/>
         <Route path="/homePage" element={<HomePage/>} exact/>
         <Route path="/manufactures" element={<ManufacturersContainer/>} exact/>
         <Route path="/guitars" element={<GuitarsContainer/>} exact/>

      </Routes>
    </Router>
  );
}
};

export default App;


