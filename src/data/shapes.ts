import { Shape } from '../types';

export const shapes: Shape[] = [
  {
    id: 1,
    name: "Üçgen",
    definition: "Üç nokta ve bu noktaları birleştiren üç doğru parçasından oluşan geometrik şekil.",
    properties: [
      "İç açıları toplamı 180 derecedir",
      "Kenar uzunlukları toplamı çevredir",
      "Herhangi iki kenarının uzunlukları toplamı diğer kenardan büyüktür"
    ],
    formulas: {
      area: "A = (t × h) / 2",
      perimeter: "Ç = a + b + c"
    },
    realLifeExamples: [
      "Çatı tasarımları",
      "Köprü yapıları",
      "Uyarı levhaları"
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Triangle.Equilateral.svg/1200px-Triangle.Equilateral.svg.png"
  },
  {
    id: 2,
    name: "Kare",
    definition: "Dört kenarı eşit ve tüm açıları 90 derece olan dörtgen.",
    properties: [
      "Tüm kenarları eşittir",
      "Tüm açıları 90 derecedir",
      "Köşegenler birbirini ortalar"
    ],
    formulas: {
      area: "A = a²",
      perimeter: "Ç = 4a"
    },
    realLifeExamples: [
      "Fayans döşeme",
      "Pencere tasarımları",
      "Satranç tahtası"
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6CrqGjpt82YemLNjt5u4R6nlJxuhkW1BJ8A&s"
  },
  {
    id: 3,
    name: "Dikdörtgen",
    definition: "Karşılıklı kenarları birbirine eşit ve tüm açıları 90 derece olan dörtgen.",
    properties: [
      "Karşılıklı kenarlar paralel ve eşittir",
      "Tüm açıları 90 derecedir",
      "Köşegenler eşit uzunluktadır"
    ],
    formulas: {
      area: "A = a × b",
      perimeter: "Ç = 2(a + b)"
    },
    realLifeExamples: [
      "Kitap sayfaları",
      "Televizyon ekranları",
      "Kapı tasarımları"
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTod6CjEhoFCVAbR_fnDXrJ_QhiVHIr7l6sQ&s"
  },
  {
    id: 4,
    name: "Daire",
    definition: "Bir merkez noktasından eşit uzaklıktaki noktaların oluşturduğu geometrik şekil.",
    properties: [
      "Merkeze olan tüm uzaklıklar eşittir (yarıçap)",
      "Çevre uzunluğu çap ile π'nin çarpımıdır",
      "En simetrik geometrik şekildir"
    ],
    formulas: {
      area: "A = πr²",
      perimeter: "Ç = 2πr"
    },
    realLifeExamples: [
      "Tekerlek tasarımı",
      "Saat kadranı",
      "Pizza"
    ],
    imageUrl: "data:image/png;base64,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"
  },
  {
    id: 5,
    name: "Altıgen",
    definition: "Altı kenarı ve altı köşesi olan çokgen.",
    properties: [
      "İç açıları toplamı 720 derecedir",
      "Düzgün altıgende tüm kenarlar ve açılar eşittir",
      "Doğada sıkça rastlanan bir şekildir"
    ],
    formulas: {
      area: "A = (3√3 × a²) / 2",
      perimeter: "Ç = 6a"
    },
    realLifeExamples: [
      "Bal peteği",
      "Kar kristalleri",
      "Somun başları"
    ],
    imageUrl: "data:image/png;base64,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"
  },
  {
    id: 6,
    name: "Beşgen",
    definition: "Beş kenarı ve beş köşesi olan çokgen.",
    properties: [
      "İç açıları toplamı 540 derecedir",
      "Düzgün beşgende tüm kenarlar ve açılar eşittir",
      "Her köşeden çizilen köşegenler bir yıldız oluşturur"
    ],
    formulas: {
      area: "A = (5 × a² × cot(36°)) / 4",
      perimeter: "Ç = 5a"
    },
    realLifeExamples: [
      "Askeri nişanlar",
      "Mimari süslemeler",
      "ABD Pentagon binası"
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pentagon.svg/640px-Pentagon.svg.png"
  },
  {
    id: 7,
    name: "Paralelkenar",
    definition: "Karşılıklı kenarları paralel olan dörtgen.",
    properties: [
      "Karşılıklı kenarlar paralel ve eşittir",
      "Karşılıklı açılar eşittir",
      "Ardışık açılar bütünlerdir"
    ],
    formulas: {
      area: "A = t × h",
      perimeter: "Ç = 2(a + b)"
    },
    realLifeExamples: [
      "Logo tasarımları",
      "Mobilya tasarımları",
      "Modern mimari"
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Parallelogram.svg/1200px-Parallelogram.svg.png"
  }
];