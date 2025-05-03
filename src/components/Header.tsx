import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-primary-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className='text-4xl font-mono antialiased font-bold text-white ml-10'>Xolve</h1>
        <div className="flex items-center gap-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"
            alt="Turkish Flag"
            className="h-8 w-12 object-cover shadow-md rounded mr-10"
          />
        </div>
      </div>
      <nav className="bg-primary-600">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap space-x-6 py-3">
            <li>
              <Link to="/Xolve" className="text-white hover:text-primary-200 transition-colors antialiased ml-10">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link to="/test" className="text-white hover:text-primary-200 transition-colors antialiased">
                Testler
              </Link>
            </li>
            <li>
              <Link to="/shapes" className="text-white hover:text-primary-200 transition-colors antialiased">
                Geometrik Şekiller
              </Link>
            </li>
            <li>
              <Link to="/calculator" className="text-white hover:text-primary-200 transition-colors antialiased">
                Hesap Makinesi
              </Link>
            </li>
            <li>
              <Link to="/formulas" className="text-white hover:text-primary-200 transition-colors antialiased">
                Formül Listesi
              </Link>
            </li>
            <li>
              <Link to="/study-tools" className="text-white hover:text-primary-200 transition-colors antialiased">
                Çalışma Araçları
              </Link>
            </li>
            <li>
              <Link to="/articles" className="text-white hover:text-primary-200 transition-colors antialiased">
                Makaleler
              </Link>
            </li>
            <li>
              <Link to="/lecture" className="text-white hover:text-primary-200 transition-colors antialiased">
                Konu Anlatımı
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
