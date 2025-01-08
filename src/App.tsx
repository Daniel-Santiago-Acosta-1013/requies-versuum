import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Poems } from './pages/Poems';
import { PoemDetail } from './pages/PoemDetail';
import { LottieBackground } from './components/LottieBackground';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f4efe4] dark:bg-[#161b22] transition-colors relative">
        <LottieBackground />
        <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/poems" element={<Poems />} />
            <Route path="/poem/:id" element={<PoemDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}