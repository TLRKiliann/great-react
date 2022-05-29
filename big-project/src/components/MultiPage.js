import '../App.css';

export default function MultiPage() {
  return (
    <div>
      Ok
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