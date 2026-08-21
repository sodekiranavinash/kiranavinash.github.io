import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@shared/context/ThemeContext';
import { Navbar } from '@portfolio/components/Navbar';
import { Footer } from '@portfolio/components/Footer';
import { Home } from '@portfolio/pages/Home';
import { Privacy } from '@portfolio/pages/Privacy';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen flex-col bg-base">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
