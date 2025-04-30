const FormulasPage = () => {
  return (
    <div className="container mx-auto px-4">
  <h1 className="text-3xl font-bold mb-6">Formüller</h1>

  {/* Üçgenin Alanı */}
  <div className="bg-white rounded-lg shadow p-6 mb-6">
    <h2 className="text-xl font-semibold mb-2">Üçgenin Alanı</h2>
    <p className="mb-2">Alan = (Taban × Yükseklik) / 2</p>
    <svg width="200" height="150" className="mb-2">
      <polygon points="20,130 180,130 100,30" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="2"/>
      <line x1="100" y1="30" x2="100" y2="130" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5" />
      <text x="85" y="80" fontSize="14" fill="#EF4444">h</text>
      <text x="90" y="145" fontSize="14">a</text>
    </svg>
    <p className="text-sm text-gray-600">Burada "a" taban uzunluğu, "h" ise o tabana ait yüksekliktir.</p>
  </div>

  {/* Dikdörtgenin Alanı */}
  <div className="bg-white rounded-lg shadow p-6 mb-6">
    <h2 className="text-xl font-semibold mb-2">Dikdörtgenin Alanı</h2>
    <p className="mb-2">Alan = Kısa Kenar × Uzun Kenar</p>
    <svg width="200" height="120" className="mb-2">
      <rect x="20" y="20" width="160" height="80" fill="#FCE7F3" stroke="#D946EF" strokeWidth="2" />
      <text x="90" y="110" fontSize="14">Uzun Kenar</text>
      <text x="0" y="70" fontSize="14" transform="rotate(-90, 0, 70)">Kısa Kenar</text>
    </svg>
  </div>

  {/* Çemberin Çevresi ve Alanı */}
  <div className="bg-white rounded-lg shadow p-6 mb-6">
    <h2 className="text-xl font-semibold mb-2">Çemberin Çevresi ve Alanı</h2>
    <p className="mb-2">Çevre = 2 × π × r</p>
    <p className="mb-2">Alan = π × r²</p>
    <svg width="150" height="150" className="mb-2">
      <circle cx="75" cy="75" r="50" fill="#FEF9C3" stroke="#FACC15" strokeWidth="2" />
      <line x1="75" y1="75" x2="125" y2="75" stroke="#F87171" strokeWidth="2" />
      <text x="90" y="70" fontSize="14" fill="#F87171">r</text>
    </svg>
  </div>

  {/* Paralelkenar Alanı */}
  <div className="bg-white rounded-lg shadow p-6 mb-6">
    <h2 className="text-xl font-semibold mb-2">Paralelkenarın Alanı</h2>
    <p className="mb-2">Alan = Taban × Yükseklik</p>
    <svg width="200" height="130" className="mb-2">
      <polygon points="40,100 160,100 140,40 20,40" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2"/>
      <line x1="40" y1="40" x2="40" y2="100" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5"/>
      <text x="45" y="70" fontSize="14" fill="#10B981">h</text>
    </svg>
  </div>

  {/* Pisagor Teoremi */}
  <div className="bg-white rounded-lg shadow p-6 mb-6">
    <h2 className="text-xl font-semibold mb-2">Pisagor Teoremi</h2>
    <p className="mb-2">a² + b² = c²</p>
    <svg width="200" height="150" className="mb-2">
      <polygon points="30,120 30,30 130,120" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2" />
      <text x="20" y="75" fontSize="14" fill="#4F46E5">a</text>
      <text x="80" y="130" fontSize="14" fill="#4F46E5">b</text>
      <text x="80" y="60" fontSize="14" fill="#4F46E5">c</text>
    </svg>
    <p className="text-sm text-gray-600">Dik üçgende, hipotenüsün karesi, dik kenarların kareleri toplamına eşittir.</p>
  </div>
</div>

  );
};

export default FormulasPage;