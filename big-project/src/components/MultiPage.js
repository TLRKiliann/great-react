import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../Pages';
import About from '../Pages/about';
import Blogs from '../Pages/blogs';
import SignUp from '../Pages/signup';
import Contact from '../Pages/contact';
import '../App.css';


export default function MultiPage() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/home" component={Home} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      </Router>
    </div>
  );
}