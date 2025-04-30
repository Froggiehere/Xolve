import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kurumsal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-300">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-primary-300">Vizyon & Misyon</a></li>
              <li><a href="#" className="hover:text-primary-300">İletişim</a></li>
              <li><a href="#" className="hover:text-primary-300">Kariyer</a></li>
            </ul>
          </div>

          {/* Öğrenciler İçin */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Öğrenciler İçin</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-300">Sık Sorulan Sorular</a></li>
              <li><a href="#" className="hover:text-primary-300">Öğrenci Kulübü</a></li>
              <li><a href="#" className="hover:text-primary-300">Başarı Hikayeleri</a></li>
              <li><a href="#" className="hover:text-primary-300">Blog</a></li>
            </ul>
          </div>

          {/* Yasal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Yasal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-300">Kullanım Şartları</a></li>
              <li><a href="#" className="hover:text-primary-300">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-primary-300">KVKK</a></li>
              <li><a href="#" className="hover:text-primary-300">Çerez Politikası</a></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-primary-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-primary-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-primary-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-primary-300">
                <FaYoutube />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm">İletişim: info@xolvegeomatik.com</p>
              <p className="text-sm">Tel: +90 (212) 555 0123</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Xolve Geomatik. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}