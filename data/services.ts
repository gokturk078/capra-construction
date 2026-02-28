import { MEDIA } from "@/lib/media";
import type { LocalizedValue } from "@/lib/i18n";

export type Service = {
  slug: string;
  title: LocalizedValue<string>;
  icon: "building" | "factory" | "landmark" | "briefcase" | "leaf" | "hammer";
  summary: LocalizedValue<string>;
  description: LocalizedValue<[string, string, string]>;
  process: LocalizedValue<[string, string, string]>;
  exampleProjectSlug: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "residential-development",
    title: {
      tr: "Konut Geliştirme",
      en: "Residential Development"
    },
    icon: "building",
    summary: {
      tr: "Üst segment konut, villa ve çok bloklu yerleşim projelerinde yatırım değerini koruyan teslim modeli.",
      en: "A delivery model for premium housing, villas, and multi-block communities that protects long-term asset value."
    },
    description: {
      tr: [
        "Konut projelerinde mimari kalite kadar satış pozisyonu, devir sonrası algı ve işletme sürdürülebilirliği de kritik kabul edilir.",
        "Capra; arsa potansiyeli, hedef kullanıcı profili ve teslim standardını aynı karar matrisinde ele alır.",
        "Bu yaklaşım, proje sahiplerine hem ticari hem de kullanıcı deneyimi açısından daha güvenilir sonuç verir."
      ],
      en: [
        "In residential work, architectural quality matters, but so do market positioning, post-handover perception, and long-term operating durability.",
        "Capra evaluates land potential, target user profile, and delivery standards within one decision matrix.",
        "That approach gives owners stronger commercial outcomes and a more reliable end-user experience."
      ]
    },
    process: {
      tr: [
        "Arsa, hedef müşteri ve planlama kısıtlarını netleştiririz.",
        "Mimari, mühendislik ve bitiş kalemlerini tek teslim akışında hizalarız.",
        "Teslimi, satış ve kullanıcı devri açısından hazır hale getiririz."
      ],
      en: [
        "We clarify land parameters, buyer profile, and planning constraints.",
        "We align architecture, engineering, and finish packages in one delivery flow.",
        "We complete handover in a state that supports both sales and occupancy."
      ]
    },
    exampleProjectSlug: "bellapais-luxury-villas",
    image: MEDIA.services.residential.src
  },
  {
    slug: "commercial-industrial",
    title: {
      tr: "Ticari ve Endüstriyel Yapılar",
      en: "Commercial & Industrial"
    },
    icon: "factory",
    summary: {
      tr: "Ofis, lojistik ve gelir üreten ticari yapılarda hız, teknik koordinasyon ve operasyonel süreklilik odaklı teslim.",
      en: "Delivery focused on speed, technical coordination, and operational continuity across offices, logistics, and income-generating commercial assets."
    },
    description: {
      tr: [
        "Ticari projelerde her karar kira performansı, kullanıcı akışı ve operasyon maliyeti üzerinde etkili olur.",
        "Capra; tenant esnekliği, bina sistemleri ve inşaat takvimini aynı ticari çerçevede yönetir.",
        "Bu sayede yapı yalnızca tamamlanmış olmaz; pazara çıkmaya hazır hale gelir."
      ],
      en: [
        "In commercial work, every decision affects leasing performance, user flow, and operating cost.",
        "Capra manages tenant flexibility, building systems, and construction timing within the same commercial framework.",
        "The result is not just a completed building, but an asset ready for market use."
      ]
    },
    process: {
      tr: [
        "İşletme hedefleri ve gelir senaryolarını tanımlarız.",
        "Sistem kararlarını, kullanım sürekliliğine göre şekillendiririz.",
        "Yapıyı marka, kullanıcı ve yatırım performansına hazır teslim ederiz."
      ],
      en: [
        "We define operational goals and revenue scenarios.",
        "We shape building-system decisions around continuity of use.",
        "We deliver assets ready for brand, user, and investment performance."
      ]
    },
    exampleProjectSlug: "nicosia-commerce-tower",
    image: MEDIA.services.commercial.src
  },
  {
    slug: "public-infrastructure",
    title: {
      tr: "Kamu ve Altyapı",
      en: "Public Infrastructure"
    },
    icon: "landmark",
    summary: {
      tr: "Kamu etkisi yüksek projelerde güvenlik, şeffaf koordinasyon ve uzun ömür odağında teslim.",
      en: "Delivery centered on safety, transparent coordination, and long-life performance in high-impact public projects."
    },
    description: {
      tr: [
        "Kamu ve altyapı işleri, teknik kalite kadar paydaş yönetimi ve operasyon sürekliliği de gerektirir.",
        "Capra; izin süreçleri, saha fazlaması ve canlı operasyon koşullarını kontrollü biçimde koordine eder.",
        "Amaç; kamu değerini, güvenliği ve uzun vadeli dayanımı birlikte sağlamaktır."
      ],
      en: [
        "Public and infrastructure work demands stakeholder control and operational continuity as much as technical quality.",
        "Capra coordinates approvals, phasing, and live-environment constraints in a disciplined way.",
        "The objective is to deliver public value, safety, and long-term durability together."
      ]
    },
    process: {
      tr: [
        "Yönetişim ve onay akışını baştan kurarız.",
        "Fazlı teslimi dokümantasyon ve kalite güvencesiyle yönetiriz.",
        "Operasyon ekipleri hazırken devreye alma ve kapanışı tamamlarız."
      ],
      en: [
        "We establish governance and approval flow at the outset.",
        "We manage phased delivery through documentation and quality assurance.",
        "We complete commissioning and closeout with operators fully prepared."
      ]
    },
    exampleProjectSlug: "famagusta-cultural-center",
    image: MEDIA.services.infrastructure.src
  },
  {
    slug: "project-management-consulting",
    title: {
      tr: "Proje Yönetimi ve Danışmanlık",
      en: "Project Management & Consulting"
    },
    icon: "briefcase",
    summary: {
      tr: "Yükleniciden önce ihtiyaç duyulan kontrol katmanı: kapsam, maliyet, tedarik ve risk yönetimi.",
      en: "The control layer clients need before they need a contractor: scope, cost, procurement, and risk management."
    },
    description: {
      tr: [
        "Bazı projelerde esas ihtiyaç saha üretiminden önce karar mimarisidir.",
        "Capra; bütçe, takvim, tedarik ve danışman koordinasyonunu tek çerçevede görünür hale getirir.",
        "Bu sayede proje sahipleri daha hızlı ama daha kontrollü karar alabilir."
      ],
      en: [
        "On some projects, the primary need is decision architecture before field production.",
        "Capra makes budget, schedule, procurement, and consultant coordination visible inside one framework.",
        "That allows owners to move faster without giving up control."
      ]
    },
    process: {
      tr: [
        "Risk ve tedarik modelini analiz ederiz.",
        "Yönetişim ve raporlama ritmini kurarız.",
        "Süreci canlı maliyet ve karar desteğiyle yönetiriz."
      ],
      en: [
        "We assess risk exposure and procurement strategy.",
        "We establish governance and reporting cadence.",
        "We manage execution through live cost visibility and decision support."
      ]
    },
    exampleProjectSlug: "mediterranean-tech-campus",
    image: MEDIA.services.consulting.src
  },
  {
    slug: "sustainable-construction",
    title: {
      tr: "Sürdürülebilir Yapı",
      en: "Sustainable Construction"
    },
    icon: "leaf",
    summary: {
      tr: "Enerji, yaşam döngüsü ve ESG beklentilerini teslim modelinin içine alan yapı yaklaşımı.",
      en: "A building approach that embeds energy, lifecycle, and ESG expectations into delivery itself."
    },
    description: {
      tr: [
        "Sürdürülebilirlik, Capra için sonradan eklenen bir başlık değil; tasarım ve yapım kararının parçasıdır.",
        "Kabuk performansı, enerji kullanımı ve malzeme seçimi erken fazda yönlendirilir.",
        "Böylece çevresel hedefler, teslim hızını düşürmeden işletme verimliliğini artırır."
      ],
      en: [
        "For Capra, sustainability is not an add-on; it is part of the design and delivery decision path.",
        "Envelope performance, energy use, and material selection are shaped early.",
        "Environmental targets are therefore achieved without weakening delivery momentum."
      ]
    },
    process: {
      tr: [
        "Çevresel hedefleri ve performans ölçütlerini belirleriz.",
        "Bu kararları yapı ve MEP sistemlerine işleriz.",
        "Devreye alma ve belge setiyle performansı doğrularız."
      ],
      en: [
        "We define environmental objectives and performance targets.",
        "We embed those decisions into structural and MEP systems.",
        "We validate performance through commissioning and documentation."
      ]
    },
    exampleProjectSlug: "green-horizon-business-park",
    image: MEDIA.services.sustainable.src
  },
  {
    slug: "renovation-restoration",
    title: {
      tr: "Yenileme ve Restorasyon",
      en: "Renovation & Restoration"
    },
    icon: "hammer",
    summary: {
      tr: "Mimari karakteri korurken performansı ve ticari kullanılabilirliği yükselten seçici yenileme modeli.",
      en: "Selective renewal that preserves architectural character while improving performance and commercial usability."
    },
    description: {
      tr: [
        "Restorasyon ve yenilemede doğru karar, yalnızca neyin değişeceği değil neyin korunacağıdır.",
        "Capra; mevcut yapı risklerini, müdahale sınırlarını ve yeni performans hedeflerini birlikte değerlendirir.",
        "Sonuç; kimliğini koruyan ama güncel beklentilere cevap veren bir varlıktır."
      ],
      en: [
        "In renovation and restoration, the right decision is not only what to change, but what to preserve.",
        "Capra evaluates existing risk, intervention limits, and new performance targets together.",
        "The result is an asset that retains identity while meeting current expectations."
      ]
    },
    process: {
      tr: [
        "Mevcut durumu ve korunacak unsurları analiz ederiz.",
        "Müdahale sırasını minimum kesintiyle planlarız.",
        "Yapıyı yenilenmiş performans ve korunmuş kimlikle teslim ederiz."
      ],
      en: [
        "We assess current conditions and what should be preserved.",
        "We sequence intervention to minimize disruption.",
        "We deliver a renewed asset with improved performance and retained identity."
      ]
    },
    exampleProjectSlug: "old-harbor-restoration",
    image: MEDIA.services.restoration.src
  }
];
