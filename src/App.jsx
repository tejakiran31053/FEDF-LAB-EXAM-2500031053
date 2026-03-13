import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './exam/Navbar';
import Home from './exam/Home';
import Registration from './exam/Registration';
import Display from './exam/FarmerDisplay';
import ApiDemo from './exam/ApiDemo';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/display" element={<Display />} />
          <Route path="/api" element={<ApiDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
