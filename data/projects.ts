import { MEDIA } from "@/lib/media";
import type { Lang, LocalizedValue } from "@/lib/i18n";

export const projectTypes = [
  "All",
  "Residential",
  "Commercial",
  "Infrastructure",
  "Renovation"
] as const;

export type ProjectCategory = Exclude<(typeof projectTypes)[number], "All">;
export type ProjectStatus = "Completed" | "In Progress";

export const projectTypeLabels: Record<
  ProjectCategory,
  LocalizedValue<string>
> = {
  Residential: {
    tr: "Konut",
    en: "Residential"
  },
  Commercial: {
    tr: "Ticari",
    en: "Commercial"
  },
  Infrastructure: {
    tr: "Altyapı",
    en: "Infrastructure"
  },
  Renovation: {
    tr: "Yenileme",
    en: "Renovation"
  }
};

export type Project = {
  id: number;
  slug: string;
  name: LocalizedValue<string>;
  type: ProjectCategory;
  location: LocalizedValue<string>;
  year: number;
  status: ProjectStatus;
  heroImage: string;
  gallery: string[];
  description: LocalizedValue<string>;
  overview: LocalizedValue<string[]>;
  highlights: LocalizedValue<string[]>;
  specifications: LocalizedValue<{ label: string; value: string }[]>;
  stats: {
    area: LocalizedValue<string>;
    duration: LocalizedValue<string>;
    value: LocalizedValue<string>;
    units: LocalizedValue<string>;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "kyrenia-sky-residences",
    name: {
      tr: "Kyrenia Sky Residences",
      en: "Kyrenia Sky Residences"
    },
    type: "Residential",
    location: {
      tr: "Girne",
      en: "Kyrenia"
    },
    year: 2023,
    status: "Completed",
    heroImage: MEDIA.projects.project1.src,
    gallery: [MEDIA.projects.project1.src, MEDIA.projects.project4.src, MEDIA.projects.project6.src, MEDIA.projects.project2.src],
    description: {
      tr: "Kıyı hattında üst segment yaşam standardını yeniden tanımlayan çok bloklu konut geliştirmesi.",
      en: "A multi-block premium residential development that redefined high-end coastal living."
    },
    overview: {
      tr: [
        "Proje, manzara değeri ile teslim kalitesini aynı premium segmentte birleştirmek üzere kurgulandı.",
        "Capra; yapı kabuğu, ortak alanlar, teknik koordinasyon ve fazlı kullanıcı devrini tek akışta yönetti.",
        "Sonuç, hem satış performansı hem de marka etkisi güçlü bir referans konut varlığı oldu."
      ],
      en: [
        "The project was designed to combine view value and delivery quality within the same premium market segment.",
        "Capra managed shell works, shared amenities, technical coordination, and phased user handover in one flow.",
        "The result became a strong reference residential asset in both market performance and brand perception."
      ]
    },
    highlights: {
      tr: [
        "Fazlı kullanıcı devriyle satış ve teslim senaryosu birlikte yönetildi",
        "Cephe dili, deniz etkisi ve güneş kontrolüne göre optimize edildi",
        "Ortak alan standardı, premium konut segmenti için güçlendirildi"
      ],
      en: [
        "Sales and handover were aligned through a phased occupancy strategy",
        "Facade logic was tuned for solar control and coastal exposure",
        "Shared amenities were upgraded to support a premium residential market position"
      ]
    },
    specifications: {
      tr: [
        { label: "Yapı Sistemi", value: "Betonarme taşıyıcı sistem" },
        { label: "Cephe", value: "Gölgelendirme kontrollü yüksek performanslı dış kabuk" },
        { label: "Ortak Alanlar", value: "Havuz, lounge, wellness alanı" },
        { label: "Teslim Modeli", value: "Fazlı devreye alma ve kontrollü devir" }
      ],
      en: [
        { label: "Structure", value: "Reinforced concrete structural system" },
        { label: "Facade", value: "High-performance envelope with solar-control strategy" },
        { label: "Amenities", value: "Pool, lounge, and wellness spaces" },
        { label: "Delivery Model", value: "Phased commissioning and controlled handover" }
      ]
    },
    stats: {
      area: { tr: "48.000 m²", en: "48,000 sqm" },
      duration: { tr: "28 ay", en: "28 months" },
      value: { tr: "€82M", en: "€82M" },
      units: { tr: "214 bağımsız bölüm", en: "214 residences" }
    }
  },
  {
    id: 2,
    slug: "nicosia-commerce-tower",
    name: { tr: "Nicosia Commerce Tower", en: "Nicosia Commerce Tower" },
    type: "Commercial",
    location: { tr: "Lefkoşa", en: "Nicosia" },
    year: 2022,
    status: "Completed",
    heroImage: MEDIA.projects.project2.src,
    gallery: [MEDIA.projects.project2.src, MEDIA.projects.project5.src, MEDIA.projects.project1.src, MEDIA.projects.project6.src],
    description: {
      tr: "Kurumsal kiracılar ve bölgesel finans oyuncuları için geliştirilen A sınıfı ofis varlığı.",
      en: "A Grade A office asset developed for institutional occupiers and regional finance firms."
    },
    overview: {
      tr: [
        "Projede hedef, pazara hazır ticari stok üretirken kullanıcı esnekliğini korumaktı.",
        "Capra; MEP koordinasyonunu, şehir merkezi lojistiğini ve teslim takvimini eş zamanlı yönetti.",
        "Yapı, bugün başkentte referans niteliğinde bir iş adresi olarak konumlanıyor."
      ],
      en: [
        "The goal was to produce market-ready commercial stock while preserving tenant flexibility.",
        "Capra coordinated MEP systems, city-center logistics, and delivery timing in parallel.",
        "The tower now functions as a reference business address in the capital."
      ]
    },
    highlights: {
      tr: [
        "Esnek kiracı senaryolarına uygun kat kurgusu",
        "Yönetim seviyesi karşılama ve lobi standardı",
        "Enerji ve kullanım verimliliğine odaklı sistem altyapısı"
      ],
      en: [
        "Flexible floor planning for different tenant models",
        "An executive-grade arrival and lobby experience",
        "Systems infrastructure focused on energy and use efficiency"
      ]
    },
    specifications: {
      tr: [
        { label: "Kat Sayısı", value: "22 kat" },
        { label: "Otopark", value: "4 bodrum kat kontrollü otopark" },
        { label: "Bina Sistemleri", value: "Akıllı bina yönetim altyapısı" },
        { label: "Sürdürülebilirlik", value: "Yeşil yapı hedeflerine uyumlu tasarım" }
      ],
      en: [
        { label: "Floor Count", value: "22 floors" },
        { label: "Parking", value: "4 basement levels with controlled access" },
        { label: "Building Systems", value: "Smart building management backbone" },
        { label: "Sustainability", value: "Designed in line with green building targets" }
      ]
    },
    stats: {
      area: { tr: "63.500 m²", en: "63,500 sqm" },
      duration: { tr: "32 ay", en: "32 months" },
      value: { tr: "€110M", en: "€110M" },
      units: { tr: "22 kat", en: "22 floors" }
    }
  },
  {
    id: 3,
    slug: "famagusta-cultural-center",
    name: { tr: "Famagusta Cultural Center", en: "Famagusta Cultural Center" },
    type: "Infrastructure",
    location: { tr: "Gazimağusa", en: "Famagusta" },
    year: 2021,
    status: "Completed",
    heroImage: MEDIA.projects.project3.src,
    gallery: [MEDIA.projects.project3.src, MEDIA.projects.project2.src, MEDIA.projects.project6.src, MEDIA.projects.project1.src],
    description: {
      tr: "Kamusal kullanım, operasyonel süreklilik ve simgesel değer arasında denge kuran kültür yatırımı.",
      en: "A civic cultural investment balancing public use, operational continuity, and symbolic value."
    },
    overview: {
      tr: [
        "Yapı, yıl boyu kullanım ve çok amaçlı programlama mantığıyla planlandı.",
        "Capra; akustik koordinasyon, sirkülasyon kurgusu ve yoğun kullanıma uygun malzeme standardını yönetti.",
        "Sonuç, kamusal etkisi yüksek ve işletme açısından güvenilir bir merkez oldu."
      ],
      en: [
        "The facility was planned around year-round use and multi-purpose programming.",
        "Capra directed acoustic coordination, circulation planning, and high-durability material standards.",
        "The result is a high-impact civic venue with reliable operational performance."
      ]
    },
    highlights: {
      tr: [
        "Kamusal plaza, salon ve yan fonksiyonlar entegre tasarlandı",
        "Çok amaçlı kullanım senaryosuna uygun teknik altyapı kuruldu",
        "Yoğun günlük kullanıma dayanıklı malzeme standardı sağlandı"
      ],
      en: [
        "Public plaza, main hall, and supporting functions were integrated in one scheme",
        "Technical systems were shaped around multi-purpose operation",
        "Material standards were set for intensive daily public use"
      ]
    },
    specifications: {
      tr: [
        { label: "Salon Kapasitesi", value: "1.250 kişi" },
        { label: "Açık Alan", value: "Kamusal plaza ve peyzaj düzeni" },
        { label: "Cephe", value: "Taş ve dayanıklı metal detay kombinasyonu" },
        { label: "Operasyon", value: "Etkinlik sirkülasyonuna uygun arka alan akışı" }
      ],
      en: [
        { label: "Auditorium Capacity", value: "1,250 seats" },
        { label: "Open Realm", value: "Public plaza and landscape works" },
        { label: "Envelope", value: "Stone and durable metal detailing" },
        { label: "Operations", value: "Back-of-house flow suited for event turnover" }
      ]
    },
    stats: {
      area: { tr: "31.200 m²", en: "31,200 sqm" },
      duration: { tr: "26 ay", en: "26 months" },
      value: { tr: "€54M", en: "€54M" },
      units: { tr: "1 ana salon", en: "1 main auditorium" }
    }
  },
  {
    id: 4,
    slug: "bellapais-luxury-villas",
    name: { tr: "Bellapais Luxury Villas", en: "Bellapais Luxury Villas" },
    type: "Residential",
    location: { tr: "Girne", en: "Kyrenia" },
    year: 2023,
    status: "Completed",
    heroImage: MEDIA.projects.project4.src,
    gallery: [MEDIA.projects.project4.src, MEDIA.projects.project1.src, MEDIA.projects.project6.src, MEDIA.projects.project2.src],
    description: {
      tr: "Yamaç yerleşiminde mahremiyet, malzeme kalitesi ve kullanıcı deneyimini dengeleyen villa topluluğu.",
      en: "A hillside villa community balancing privacy, material quality, and premium user experience."
    },
    overview: {
      tr: [
        "Bellapais projesi, düşük yoğunluklu üst segment yaşam standardı hedefiyle geliştirildi.",
        "Capra; bireysel kullanıcı talepleri, dış alan kararları ve yüksek bitiş kalitesini eş zamanlı yönetti.",
        "Proje, bölgesinde seçici konut alıcısı için güçlü bir referans oldu."
      ],
      en: [
        "The Bellapais program was developed for a low-density premium living standard.",
        "Capra coordinated individual owner requirements, external works, and high finish quality at the same time.",
        "It became a strong reference for selective residential buyers in the region."
      ]
    },
    highlights: {
      tr: [
        "Mahremiyet ve görünüm değeri birlikte optimize edildi",
        "Dış alan ve villa standardı bütünlüklü kurgulandı",
        "Kullanıcıya özel yükseltmeler kontrollü biçimde yönetildi"
      ],
      en: [
        "Privacy and view value were optimized together",
        "Landscape and villa standards were designed as one cohesive package",
        "Client-specific upgrades were managed in a controlled manner"
      ]
    },
    specifications: {
      tr: [
        { label: "Ünite Tipi", value: "18 villa" },
        { label: "Öne Çıkan Alanlar", value: "Özel havuz, teras, yaşam hacimleri" },
        { label: "Peyzaj", value: "Düşük bakım ihtiyacına uygun dış alan" },
        { label: "Güvenlik", value: "Kontrollü giriş ve çevre gözetimi" }
      ],
      en: [
        { label: "Unit Mix", value: "18 villas" },
        { label: "Key Features", value: "Private pools, terraces, premium living spaces" },
        { label: "Landscape", value: "Low-maintenance external environment" },
        { label: "Security", value: "Controlled access and perimeter monitoring" }
      ]
    },
    stats: {
      area: { tr: "22.400 m²", en: "22,400 sqm" },
      duration: { tr: "22 ay", en: "22 months" },
      value: { tr: "€36M", en: "€36M" },
      units: { tr: "18 villa", en: "18 villas" }
    }
  },
  {
    id: 5,
    slug: "mediterranean-tech-campus",
    name: { tr: "Mediterranean Tech Campus", en: "Mediterranean Tech Campus" },
    type: "Commercial",
    location: { tr: "Lefkoşa", en: "Nicosia" },
    year: 2025,
    status: "In Progress",
    heroImage: MEDIA.projects.project5.src,
    gallery: [MEDIA.projects.project5.src, MEDIA.projects.project2.src, MEDIA.projects.project6.src, MEDIA.projects.project1.src],
    description: {
      tr: "Ar-Ge ve teknoloji kiracıları için esnek kullanım mantığıyla geliştirilen çok bloklu iş kampüsü.",
      en: "A multi-block business campus designed for research and technology occupiers."
    },
    overview: {
      tr: [
        "Proje, farklı kiracı profillerine uyum sağlayan modüler ticari altyapı üzerine kuruldu.",
        "Capra; fazlı süper yapı, teknik koordinasyon ve kiracıya hazır esneklik kriterlerini yönetiyor.",
        "Tamamlandığında bölgenin yüksek nitelikli iş kampüslerinden biri olacak."
      ],
      en: [
        "The project is structured around modular commercial infrastructure adaptable to different occupier profiles.",
        "Capra is leading phased superstructure delivery, technical coordination, and tenant-ready flexibility.",
        "When complete, it will stand as one of the region's more advanced business campuses."
      ]
    },
    highlights: {
      tr: [
        "Çok bloklu kampüs modeli",
        "Yüksek yoğunluklu kullanıcı senaryosuna hazır altyapı",
        "Yatırım esnekliğini koruyan fazlı teslim stratejisi"
      ],
      en: [
        "A multi-block campus model",
        "Infrastructure ready for high-density occupier demand",
        "A phased delivery strategy that preserves investor flexibility"
      ]
    },
    specifications: {
      tr: [
        { label: "Blok Sayısı", value: "5 bağlantılı blok" },
        { label: "Dijital Altyapı", value: "Yedekli veri ve enerji omurgası" },
        { label: "Ortak Alanlar", value: "Toplantı, yeme-içme, esnek sosyal alanlar" },
        { label: "Teslim Modeli", value: "Çok paketli ve fazlı tamamlanma" }
      ],
      en: [
        { label: "Blocks", value: "5 connected buildings" },
        { label: "Digital Backbone", value: "Redundant data and power infrastructure" },
        { label: "Shared Spaces", value: "Meeting, food, and flexible social spaces" },
        { label: "Delivery Model", value: "Multi-package phased completion" }
      ]
    },
    stats: {
      area: { tr: "74.000 m²", en: "74,000 sqm" },
      duration: { tr: "36 ay", en: "36 months" },
      value: { tr: "€138M", en: "€138M" },
      units: { tr: "5 blok", en: "5 blocks" }
    }
  },
  {
    id: 6,
    slug: "green-horizon-business-park",
    name: { tr: "Green Horizon Business Park", en: "Green Horizon Business Park" },
    type: "Commercial",
    location: { tr: "Lefkoşa", en: "Nicosia" },
    year: 2024,
    status: "In Progress",
    heroImage: MEDIA.projects.project6.src,
    gallery: [MEDIA.projects.project6.src, MEDIA.projects.project5.src, MEDIA.projects.project2.src, MEDIA.projects.project3.src],
    description: {
      tr: "Enerji verimliliği ve esnek ofis kullanımı üzerine kurulu yeni nesil iş parkı.",
      en: "A next-generation business park built around energy efficiency and flexible office use."
    },
    overview: {
      tr: [
        "Green Horizon, çevresel hedeflerin ticari verimle uyumlu kurgulandığı bir ofis platformudur.",
        "Capra; kabuk performansı, güneş enerjisi altyapısı ve kullanıcı dolaşımını birlikte optimize eder.",
        "Bu sayede yapı, işletme giderlerini azaltırken kurumsal kalite algısını korur."
      ],
      en: [
        "Green Horizon is an office platform where environmental targets are aligned with commercial efficiency.",
        "Capra optimizes envelope performance, solar infrastructure, and user circulation together.",
        "That allows the asset to reduce operating cost while protecting corporate-grade quality."
      ]
    },
    highlights: {
      tr: [
        "Pasif tasarım stratejileriyle enerji talebi azaltıldı",
        "Güneş ve dış alan kararları erken fazda entegre edildi",
        "Farklı kiracı profillerine uyumlu modüler ofis yapısı kuruldu"
      ],
      en: [
        "Passive design strategies reduce energy demand",
        "Solar and external-environment decisions were integrated early",
        "A modular office structure supports multiple tenant profiles"
      ]
    },
    specifications: {
      tr: [
        { label: "Enerji Stratejisi", value: "Yüksek performanslı kabuk ve güneş desteği" },
        { label: "Peyzaj", value: "Su kullanımını azaltan dış alan sistemi" },
        { label: "Ulaşım", value: "Elektrikli araç ve alternatif ulaşım hazırlığı" },
        { label: "Hedef", value: "Sürdürülebilirlik kriterleriyle uyumlu teslim" }
      ],
      en: [
        { label: "Energy Strategy", value: "High-performance envelope with solar support" },
        { label: "Landscape", value: "Water-conscious external environment system" },
        { label: "Mobility", value: "EV-ready and alternative mobility support" },
        { label: "Target", value: "Delivery aligned with sustainability criteria" }
      ]
    },
    stats: {
      area: { tr: "52.600 m²", en: "52,600 sqm" },
      duration: { tr: "24 ay", en: "24 months" },
      value: { tr: "€76M", en: "€76M" },
      units: { tr: "8 ofis bloğu", en: "8 office blocks" }
    }
  },
  {
    id: 7,
    slug: "old-harbor-restoration",
    name: { tr: "Old Harbor Restoration", en: "Old Harbor Restoration" },
    type: "Renovation",
    location: { tr: "Girne", en: "Kyrenia" },
    year: 2022,
    status: "Completed",
    heroImage: MEDIA.services.restoration.src,
    gallery: [MEDIA.services.restoration.src, MEDIA.projects.project4.src, MEDIA.about.src, MEDIA.projects.project1.src],
    description: {
      tr: "Tarihi dokuya saygılı müdahaleyle sahil bandındaki referans bir alanı yeniden işlevlendiren restorasyon.",
      en: "A restoration project that reactivated a waterfront reference area through heritage-sensitive intervention."
    },
    overview: {
      tr: [
        "Projede en kritik konu, görünür kamusal alanda müdahale yaparken kimliği korumaktı.",
        "Capra; seçici yıkım, taş onarımı, servis yenilemesi ve etaplamayı kontrollü biçimde yönetti.",
        "Sonuç, hem ticari hem kültürel değer üreten yenilenmiş bir kıyı varlığı oldu."
      ],
      en: [
        "The core challenge was preserving identity while intervening in a highly visible public setting.",
        "Capra managed selective demolition, stone repair, service upgrades, and phasing in a controlled way.",
        "The result is a renewed waterfront asset with both commercial and cultural value."
      ]
    },
    highlights: {
      tr: [
        "Cephe ve tarihi öğeler seçici biçimde korundu",
        "Yeni servis altyapısı görünür dili bozmadan entegre edildi",
        "Kamusal erişim kesintisini azaltan etaplama uygulandı"
      ],
      en: [
        "Facade and heritage elements were selectively preserved",
        "New service infrastructure was integrated without disturbing the visual language",
        "Phasing reduced disruption to public access"
      ]
    },
    specifications: {
      tr: [
        { label: "Müdahale Kapsamı", value: "Cephe, taşıyıcı iyileştirme, kamusal alan" },
        { label: "Malzemeler", value: "Taş, ahşap ve özel metal detay onarımı" },
        { label: "Servisler", value: "Gizli MEP ve uyum güncellemeleri" },
        { label: "Sonuç", value: "Yenilenmiş karma kullanım sahil varlığı" }
      ],
      en: [
        { label: "Scope", value: "Facade, structural upgrades, and public realm" },
        { label: "Materials", value: "Stone, timber, and custom metal restoration" },
        { label: "Services", value: "Concealed MEP and compliance upgrades" },
        { label: "Outcome", value: "A renewed mixed-use waterfront asset" }
      ]
    },
    stats: {
      area: { tr: "11.800 m²", en: "11,800 sqm" },
      duration: { tr: "18 ay", en: "18 months" },
      value: { tr: "€22M", en: "€22M" },
      units: { tr: "4 yenilenmiş blok", en: "4 restored blocks" }
    }
  },
  {
    id: 8,
    slug: "northern-health-campus",
    name: { tr: "Northern Health Campus", en: "Northern Health Campus" },
    type: "Infrastructure",
    location: { tr: "Lefkoşa", en: "Nicosia" },
    year: 2024,
    status: "In Progress",
    heroImage: MEDIA.projects.project6.src,
    gallery: [MEDIA.projects.project6.src, MEDIA.projects.project3.src, MEDIA.projects.project2.src, MEDIA.projects.project5.src],
    description: {
      tr: "Operasyonel süreklilik, hijyen ve teknik güvenilirlik öncelikli sağlık kampüsü.",
      en: "A healthcare campus prioritizing operational continuity, hygiene, and technical reliability."
    },
    overview: {
      tr: [
        "Kampüs; klinik, tanı ve ayaktan bakım işlevlerini tek sistem altında toplar.",
        "Capra; kritik MEP altyapısı, akış ayrımı ve sağlık yapısına özgü devreye alma gerekliliklerini yönetir.",
        "Proje, hasta deneyimini ve operasyon güvenliğini birlikte güçlendirir."
      ],
      en: [
        "The campus brings clinical, diagnostic, and outpatient functions into one coordinated system.",
        "Capra manages critical MEP infrastructure, circulation separation, and healthcare-specific commissioning demands.",
        "The project is designed to strengthen both patient experience and operational security."
      ]
    },
    highlights: {
      tr: [
        "Yedekli teknik altyapı",
        "Hasta, personel ve servis akışının ayrıştırılması",
        "Temizlik ve bakım kolaylığını destekleyen malzeme standardı"
      ],
      en: [
        "Redundant technical infrastructure",
        "Separated patient, staff, and service circulation",
        "Material standards that support cleaning and maintenance efficiency"
      ]
    },
    specifications: {
      tr: [
        { label: "Klinik Kapsam", value: "Tanı, ayaktan bakım ve müdahale alanları" },
        { label: "Sistemler", value: "Kritik güç ve iklimlendirme zonlaması" },
        { label: "Planlama", value: "Ayrıştırılmış sirkülasyon ve acil erişim" },
        { label: "Teslim", value: "Operatör hazırlığıyla etaplı devreye alma" }
      ],
      en: [
        { label: "Clinical Scope", value: "Diagnostics, outpatient, and intervention areas" },
        { label: "Systems", value: "Critical power and HVAC zoning" },
        { label: "Planning", value: "Separated circulation and emergency access" },
        { label: "Delivery", value: "Phased commissioning with operator readiness" }
      ]
    },
    stats: {
      area: { tr: "67.300 m²", en: "67,300 sqm" },
      duration: { tr: "34 ay", en: "34 months" },
      value: { tr: "€124M", en: "€124M" },
      units: { tr: "420 yatak eşdeğeri", en: "420 beds equivalent" }
    }
  },
  {
    id: 9,
    slug: "sunset-ridge-estates",
    name: { tr: "Sunset Ridge Estates", en: "Sunset Ridge Estates" },
    type: "Residential",
    location: { tr: "Esentepe", en: "Esentepe" },
    year: 2021,
    status: "Completed",
    heroImage: MEDIA.projects.project4.src,
    gallery: [MEDIA.projects.project4.src, MEDIA.projects.project1.src, MEDIA.projects.project2.src, MEDIA.projects.project6.src],
    description: {
      tr: "Düşük yoğunluklu kıyı yaşamını ortak sosyal alanlarla destekleyen konut yerleşimi.",
      en: "A low-density residential community combining coastal living with shared amenities."
    },
    overview: {
      tr: [
        "Yerleşim, aile odaklı kullanıcı profili için planlandı.",
        "Capra; yatay altyapı, sosyal alanlar ve konut teslimini tek master plan içinde yürüttü.",
        "Tutarlı kalite dili, projeyi satışta güçlü bir konuma taşıdı."
      ],
      en: [
        "The community was planned around a family-oriented user profile.",
        "Capra delivered horizontal infrastructure, shared amenities, and housing packages within one master plan.",
        "A consistent quality language strengthened the project's market performance."
      ]
    },
    highlights: {
      tr: [
        "Yatay altyapı ve konut teslimi eş zamanlı planlandı",
        "Topluluk odaklı sosyal omurga kurgulandı",
        "Satış fazları kontrollü biçimde ilerletildi"
      ],
      en: [
        "Horizontal infrastructure and housing delivery were planned together",
        "A community-oriented amenity spine was created",
        "Sales phases were advanced in a controlled sequence"
      ]
    },
    specifications: {
      tr: [
        { label: "Konut Tipi", value: "Sıralı ev ve müstakil villa" },
        { label: "Topluluk Alanları", value: "Kulüp, havuz ve yürüyüş alanları" },
        { label: "Altyapı", value: "Yol, servis ve peyzaj düzeni" },
        { label: "Satış Modeli", value: "Aşamalı lansman" }
      ],
      en: [
        { label: "Housing Mix", value: "Townhouses and detached villas" },
        { label: "Community Spaces", value: "Clubhouse, pool, and walking routes" },
        { label: "Infrastructure", value: "Roads, utilities, and landscaping" },
        { label: "Sales Model", value: "Phased release strategy" }
      ]
    },
    stats: {
      area: { tr: "39.900 m²", en: "39,900 sqm" },
      duration: { tr: "21 ay", en: "21 months" },
      value: { tr: "€44M", en: "€44M" },
      units: { tr: "62 konut", en: "62 homes" }
    }
  },
  {
    id: 10,
    slug: "island-logistics-hub",
    name: { tr: "Island Logistics Hub", en: "Island Logistics Hub" },
    type: "Commercial",
    location: { tr: "Gazimağusa", en: "Famagusta" },
    year: 2020,
    status: "Completed",
    heroImage: MEDIA.projects.project3.src,
    gallery: [MEDIA.projects.project3.src, MEDIA.projects.project5.src, MEDIA.projects.project2.src, MEDIA.projects.project6.src],
    description: {
      tr: "Bölgesel dağıtım ve yüksek sirkülasyon ihtiyacı için geliştirilen lojistik platform.",
      en: "A logistics platform developed for regional distribution and high-throughput operations."
    },
    overview: {
      tr: [
        "Yapı, depo ve dağıtım işlevlerini tek operasyon mantığında birleştirir.",
        "Capra; saha hareketi, yapı açıklıkları ve dayanıklılık gereksinimlerini optimize etti.",
        "Sonuç, ticari kullanıcı için güçlü bir endüstriyel altyapı oldu."
      ],
      en: [
        "The asset combines warehousing and distribution under one operational logic.",
        "Capra optimized yard movement, spans, and durability requirements.",
        "The result is a reliable industrial platform for commercial users."
      ]
    },
    highlights: {
      tr: [
        "Yüksek sirkülasyon için optimize saha akışı",
        "Endüstriyel kullanıma uygun dayanıklı yapı kabuğu",
        "Esnek operasyon kurgusu"
      ],
      en: [
        "Yard flow optimized for high turnover",
        "A durable envelope suited to industrial use",
        "An operational structure with flexible use potential"
      ]
    },
    specifications: {
      tr: [
        { label: "Kullanım", value: "Depolama, dağıtım ve hafif montaj" },
        { label: "Sirkülasyon", value: "Ayrı araç akışı ve yükleme planı" },
        { label: "Taşıyıcı Sistem", value: "Geniş açıklıklı endüstriyel sistem" },
        { label: "Destek Alanları", value: "Ofis ve sevkiyat kontrol hacimleri" }
      ],
      en: [
        { label: "Use", value: "Warehousing, distribution, and light assembly" },
        { label: "Circulation", value: "Dedicated vehicle flow and loading plan" },
        { label: "Structure", value: "Long-span industrial structural system" },
        { label: "Support Areas", value: "Office and dispatch control spaces" }
      ]
    },
    stats: {
      area: { tr: "58.400 m²", en: "58,400 sqm" },
      duration: { tr: "19 ay", en: "19 months" },
      value: { tr: "€48M", en: "€48M" },
      units: { tr: "12 lojistik hacim", en: "12 logistics bays" }
    }
  },
  {
    id: 11,
    slug: "capital-civic-forum",
    name: { tr: "Capital Civic Forum", en: "Capital Civic Forum" },
    type: "Infrastructure",
    location: { tr: "Lefkoşa", en: "Nicosia" },
    year: 2025,
    status: "In Progress",
    heroImage: MEDIA.about.src,
    gallery: [MEDIA.about.src, MEDIA.projects.project3.src, MEDIA.projects.project2.src, MEDIA.projects.project6.src],
    description: {
      tr: "Açık kamusal kullanım ile kurumsal güvenlik gereksinimini dengeleyen yeni nesil yönetim kampüsü.",
      en: "A next-generation civic administration campus balancing public openness with institutional security."
    },
    overview: {
      tr: [
        "Proje, kamusal işlevleri daha okunaklı ve erişilebilir bir kampüs düzeninde toplar.",
        "Capra; güvenlik katmanları, paydaş onayları ve uzun ömürlü malzeme standardını koordine eder.",
        "Amaç; kamu erişimini korurken kurumsal performansı güçlendirmektir."
      ],
      en: [
        "The project consolidates public-facing functions into a more legible and accessible campus layout.",
        "Capra coordinates security layers, stakeholder approvals, and long-life material standards.",
        "The aim is to protect public access while strengthening institutional performance."
      ]
    },
    highlights: {
      tr: [
        "Açık plaza ve kontrollü kurum alanları birlikte kurgulandı",
        "Dayanıklılık odaklı kamu standardı uygulandı",
        "Şeffaf onay ve raporlama ritmi kuruldu"
      ],
      en: [
        "Open plazas and controlled institutional zones were planned together",
        "A durability-led civic specification was adopted",
        "Transparent approval and reporting rhythms were established"
      ]
    },
    specifications: {
      tr: [
        { label: "Program", value: "Kamu hizmeti, toplantı ve idari alanlar" },
        { label: "Kamusal Alan", value: "Peyzajlı plaza ve gölgelikli dolaşım" },
        { label: "Güvenlik", value: "Katmanlı erişim kurgusu" },
        { label: "Tasarım Hedefi", value: "Erişilebilir ve uzun ömürlü kamu varlığı" }
      ],
      en: [
        { label: "Program", value: "Public services, meeting, and administration" },
        { label: "Public Realm", value: "Landscaped plazas and shaded circulation" },
        { label: "Security", value: "Layered access strategy" },
        { label: "Design Target", value: "Accessible and long-life civic asset" }
      ]
    },
    stats: {
      area: { tr: "42.700 m²", en: "42,700 sqm" },
      duration: { tr: "30 ay", en: "30 months" },
      value: { tr: "€72M", en: "€72M" },
      units: { tr: "3 bağlantılı blok", en: "3 connected wings" }
    }
  },
  {
    id: 12,
    slug: "cathedral-quarter-renewal",
    name: { tr: "Cathedral Quarter Renewal", en: "Cathedral Quarter Renewal" },
    type: "Renovation",
    location: { tr: "Lefkoşa", en: "Nicosia" },
    year: 2023,
    status: "Completed",
    heroImage: MEDIA.contact.src,
    gallery: [MEDIA.contact.src, MEDIA.services.restoration.src, MEDIA.about.src, MEDIA.projects.project4.src],
    description: {
      tr: "Tarihi kent dokusunda cephe yenileme ve seçici modernizasyonu birleştiren kentsel dönüşüm programı.",
      en: "An urban renewal program combining facade restoration and selective modernization within the historic city core."
    },
    overview: {
      tr: [
        "Çalışma, yaşayan bir kentsel doku içinde kontrollü müdahale gerektiriyordu.",
        "Capra; işletmelerin devamı, kullanıcı erişimi ve koruma standartları arasında denge kurdu.",
        "Program, bölgeye yeniden ticari canlılık ve mekânsal itibar kazandırdı."
      ],
      en: [
        "The work required controlled intervention within an active urban environment.",
        "Capra balanced business continuity, user access, and preservation standards.",
        "The program restored commercial vitality and spatial credibility to the district."
      ]
    },
    highlights: {
      tr: [
        "Cephe yenileme ile sokak algısı güçlendirildi",
        "Yaşayan mahallede kontrollü etaplama uygulandı",
        "Tarihi karakter korunurken güncel kullanım standardı sağlandı"
      ],
      en: [
        "Facade renewal strengthened the street-level urban image",
        "Controlled phasing was maintained within a live neighborhood",
        "Current usability standards were achieved without losing historic character"
      ]
    },
    specifications: {
      tr: [
        { label: "Kapsam", value: "Cephe, altyapı ve mağaza önleri" },
        { label: "Paydaşlar", value: "Mülk sahipleri, kiracılar ve yerel işletmeler" },
        { label: "Uygulama", value: "Korunan erişimle fazlı ilerleme" },
        { label: "Sonuç", value: "Yeniden canlanan tarihi kent parçası" }
      ],
      en: [
        { label: "Scope", value: "Facades, utilities, and retail frontages" },
        { label: "Stakeholders", value: "Owners, tenants, and local businesses" },
        { label: "Execution", value: "Phased progress with protected access" },
        { label: "Outcome", value: "A revitalized historic urban quarter" }
      ]
    },
    stats: {
      area: { tr: "17.600 m²", en: "17,600 sqm" },
      duration: { tr: "16 ay", en: "16 months" },
      value: { tr: "€18M", en: "€18M" },
      units: { tr: "1 kent adası", en: "1 urban block" }
    }
  }
];

export const featuredProjectSlugs = [
  "kyrenia-sky-residences",
  "nicosia-commerce-tower",
  "famagusta-cultural-center",
  "bellapais-luxury-villas"
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getLocalizedProjectTypeLabel(type: ProjectCategory, lang: Lang) {
  return projectTypeLabels[type][lang];
}
