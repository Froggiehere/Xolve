import { Article } from '../types';

export const articles: Article[] = [
  {
    id: 1,
    title: "Matematiğin Tarihteki Yolculuğu",
    preview: "İnsanlık tarihinin en eski bilimlerinden biri olan matematiğin gelişim sürecini keşfedin.",
    content: `Matematik, insanlık tarihinin en eski ve en temel bilimlerinden biridir. İlk matematiksel düşünceler, 
    günlük yaşamın pratik ihtiyaçlarından doğmuştur. Tarımın gelişmesiyle birlikte ürünlerin sayımı, takvimlerin oluşturulması 
    ve arazilerin ölçülmesi gibi gereksinimler, insanları sayı ve ölçü kavramlarıyla tanıştırmıştır.

    Antik Mısır ve Mezopotamya uygarlıkları, aritmetik ve geometrinin ilk sistemli uygulayıcıları oldular. Özellikle Nil Nehri'nin 
    taşkınlarından sonra arazi sınırlarının yeniden belirlenmesi, geometri bilgisinin gelişimini hızlandırmıştır. Babil matematiği, 
    60 tabanlı sayı sistemini kullanarak astronomi ve mühendislik alanlarında önemli katkılar sağlamıştır.

    Eski Yunan'da matematik, yalnızca pratik bir araç olmaktan çıkıp felsefi bir düşünce biçimine dönüşmüştür. Pisagor, Öklid, 
    Arşimet ve Eudoxus gibi matematikçiler, soyut kavramlara dayalı sistemler geliştirmiş ve bugünkü matematiğin temelini atmışlardır. 
    Öklid’in *Elementler* adlı eseri, yüzyıllar boyunca matematik öğretiminin temel kaynaklarından biri olmuştur.

    Orta Çağ'da İslam dünyası, matematikte büyük bir ilerleme kaydetmiştir. El-Harezmi'nin cebir çalışmaları, modern cebirin temelini 
    oluşturmuş ve Batı’ya aktarılmıştır. Aynı zamanda sayı sistemleri geliştirilmiş, sıfır kavramı yaygınlaştırılmış ve trigonometrik 
    bilgiler derinleştirilmiştir.

    Rönesans ve sonrasında Avrupa’da matematiksel düşünce yeniden canlanmış, analitik geometri, kalkülüs ve olasılık teorisi gibi 
    yeni alanlar doğmuştur. Descartes, Newton ve Leibniz gibi isimler, hem felsefede hem de bilimde matematiğin merkezî rolünü pekiştirmiştir.

    Günümüzde matematik, yalnızca teorik bir alan değil; bilgisayar bilimlerinden yapay zekâya, ekonomiden biyolojiye kadar pek çok 
    disiplinde temel bir araçtır. İnsanlıkla birlikte sürekli evrilen matematik, geçmişin izlerini taşıyarak geleceği şekillendirmeye devam etmektedir.`,
    category: "Matematik Tarihi",
    date: "2025-03-15"
  }
  ,
  {
    id: 2,
    title: "Geometri Neden Önemlidir?",
    preview: "Günlük hayatımızda geometrinin rolünü ve önemini anlatan kapsamlı bir inceleme.",
    content: `Geometri, çevremizdeki dünyayı anlamamıza yardımcı olan temel bir matematik dalıdır. 
    Mimariden sanata, mühendislikten doğa bilimlerine kadar...`,
    category: "Geometri",
    date: "2024-03-14"
  },
  {
    id: 3,
    title: "Geometri ve Mimarlık: Yapıların Ardındaki Bilim",
    preview: "Mimari tasarımlarda geometrinin nasıl kullanıldığını ve yapısal estetiğe katkısını keşfedin.",
    content: `Geometri, mimarlığın temel yapı taşlarından biridir. Antik çağlardan günümüze kadar inşa edilen tüm yapılar, belirli geometrik prensipler doğrultusunda şekillenmiştir. Antik Yunan ve Roma'dan kalan yapılar, simetri ve oran kavramlarına sıkı sıkıya bağlı kalınarak tasarlanmıştır. Bu da onların yalnızca estetik değil, aynı zamanda işlevsel olmalarını sağlamıştır.
  
  Modern mimarlıkta ise geometri, hem yaratıcı hem de teknik boyutlarda kullanılır. Ünlü mimar Zaha Hadid’in organik ve akıcı formları, parametrik geometrinin uygulanmasıyla elde edilir. Aynı şekilde, yüksek binalar inşa edilirken, yük taşıma kapasitesini artırmak için üçgen formlardan faydalanılır. 
  
  Geometrik hesaplamalar, yapıların dayanıklılığı ve stabilitesi açısından hayati önem taşır. Örneğin, bir köprünün yay şekli, yükü eşit olarak dağıtmak ve aşırı zorlanmayı önlemek için hesaplanır. Bunun yanında, estetik değer yaratmak isteyen mimarlar da geometrinin sunduğu orantı ve simetri imkanlarından faydalanır.
  
  Bu disiplin, sadece somut yapılar değil, aynı zamanda dijital tasarımlar için de önemlidir. Günümüzde birçok mimar, CAD yazılımları kullanarak yapılarını sanal ortamda tasarlar. Bu programlar, geometrik modelleme sayesinde tasarımın üç boyutlu hâlini oluşturur. Geometrik bilgi olmadan bu sistemleri kullanmak neredeyse imkânsızdır.
  
  Sonuç olarak, geometri yalnızca bir matematik konusu değil, mimarlığın kalbinde yer alan bir sanattır. İster tarihi bir caminin kubbesinde, ister çağdaş bir gökdelenin cephesinde olsun, geometrinin izi her yerdedir.`,
    category: "Geometri",
    date: "2024-04-01"
  },
  {
    id: 4,
    title: "Sanatta Geometrinin Yeri",
    preview: "Sanat tarihinde geometrinin oynadığı rol ve farklı akımlardaki yansımaları üzerine bir inceleme.",
    content: `Geometri ile sanat arasında tarih boyunca güçlü bir bağ olmuştur. İlk çağlardan beri insanlar doğadaki formları çizmek ve anlamlandırmak için geometriden yararlanmışlardır. Bu durum, mağara resimlerinden günümüz dijital sanatına kadar süregelen bir ilişkiyi ifade eder.
  
  Antik dönemlerde özellikle İslam sanatında geometri önemli bir yer tutar. İslam sanatında figüratif öğeler kısıtlı olduğundan, sanatçılar simetri, tekrar eden desenler ve geometrik motiflerle zenginleştirilmiş eserler üretmişlerdir. Özellikle çini işlemelerinde ve mimaride karşımıza çıkan karmaşık geometrik desenler, hem estetik hem de matematiksel açıdan etkileyicidir.
  
  Rönesans döneminde sanatçılar perspektif kurallarını keşfetmiş ve bu doğrultuda eserlerinde derinlik ve hacim algısı oluşturabilmişlerdir. Leonardo da Vinci gibi sanatçılar, altın oran ve simetri kavramlarını kullanarak görsel mükemmellik arayışına girmişlerdir. Geometri bu dönemde sanatın bilimle buluşma noktası olmuştur.
  
  Modern ve çağdaş sanatta da geometrinin etkileri sürmektedir. Örneğin, Piet Mondrian gibi sanatçılar, saf geometrik formları ve ana renkleri kullanarak sanatı sadeleştirmeyi amaçlamışlardır. Kübizm akımı da geometrinin sanattaki önemli bir ifadesidir. Picasso ve Braque gibi sanatçılar, nesneleri geometrik şekillere ayırarak farklı açılardan göstermeye çalışmışlardır.
  
  Dijital çağda ise geometri, bilgisayar destekli sanatın temel bileşeni hâline gelmiştir. Grafik tasarım, animasyon ve üç boyutlu modelleme gibi alanlarda, geometrik hesaplamalar ve koordinat sistemleri aktif olarak kullanılır. Bu da geometriyi sanatın geleceğinde vazgeçilmez bir unsur yapmaktadır.
  
  Sanatta geometri, sadece bir araç değil; aynı zamanda bir dil, bir düzen anlayışı ve bir estetik arayışıdır. Bu nedenle, sanat tarihine baktığımızda geometrik formların sadece görsel değil, düşünsel bir boyutu da olduğunu görürüz.`,
    category: "Geometri",
    date: "2024-04-12"
  },
  {
    id: 5,
    title: "Geometri ve Doğa: Doğadaki Mükemmel Şekiller",
    preview: "Doğada gözlemlenen geometrik yapıların ardındaki bilimsel gerçekler ve örnekler.",
    content: `Geometri, doğanın kendisinde saklı bir düzendir. Çevremizde gördüğümüz birçok doğal oluşum, belirli geometrik şekillerin tekrarından ibarettir. Bu gözlemler, bilim insanlarını doğanın altında yatan matematiksel prensipleri araştırmaya yöneltmiştir.
  
  En bilinen örneklerden biri altıgen yapılarıyla dikkat çeken arı kovanlarıdır. Altıgen, bir yüzey üzerinde boşluk bırakmadan tekrarlanabilen en verimli şekildir. Arılar, bu yapıyı içgüdüsel olarak kullanarak hem alanı en iyi şekilde değerlendirir hem de malzeme (bal mumu) tasarrufu sağlarlar.
  
  Bitkilerde ise Fibonacci dizisi sıklıkla karşımıza çıkar. Ayçiçeği, çam kozalakları ve ananas gibi bitkilerde yaprak, tohum ve yapılar bu sıra doğrultusunda dizilir. Bu dizilim, ışığı en verimli şekilde almak ve büyümeyi optimize etmek amacıyla evrimsel olarak gelişmiştir.
  
  Kristallerin oluşumunda da geometri belirleyici rol oynar. Tuz kristalleri kübik yapılar oluştururken, kuvars gibi mineraller daha karmaşık geometrik simetrilere sahiptir. Bu yapılar atomların belirli düzenlerde birleşmesiyle oluşur. Yani doğada görülen bu estetik yapıların ardında aslında fiziksel ve kimyasal düzen yatmaktadır.
  
  Hayvanların vücut yapılarında da simetri belirgindir. Özellikle bilateral simetri, organizmaların sağ ve sol yarılarının neredeyse aynı olmasını sağlar. Bu durum, hareket ve avlanma gibi işlevlerde avantaj sağlar.
  
  Doğadaki fraktallar da geometriyle ilgilidir. Örneğin, bir eğreltiotu yaprağına bakarsanız, yaprağın tamamının şeklini daha küçük parçalarda da görebilirsiniz. Bu tür tekrar eden desenler, doğanın kendini küçük ölçekte yeniden üretme biçimidir.
  
  Sonuç olarak, geometri sadece insanlar tarafından keşfedilmiş bir bilim değil, doğanın kendi dili gibidir. Doğaya dikkatli baktığımızda, matematiğin ve geometrinin onun en temel yapı taşlarından biri olduğunu görebiliriz.`,
    category: "Geometri",
    date: "2024-04-18"
  },
];