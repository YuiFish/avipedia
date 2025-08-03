import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.jsx';
import AvesPag from './pages/AvesPag.jsx'; 

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aves" element={<AvesPag />} />
      </Routes>
    </Router>
  );
}


export default App;