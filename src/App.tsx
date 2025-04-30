import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TestModule from './pages/TestModule';
import GeometricShapes from './pages/GeometricShapes';
import Articles from './pages/Articles';
import Calculator from './pages/Calculator';
import FormulasPage from './pages/FormulasPage';
import StudyTools from './pages/StudyTools';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 mb-auto">
          <Routes>
            <Route path="/Xolve" element={<HomePage />} />
            <Route path="/test" element={<TestModule />} />
            <Route path="/shapes" element={<GeometricShapes />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/formulas" element={<FormulasPage />} />
            <Route path="/study-tools" element={<StudyTools />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;