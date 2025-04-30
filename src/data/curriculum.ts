import { Unit } from '../types';

export const curriculum: Unit[] = [
  {
    id: 1,
    name: "Sayılar ve Cebir",
    grade: 9,
    questions: [
      {
        id: 1,
        text: "Bir sayının 3 katının 5 fazlası 26 ise, bu sayı kaçtır?",
        options: ["5", "7", "8", "9"],
        correctAnswer: 1,
        explanation: "3x + 5 = 26 denklemini çözersek: 3x = 21, x = 7"
      },
      {
        id: 2,
        text: "(-2)⁴ işleminin sonucu kaçtır?",
        options: ["8", "16", "-16", "4"],
        correctAnswer: 2,
        explanation: "(-2)⁴ = (-2) × (-2) × (-2) × (-2) = 16"
      },
      {
        id: 3,
        text: "√144 + √36 işleminin sonucu kaçtır?",
        options: ["12", "18", "24", "30"],
        correctAnswer: 1,
        explanation: "√144 = 12 ve √36 = 6, toplam 18"
      },
      {
        id: 4,
        text: "2⁵ × 2³ işleminin sonucu kaçtır?",
        options: ["128", "256", "64", "32"],
        correctAnswer: 2,
        explanation: "2⁵ × 2³ = 2⁸ = 256"
      },
      {
        id: 5,
        text: "3! + 4! işleminin sonucu kaçtır?",
        options: ["30", "24", "18", "12"],
        correctAnswer: 0,
        explanation: "3! = 6 ve 4! = 24, toplam 30"
      }
    ]
  },
  {
    id: 2,
    name: "Üçgenler",
    grade: 9,
    questions: [
      {
        id: 1,
        text: "Bir üçgende iç açıların toplamı kaç derecedir?",
        options: ["90", "180", "270", "360"],
        correctAnswer: 1,
        explanation: "Bir üçgenin iç açılarının toplamı her zaman 180 derecedir."
      },
      {
        id: 2,
        text: "Bir dik üçgende hipotenüs 13 ve bir kenar 5 ise, diğer kenar kaçtır?",
        options: ["12", "8", "10", "15"],
        correctAnswer: 0,
        explanation: "Pisagor teoremi: 5² + x² = 13², x = 12"
      }
    ]
  },
    {
      id: 3,
      name: "Sayılar ve Cebir",
      grade: 10,
      questions: [
        {
          id: 1,
          text: "48 ve 72 sayılarının EBOB’u kaçtır?",
          options: ["6", "8", "12", "24"],
          correctAnswer: 3,
          explanation: ""
        },
        {
          id: 2,
          text: "36 sayısının asal çarpanlara ayrılmış hali aşağıdakilerden hangisidir?",
          options: ["2² × 3²", "2 × 3 × 6", "3³ × 2", "2 × 3²"],
          correctAnswer: 3,
          explanation: ""
        },
        {
          id: 3,
          text: "60 ve 90 sayılarının EKOK’u kaçtır?",
          options: ["120", "180", "360", "90"],
          correctAnswer: 2,
          explanation: ""
        },
        {
          id: 4,
          text: "Aşağıdaki sayılardan hangisi 3 ile tam bölünemez?",
          options: ["123", "321", "475", "111"],
          correctAnswer: 2,
          explanation: ""
        },
        {
          id: 5,
          text: "2, 3 ve 5 ile tam bölünebilen en küçük üç basamaklı sayı aşağıdakilerden hangisidir?",
          options: ["105", "120", "150", "180"],
          correctAnswer: 0,
          explanation: ""
        },
        {
          id: 6,
          text: "84 sayısının pozitif tam bölenlerinin toplamı kaçtır?",
          options: ["168", "196", "210", "224"],
          correctAnswer: 3,
          explanation: ""
        },
        {
          id: 7,
          text: "Aşağıdaki sayılardan hangisi 4 ile bölünebilir?",
          options: ["124", "135", "146", "152"],
          correctAnswer: 3,
          explanation: ""
        },
        {
          id: 8,
          text: "2⁴ × 3 × 5² sayısının kaç farklı pozitif tam böleni vardır?",
          options: ["15", "18", "20", "24"],
          correctAnswer: 0,
          explanation: ""
        },
        {
          id: 9,
          text: "Bir sayının 10 ile tam bölünebilmesi için aşağıdakilerden hangisi gereklidir?",
          options: ["Sonu 0 ya da 5 olmalı", "Sonu 0 olmalı", "Rakamları toplamı 10 olmalı", "Çift sayı olmalı"],
          correctAnswer: 1,
          explanation: ""
        },
        {
          id: 10,
          text: "Aşağıdaki sayılardan hangisi hem 2 hem de 3 ile tam bölünür?",
          options: ["72", "45", "25", "34"],
          correctAnswer: 0,
          explanation: ""
        }
      ]
    },
      {
        id: 4,
        name: "Fonksiyonlar",
        grade: 10,
        questions: [
          {
            id: 1,
            text: "Bir fonksiyonun tanım kümesi aşağıdakilerden hangisidir?",
            options: ["Yalnızca pozitif sayılar", "Sayılar kümesi", "Gerçek sayılar kümesi", "Hiçbiri"],
            correctAnswer: 0,
            explanation: ""
          },
          {
            id: 2,
            text: "f(x) = 2x + 3 fonksiyonu için f(4) değeri kaçtır?",
            options: ["11", "10", "8", "7"],
            correctAnswer: 1,
            explanation: ""
          },
          {
            id: 3,
            text: "Aşağıdaki fonksiyonlardan hangisi artan bir fonksiyondur?",
            options: ["f(x) = -x² + 4", "f(x) = 3x + 1", "f(x) = x³ - 2x", "f(x) = -3x + 7"],
            correctAnswer: 1,
            explanation: ""
          },
          {
            id: 4,
            text: "f(x) = 3x - 5 fonksiyonunun tersini bulmak için hangi işlemi yapmalıyız?",
            options: ["x’i yer değiştirmek", "f(x)’i x yapmak", "y = f(x)’i çözmek", "f(x) ile x’i çarpmak"],
            correctAnswer: 3,
            explanation: ""
          },
          {
            id: 5,
            text: "f(x) = 4x² - 2x + 1 fonksiyonunun grafiği hangi özellikleri taşır?",
            options: ["Yalnızca dikey kesişim noktası vardır", "Grafik her iki yönde de büyür", "Grafik negatif yöndedir", "Grafik, x eksenine paraleldir"],
            correctAnswer: 2,
            explanation: ""
          },
          {
            id: 6,
            text: "Aşağıdaki fonksiyonlardan hangisi bire bir fonksiyon değildir?",
            options: ["f(x) = x³", "f(x) = x²", "f(x) = 2x + 1", "f(x) = -x + 5"],
            correctAnswer: 1,
            explanation: ""
          },
          {
            id: 7,
            text: "f(x) = 2x - 3 fonksiyonu ile g(x) = x² + 1 fonksiyonlarının birleşimi f(g(x)) = ?",
            options: ["2x² - 3", "2(x² + 1) - 3", "2x² + 3", "x² + 2x - 3"],
            correctAnswer: 1,
            explanation: ""
          },
          {
            id: 8,
            text: "Fonksiyonun tanım kümesi ile değer kümesinin kesişim kümesi hangi durumu gösterir?",
            options: ["Fonksiyon sürekli artar", "Fonksiyon sürekli azalır", "Fonksiyon tanımlı olduğu aralıktadır", "Fonksiyon bir değer kümesi içinde yer alır"],
            correctAnswer: 1,
            explanation: ""
          },
          {
            id: 9,
            text: "Bir fonksiyon örten mi? Bunu test etmek için aşağıdakilerden hangisini yapmalıyız?",
            options: ["Tanım kümesindeki her x için yalnızca bir y olmalı", "Her y için bir x değeri olmalı", "f(0) = 0 olmalı", "Fonksiyon sıfırıncı dereceden olmalı"],
            correctAnswer: 1,
            explanation: ""
          },
          {
            id: 10,
            text: "f(x) = 3x² + 2 fonksiyonunun minimum değeri nedir?",
            options: ["2", "0", "-2", "3"],
            correctAnswer: 0,
            explanation: ""
          }
        ]
        
  },
  {
    id: 5,
    name: "Fonksiyonlar",
    grade: 11,
    questions: [
      {
        id: 1,
        text: "f(x) = x² + 2x + 1 fonksiyonunun grafiği nedir?",
        options: ["Doğru", "Parabol", "Hiperbol", "Çember"],
        correctAnswer: 1,
        explanation: "İkinci dereceden fonksiyonların grafikleri paraboldür."
      }
    ]
  },
  {
    id: 6,
    name: "Logaritma",
    grade: 11,
    questions: [
      {
        id: 1,
        text: "log₂8 = x ise, 2ˣ kaçtır?",
        options: ["4", "6", "8", "16"],
        correctAnswer: 2,
        explanation: "log₂8 = 3 olduğundan, 2³ = 8"
      }
    ]
  },
  {
    id: 7,
    name: "Diziler",
    grade: 11,
    questions: [
      {
        id: 1,
        text: "Aritmetik dizide a₁ = 3 ve d = 2 ise a₅ kaçtır?",
        options: ["7", "9", "11", "13"],
        correctAnswer: 2,
        explanation: "aₙ = a₁ + (n-1)d formülünden, a₅ = 3 + (5-1)2 = 11"
      }
    ]
  },
  {
    id: 8,
    name: "Türev Uygulamaları",
    grade: 12,
    questions: [
      {
        id: 1,
        text: "f(x) = x² + 2x fonksiyonunun x = 1 noktasındaki türevi kaçtır?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        explanation: "f'(x) = 2x + 2, f'(1) = 2(1) + 2 = 4"
      }
    ]
  },
  {
    id: 9,
    name: "İntegral Uygulamaları",
    grade: 12,
    questions: [
      {
        id: 1,
        text: "∫(2x + 1)dx işleminin sonucu nedir?",
        options: ["x² + x + C", "2x² + x + C", "x² + 2x + C", "2x² + 2x + C"],
        correctAnswer: 0,
        explanation: "∫(2x + 1)dx = x² + x + C"
      }
    ]
  },
  {
    id: 10,
    name: "Karmaşık Sayılar",
    grade: 12,
    questions: [
      {
        id: 1,
        text: "i² = -1 ise, (2 + 3i)(1 - i) işleminin sonucu nedir?",
        options: ["5 + i", "2 - i", "5 + 2i", "2 + 5i"],
        correctAnswer: 0,
        explanation: "(2 + 3i)(1 - i) = 2(1) + 2(-i) + 3i(1) + 3i(-i) = 2 - 2i + 3i + 3 = 5 + i"
      },
      {
        id: 2,
        text: "|2 + 3i| değeri kaçtır?",
        options: ["5", "13", "√13", "3"],
        correctAnswer: 2,
        explanation: "|2 + 3i| = √(2² + 3²) = √(4 + 9) = √13"
      }
    ]
  },
  {
    id: 11,
    name: "Limit ve Süreklilik",
    grade: 12,
    questions: [
      {
        id: 1,
        text: "lim(x→2) (x² - 4)/(x - 2) değeri kaçtır?",
        options: ["4", "2", "0", "-2"],
        correctAnswer: 0,
        explanation: "L'Hospital kuralı ile: lim(x→2) 2x/(1) = 4"
      }
    ]
  },
  {
    id: 12,
    name: "Algoritma ve Bilişim",
    grade: 10,
    questions: [
      { id: 1, text: "Aşağıdakilerden hangisi algoritma tanımına en uygun örnektir?", options: ["Bir sayıyı 2 ile çarpma", "Bilgisayarda hesaplama yapma", "Bir problemi çözmek için izlenen adımların tümü", "Yazılım geliştirme süreci"], correctAnswer: 0, explanation: "" },
      { id: 2, text: "Bir algoritmanın geçerli olabilmesi için hangi özelliklere sahip olması gerekir?", options: ["Açıklık ve sonluluk", "İleriye dönük sonuçlar üretme", "Süreklilik ve tekrarlanabilirlik", "Yalnızca her zaman doğru sonuç vermek"], correctAnswer: 1, explanation: "" },
      { id: 3, text: "Aşağıdakilerden hangisi bir algoritmanın yanlışlıkla döngüye girmesini engellemeye yardımcı olur?", options: ["Koşul kontrolü", "Yükleme işlemi", "Döngü ekleme", "Değişken atama"], correctAnswer: 0, explanation: "" },
      { id: 4, text: "\"Ve\" mantık bağlacının doğru olduğu durum aşağıdakilerden hangisidir?", options: ["A doğru ve B yanlış ise sonuç doğru olur", "A yanlış ve B yanlış ise sonuç doğru olur", "A doğru ve B doğru ise sonuç doğru olur", "A yanlış ve B doğru ise sonuç doğru olur"], correctAnswer: 3, explanation: "" },
      { id: 5, text: "Aşağıdakilerden hangisi \"veya\" mantık bağlacının doğruluğunu tanımlar?", options: ["İki önermeden biri doğruysa sonuç doğrudur", "Her iki önerme de doğruysa sonuç yanlış olur", "Her iki önerme de yanlışsa sonuç doğrudur", "Yalnızca biri doğru olduğunda sonuç yanlıştır"], correctAnswer: 1, explanation: "" },
      { id: 6, text: "Aşağıdaki algoritmalardan hangisi \"Koşullu Durum\" algoritma örneği değildir?", options: ["Eğer x > 5 ise, y = 10", "x’in 3 katı y’ye eşit mi?", "Eğer x < 10 ise, z = 3; değilse z = 5", "x’i 3 ile çarpıp sonucu yazdır"], correctAnswer: 0, explanation: "" },
      { id: 7, text: "\"Her\" niceleyicisi algoritmalarda hangi durumu tanımlar?", options: ["Bir koşul sağlanırsa yalnızca bir işlem yapılır", "Bir koşul sağlanırsa birçok işlem yapılır", "Her adımda aynı işlem yapılır", "Herhangi bir adımda işlem yapılmaz"], correctAnswer: 2, explanation: "" },
      { id: 8, text: "Aşağıdaki işlemlerden hangisi bir algoritmada kullanılan temel mantık bağlacıdır?", options: ["Başlat", "Döngü", "\"Ve\"", "Karar"], correctAnswer: 0, explanation: "" },
      { id: 9, text: "Bir algoritma verilerini doğru bir şekilde işlemek için hangi tür veri yapılarına ihtiyaç duyar?", options: ["Değişkenler ve diziler", "Yalnızca sayılar", "Sadece karakter dizileri", "Liste ve grafikler"], correctAnswer: 1, explanation: "" },
      { id: 10, text: "Aşağıdaki durumlardan hangisi algoritmaların doğru çalışabilmesi için gereklidir?", options: ["Verilerin sabit olması", "Adımların belirli bir sırada yapılması", "Her adımda değişken kullanılması", "Sonsuz döngülerin kullanılması"], correctAnswer: 2, explanation: "" }
    ]
  },
  {
    id: 13,
    name: "Geometri - Dörtgenler ve Çokgenler",
    grade: 10,
    questions: [
      { id: 1, text: "Aşağıdaki çokgenlerden hangisi dört kenarı eşit olan bir şekildir?", options: ["Dikdörtgen", "Kare", "Üçgen", "Beşgen"], correctAnswer: 1, explanation: "" },
      { id: 2, text: "Bir paralelkenarın karşılıklı kenarlarının uzunlukları sırasıyla 6 cm ve 8 cm, yükseklik ise 4 cm’dir. Paralelkenarın alanı nedir?", options: ["24 cm²", "32 cm²", "48 cm²", "64 cm²"], correctAnswer: 2, explanation: "" },
      { id: 3, text: "Aşağıdaki çokgenlerin hangisi üçgen değildir?", options: ["Eşkenar üçgen", "Dik üçgen", "Yamuğun iç üçgeni", "Çeşitkenar üçgen"], correctAnswer: 2, explanation: "" },
      { id: 4, text: "Bir dörtgenin köşegenlerinin birbirini dik kestiği bir şekil aşağıdakilerden hangisidir?", options: ["Kare", "Paralelkenar", "Dikdörtgen", "Yamuğun dik kenarları"], correctAnswer: 3, explanation: "" },
      { id: 5, text: "Bir eşkenar dörtgenin özelliklerinden hangisi yanlıştır?", options: ["Karşılıklı kenarları paraleldir", "Bütün açıları 90°’dir", "Köşegenleri birbirini ortalar", "Bütün açıları eşittir"], correctAnswer: 1, explanation: "" },
      { id: 6, text: "Bir beşgenin iç açıları toplamı kaç derecedir?", options: ["540°", "360°", "270°", "1080°"], correctAnswer: 0, explanation: "" },
      { id: 7, text: "Bir üçgenin kenar uzunlukları sırasıyla 5 cm, 12 cm ve 13 cm’dir. Bu üçgen hangi tür bir üçgendir?", options: ["Eşkenar üçgen", "Dik üçgen", "Geniş açı üçgeni", "Küçük açı üçgeni"], correctAnswer: 1, explanation: "" },
      { id: 8, text: "Aşağıdaki çokgenlerden hangisi düzenli bir çokgen değildir?", options: ["Altıgen", "Yedigen", "Sekizgen", "Dörtgen"], correctAnswer: 3, explanation: "" },
      { id: 9, text: "Bir dikdörtgenin kısa kenarının uzunluğu 4 cm ve uzun kenarının uzunluğu 6 cm’dir. Dikdörtgenin çevresi nedir?", options: ["20 cm", "24 cm", "32 cm", "10 cm"], correctAnswer: 1, explanation: "" },
      { id: 10, text: "Aşağıdaki dörtgenlerden hangisinin karşılıklı kenarları paralel değildir?", options: ["Kare", "Dikdörtgen", "Paralelkenar", "Yamuk"], correctAnswer: 3, explanation: "" }
    ]
  },
  {
    id: 14,
    name: "Uzay Geometrisi",
    grade: 10,
    questions: [
      { id: 1, text: "Aşağıdaki katı cisimlerden hangisi düzgün çok yüzlü değildir?", options: ["Prizma", "Piramit", "Koni", "Küre"], correctAnswer: 2, explanation: "" },
      { id: 2, text: "Bir dikdörtgenler prizmasının 3 kenar uzunluğu sırasıyla 4 cm, 5 cm ve 6 cm’dir. Bu prizmanın hacmi nedir?", options: ["60 cm³", "120 cm³", "15 cm³", "24 cm³"], correctAnswer: 0, explanation: "" },
      { id: 3, text: "Bir koninin yüksekliği 8 cm, taban çapı ise 6 cm’dir. Bu koninin yüzey alanı kaç cm² olur? (π = 3)", options: ["96 cm²", "150 cm²", "240 cm²", "96π cm²"], correctAnswer: 0, explanation: "" },
      { id: 4, text: "Aşağıdaki katı cisimlerden hangisi yalnızca bir yüzeye sahiptir?", options: ["Koni", "Küre", "Silindir", "Prizma"], correctAnswer: 1, explanation: "" },
      { id: 5, text: "Bir piramidin tabanı bir kare olup kenar uzunluğu 5 cm, yüksekliği ise 12 cm’dir. Piramidin hacmi nedir?", options: ["100 cm³", "75 cm³", "120 cm³", "25 cm³"], correctAnswer: 1, explanation: "" },
      { id: 6, text: "Aşağıdaki cisimlerden hangisi bir küp değildir?", options: ["Bir kutu", "Bir zar", "Bir top", "Bir masa"], correctAnswer: 2, explanation: "" },
      { id: 7, text: "Silindirin hacmini hesaplamak için hangi formül kullanılır?", options: ["πr²h", "4/3πr³", "2πr²h", "2πrh"], correctAnswer: 0, explanation: "" },
      { id: 8, text: "Bir koninin taban yarıçapı 4 cm ve yüksekliği 9 cm’dir. Koninin hacmi nedir? (π = 3)", options: ["108 cm³", "108π cm³", "36 cm³", "36π cm³"], correctAnswer: 0, explanation: "" },
      { id: 9, text: "Bir küre şeklindeki topun çapı 10 cm’dir. Bu topun yüzey alanı nedir? (π = 3)", options: ["300 cm²", "150 cm²", "600 cm²", "500 cm²"], correctAnswer: 2, explanation: "" },
      { id: 10, text: "Prizma ve piramidin arasındaki fark nedir?", options: ["Prizmanın tabanı çokgen, piramidin tabanı üçgendir", "Prizma düzgün bir çok yüzlüdür, piramit ise tabanı bir üçgen olan bir katıdır", "Prizma tabanı düzgün çokgen olabilir, piramit tabanı her zaman çokgendir", "Prizma tüm yüzeyleri paralelken, piramidin sadece bir yüzeyi paraleldir"], correctAnswer: 2, explanation: "" }
    ]
  },
  {
    "id": 15,
    "name": "İstatistiksel Araştırma Süreci",
    "grade": 10,
    "questions": [
      { "id": 1, "text": "Aşağıdaki veri türlerinden hangisi iki kategorik değişkenli verilere örnektir?", "options": ["Öğrencilerin yaşları", "Çalışanların maaşları", "Öğrencilerin cinsiyetleri ve okul tercihleri", "Aylık giderler ve gelirler"], "correctAnswer": 2, "explanation": "" },
      { "id": 2, "text": "Aşağıdaki tablolardan hangisi iki kategorik değişken arasındaki ilişkiyi gösterir?", "options": ["Satışlar ve maliyetler tablosu", "Yaş gruplarına göre eğitim seviyesi tablosu", "Aylık gelir ve gider karşılaştırması tablosu", "Ürün fiyatları ve satış adedi tablosu"], "correctAnswer": 1, "explanation": "" },
      { "id": 3, "text": "Aşağıdakilerden hangisi veri toplama aşamasında yapılan bir hata olabilir?", "options": ["Verilerin doğru bir şekilde kategorize edilmesi", "Anket sorularının önceden belirlenmiş olması", "Verilerin rastgele seçilmesi", "Verilerin tutarsız bir biçimde toplanması"], "correctAnswer": 3, "explanation": "" },
      { "id": 4, "text": "Aşağıdaki yöntemlerden hangisi iki kategorik değişkenli veri analizinde kullanılmaz?", "options": ["Çapraz tablo", "Çizgi grafiği", "Karakteristik oranlar", "Ki-kare testi"], "correctAnswer": 1, "explanation": "" },
      { "id": 5, "text": "Aşağıdaki grafiklerden hangisi iki kategorik değişken arasındaki ilişkiyi daha açık bir şekilde gösterir?", "options": ["Çizgi grafiği", "Bar grafiği", "Histogram", "Dağılım grafiği"], "correctAnswer": 1, "explanation": "" },
      { "id": 6, "text": "Veriler toplandıktan sonra hangi adım genellikle izlenir?", "options": ["Sonuçların yorumlanması", "Verilerin analiz edilmesi", "Yeni veriler toplanması", "Grafik çizilmesi"], "correctAnswer": 3, "explanation": "" },
      { "id": 7, "text": "İki kategorik değişkenli verilerde ilişki analizi yapılırken hangi test kullanılır?", "options": ["t testi", "Ki-kare testi", "Varyans analizi", "Regresyon analizi"], "correctAnswer": 1, "explanation": "" },
      { "id": 8, "text": "İstatistiksel analizlerin sonucunda elde edilen bulguların yorumlanması aşamasında dikkat edilmesi gereken en önemli unsur nedir?", "options": ["Verilerin ne kadar doğru toplandığı", "Verilerin hangi formatta sunulduğu", "Sonuçların gerçek dünya ile uyumlu olup olmadığı", "Verilerin ne kadar ayrıntılı olduğu"], "correctAnswer": 2, "explanation": "" },
      { "id": 9, "text": "Aşağıdaki istatistiksel görsellerden hangisi iki kategorik değişken arasındaki ilişkiyi en iyi şekilde gösterir?", "options": ["Dağılım grafiği", "Histogram", "Çapraz tablo", "Kutup grafiği"], "correctAnswer": 2, "explanation": "" },
      { "id": 10, "text": "İki kategorik değişkenli verilerde ilişkilerin analiz edilmesi için kullanılan istatistiksel testin amacı nedir?", "options": ["Ortalamayı bulmak", "Varyansı ölçmek", "Veriler arasındaki bağımsızlık ya da ilişkiyi test etmek", "Verilerin düzgün dağılıp dağılmadığını belirlemek"], "correctAnswer": 2, "explanation": "" }
    ]
  },
  {
    "id": 16,
    "name": "Veriden Olasılığa",
    "grade": 10,
    "questions": [
      { "id": 1, "text": "Bir zar atıldığında 6 gelme olasılığı nedir?", "options": ["1/6", "1/2", "1/3", "1/12"], "correctAnswer": 0, "explanation": "" },
      { "id": 2, "text": "Aşağıdaki ifadelerden hangisi koşullu olasılık kavramını doğru tanımlar?", "options": ["Bir olayın gerçekleşme olasılığı, başka bir olayın sonucuna bağlıdır.", "Bir olayın gerçekleşme olasılığı tüm olasılıkları kapsar.", "Bir olayın gerçekleşme olasılığı, her zaman eşit dağılım gösterir.", "Koşullu olasılık, sadece bağımsız olaylarda kullanılır."], "correctAnswer": 0, "explanation": "" },
      { "id": 3, "text": "İki bağımsız olayın gerçekleşme olasılığı, her iki olayın olasılıklarının çarpımıyla bulunur. Bu durumda, bir kart destesinde kırmızı bir kart çekme olasılığı nedir?", "options": ["1/2", "1/26", "26/52", "1/13"], "correctAnswer": 0, "explanation": "" },
      { "id": 4, "text": "Bayes Teoremi'nin uygulanabilmesi için hangi durum gereklidir?", "options": ["Olaylar bağımsız olmalıdır", "Olaylar birbirine koşullu olmalıdır", "Olaylar kesişmeden gerçekleşmelidir", "Olayların sonuçları belirli bir sırada olmalıdır"], "correctAnswer": 1, "explanation": "" },
      { "id": 5, "text": "Aşağıdaki durumlardan hangisinde Bayes Teoremi kullanılmaz?", "options": ["Bir öğrencinin başarılı olup olmadığı bilindiğinde, sınıfın genel başarı oranının hesaplanması", "Bir kutudan seçilen topun kırmızı olma olasılığı verildiğinde, diğer renklerin olasılıklarının hesaplanması", "Bir yarışmada bir yarışmacının kazanma olasılığı, diğerlerinin başarısına bağlıdır", "Bir hava durumu raporunda yağmur yağma olasılığının belirlenmesi"], "correctAnswer": 0, "explanation": "" },
      { "id": 6, "text": "Bir torbada 3 kırmızı, 2 yeşil ve 5 mavi top vardır. Rastgele seçilen bir topun kırmızı olma olasılığı nedir?", "options": ["3/10", "1/2", "3/5", "1/3"], "correctAnswer": 0, "explanation": "" },
      { "id": 7, "text": "Koşullu olasılık ile ilgili aşağıdakilerden hangisi doğrudur?", "options": ["Koşullu olasılık her zaman bağımsız olaylar için geçerlidir", "Koşullu olasılık, yalnızca bağımlı olaylar için hesaplanır", "Koşullu olasılık, belirli bir olayın gerçekleşme olasılığını etkilemez", "Koşullu olasılık, birden fazla olayı aynı anda ele almayı gerektirir"], "correctAnswer": 1, "explanation": "" },
      { "id": 8, "text": "Aşağıdaki olaylardan hangisi Bayes Teoremi'nin kullanılmasında örnek teşkil edebilir?", "options": ["Bir hastanın test sonucunun pozitif olduğu bilindiğinde, hastanın hasta olma olasılığını hesaplamak", "Bir zarın 6 gelme olasılığı", "Bir kartın kırmızı olması olasılığı", "Bir defterin yırtılma olasılığı"], "correctAnswer": 0, "explanation": "" },
      { "id": 9, "text": "İki olayın koşullu olasılığı P(A|B) ile gösterilir. Bu, hangi durumu ifade eder?", "options": ["A olayının bağımsız olarak gerçekleşme olasılığı", "B olayının A olayına bağlı olarak gerçekleşme olasılığı", "A ve B olaylarının ortak olasılığı", "A olayının B olayına bağlı olarak gerçekleşme olasılığı"], "correctAnswer": 3, "explanation": "" },
      { "id": 10, "text": "Bayes Teoremi kullanılarak bir durumda, hastalığı taşıyan kişilerin pozitif test sonucunu verme olasılığı 0.8 ve negatif test sonucunu verme olasılığı 0.2'dir. Eğer test pozitif çıkarsa, hastalığı taşıma olasılığı nedir? (Önceden hasta olma olasılığı %5)", "options": ["0.8", "0.2", "0.6", "0.5"], "correctAnswer": 2, "explanation": "" }
    ]
  }  
];