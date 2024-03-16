import './App.css';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
import { Home } from './Components/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}>
        <Route path='about' element= {<About/>}/>
        <Route path='contact' element= {<Contact/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
