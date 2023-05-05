import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Summary from './pages/Summary';
import Footer from './Components/Footer';
import { Route, Routes} from 'react-router-dom';
import FormPage from './pages/FormPage';


function App() {
  return (
    <>
    
    <Navbar />

    <Routes>
      <Route path="/" Component={Home}></Route> 
      <Route path="/summary" Component={Summary}></Route>
      <Route path="/form" Component={FormPage}></Route>
    </Routes>
    

    <Footer />

    </>
  );
}

export default App;
