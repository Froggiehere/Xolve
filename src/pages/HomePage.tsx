import { Link } from 'react-router-dom';
import { BeakerIcon, BookOpenIcon, CalculatorIcon } from '@heroicons/react/24/outline';
import { articles } from '../data/articles';

export default function HomePage() {
  // Get the latest article for "Article of the Day"
  const featuredArticle = articles[0];

  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hoş Geldiniz!
        </h1>
        <p className="text-lg text-gray-600">
          Xolve Geomatik, lise müfredatına uygun testlerle, görsel anlatımlarla ve bilgi içerikleriyle eğitimi senin için kolaylaştırır.
        </p>
      </section>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Link to="/test" className="card group">
          <CalculatorIcon className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-center mb-2">Test Çözmeye Başla</h2>
          <p className="text-gray-600 text-center">Konulara göre düzenlenmiş testlerle kendini değerlendir.</p>
        </Link>

        <Link to="/shapes" className="card group">
          <BeakerIcon className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-center mb-2">Geometrik Şekiller</h2>
          <p className="text-gray-600 text-center">Temel geometrik şekilleri ve özelliklerini keşfet.</p>
        </Link>

        <Link to="/articles" className="card group">
          <BookOpenIcon className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-center mb-2">Makaleler</h2>
          <p className="text-gray-600 text-center">Bilim ve matematik hakkında ilgi çekici içerikler.</p>
        </Link>
      </div>
      {/* Featured Article Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Günün Makalesi</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{featuredArticle.title}</h3>
            <p className="text-gray-600 mb-4">{featuredArticle.preview}</p>
            <Link 
              to="/articles" 
              className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Devamını Oku
            </Link>
          </div>
        </div>
      </section>

      

            {/* Atatürk Quote Section */}
            <section className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/6">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Ataturk1930s.jpg" 
              alt="Mustafa Kemal Atatürk"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <blockquote className="text-xl italic font-semibold text-gray-900">
              "Hayatta en hakiki mürşit ilimdir."
            </blockquote>
            <p className="mt-4 text-gray-600">- Mustafa Kemal Atatürk</p>
          </div>
        </div>
      </section>

    </div>
  );
}