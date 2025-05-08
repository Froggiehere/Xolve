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
import Lecture from './pages/Lecture';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 mb-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Xolve/test" element={<TestModule />} />
            <Route path="/Xolve/shapes" element={<GeometricShapes />} />
            <Route path="/Xolve/articles" element={<Articles />} />
            <Route path="/Xolve/calculator" element={<Calculator />} />
            <Route path="/Xolve/formulas" element={<FormulasPage />} />
            <Route path="/Xolve/study-tools" element={<StudyTools />} />
            <Route path="/Xolve/lecture" element={<Lecture />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;