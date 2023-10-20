import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './views/Home';
import CreatePoem from './views/CreatePoem';
import EditPoem from './views/EditPoem';
import Navbar from './components/Navbar/Navbar';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePoem />} />
        <Route path="/edit/:id" element={<EditPoem />} />
      </Routes>
    </Router>
  );
}

export default App;
