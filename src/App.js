import {Component}  from "react";
import {
  BrowserRouter as Router,
  Route, 
  Routes} from "react-router-dom";
import './components/css/nav-bar.css';
import { ManufacturersForm } from "./components/ManufacurersForm";
import { GuitarForm } from "./components/GuitarForm";
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
         <Route path="/guitarForm" element={<GuitarForm/>} exact/>
         <Route path="/manufacturersForm" element={<ManufacturersForm/>} exact/>


      </Routes>
    </Router>
  );
}
};

export default App;


