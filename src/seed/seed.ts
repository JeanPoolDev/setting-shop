import bcryptjs from  'bcryptjs';

interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: 'teclado'|'audifono'|'memoria'|'monitor'|'mouse'|'laptop'|'tarjetaVideo'|'impresora'|'cases'|'fuentePoder'|'memoriaRam'|'procesador'|'placaBase'|'otros';
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: 'admin'|'user'
}

type ValidTypes = 'teros'|'logitech'|'reddragon'|'halion'|'corsair'|'hyperx'|'gigabyte'|
'asus'|'msi'|'intel'|'amd'|'enkore'|'samsung'|'noc'|'kingston'|'tforce'|'teamgroup'|'hp'|
'lenovo'|'epson'|'cannon'|'brother'|'micronics'|'western digital'|'seagate'|
'toshiba'|'cable';

interface SeedData {
    users: SeedUser[];
    categories: string[];
    products: SeedProduct[];
}

export const initialData: SeedData = {

    users: [
      {
        email: 'pool@gmail.com',
        name: 'PoolDev',
        password: bcryptjs.hashSync('123456'),
        role: 'admin'
      },
      {
        email: 'josmel@gmail.com',
        name: 'ChimiNero',
        password: bcryptjs.hashSync('123456'),
        role: 'user'
      },
    ],


    categories: [
      'Teros','Logitech','Reddragon','Halion','corsair','hyperx','gigabyte','asus',
      'msi','intel','amd','enkore','samsung','noc','kingston','tforce','teamgroup','hp',
      'lenovo','epson','cannon','brother','micronics','western digital','seagate',
      'toshiba','cable',
    ],

    products: [
      {
        description: "Teclado mecánico de alta calidad con switches Cherry MX Red para una experiencia de escritura y gaming superior. Incluye retroiluminación RGB personalizable y una construcción robusta para una mayor durabilidad.",
        images: [
          "005.jpg",
          "005.jpg"
        ],
        inStock: 20,
        price: 80,
        slug: "teclado-mecanico-teros",
        type: "teros",
        tags: ["teclado", "mecanico", "RGB"],
        title: "Teclado Mecánico Teros",
        gender: "teclado"
      },     
      {
        description: "El teclado mecánico RGB Teros ofrece switches Blue para una respuesta táctil precisa. Equipado con iluminación RGB y macros programables, es ideal para gamers y profesionales.",
        images: [
          "006.jpg",
          "006.jpg"
        ],
        inStock: 15,
        price: 70,
        slug: "teclado-mecanico-rgb-teros",
        type: "teros",
        tags: ["teclado", "mecanico", "RGB"],
        title: "Teclado Mecánico RGB Teros",
        gender: "teclado"
      },
      {
        description: "El teclado compacto Teros es perfecto para espacios reducidos y ofrece switches mecánicos Brown. Incluye retroiluminación LED y un diseño ergonómico para largas sesiones de uso.",
        images: [
          "008.jpg",
          "008.jpg"
        ],
        inStock: 25,
        price: 60,
        slug: "teclado-compacto-teros",
        type: "teros",
        tags: ["teclado", "compacto", "mecanico"],
        title: "Teclado Compacto Teros",
        gender: "teclado"
      },
      {
        description: "Teclado mecánico inalámbrico Teros con conectividad Bluetooth. Equipado con switches Red y retroiluminación RGB, ofrece libertad y estilo para tu setup de escritorio.",
        images: [
          "009.jpg",
          "009.jpg"
        ],
        inStock: 10,
        price: 90,
        slug: "teclado-inalambrico-teros",
        type: "teros",
        tags: ["teclado", "inalambrico", "mecanico"],
        title: "Teclado Inalámbrico Teros",
        gender: "teclado"
      },      
      {
        description: "El teclado gaming Teros es perfecto para los entusiastas de los videojuegos. Con switches mecánicos y retroiluminación RGB, ofrece una experiencia de juego inmersiva y personalizada.",
        images: [
          "010.jpg",
          "010.jpg"
        ],
        inStock: 30,
        price: 85,
        slug: "teclado-gaming-teros",
        type: "teros",
        tags: ["teclado", "gaming", "mecanico"],
        title: "Teclado Gaming Teros",
        gender: "teclado"
      },
      {
        description: "El teclado profesional Teros combina switches mecánicos de alta calidad con un diseño elegante y funcional. Ideal para entornos de trabajo exigentes y para gamers profesionales.",
        images: [
          "011.jpg",
          "011.jpg"
        ],
        inStock: 12,
        price: 95,
        slug: "teclado-profesional-teros",
        type: "teros",
        tags: ["teclado", "profesional", "mecanico"],
        title: "Teclado Profesional Teros",
        gender: "teclado"
      },
      {
        description: "Audífonos inalámbricos con sonido de alta calidad y diseño ergonómico para un uso cómodo durante todo el día. Con conectividad Bluetooth 5.0 y una batería de larga duración que proporciona hasta 20 horas de reproducción continua.",
        images: [
            '001.jpg',
            '001.jpg'
        ],
        inStock: 24,
        price: 150,
        slug: "audifonos_inalambricos_teros",
        type: 'teros',
        tags: ['audifonos', 'inalambricos'],
        title: "Audífonos Inalámbricos Teros",
        gender: 'audifono'
    },
    {
        description: "Audífonos con cancelación de ruido activa y calidad de sonido superior. Diseño plegable y portátil, ideal para viajes. Incluyen micrófono integrado para llamadas manos libres y control de volumen en el cable.",
        images: [
            '002.jpg',
            '002.jpg'
        ],
        inStock: 30,
        price: 200,
        slug: "audifonos_cancelacion_ruido_teros",
        type: 'teros',
        tags: ['audifonos', 'cancelacion_ruido'],
        title: "Audífonos Cancelación de Ruido Teros",
        gender: 'audifono'
    },
    {
        description: "Audífonos deportivos resistentes al agua y al sudor, perfectos para entrenamientos intensos. Con ganchos de oreja ajustables y puntas de silicona de diferentes tamaños para un ajuste seguro y cómodo.",
        images: [
            '029.jpg',
            '029.jpg'
        ],
        inStock: 45,
        price: 80,
        slug: "audifonos_deportivos_teros",
        type: 'teros',
        tags: ['audifonos', 'deportivos'],
        title: "Audífonos Deportivos Teros",
        gender: 'audifono'
    },
    {
        description: "Audífonos con cable y sonido Hi-Fi para una experiencia auditiva inmersiva. Almohadillas de espuma viscoelástica para máximo confort durante largas sesiones de escucha. Compatible con todos los dispositivos de audio con conector de 3.5mm.",
        images: [
            '030.jpg',
            '030.jpg'
        ],
        inStock: 20,
        price: 60,
        slug: "audifonos_hifi_teros",
        type: 'teros',
        tags: ['audifonos', 'hifi'],
        title: "Audífonos Hi-Fi Teros",
        gender: 'audifono'
    },
    {
        description: "Audífonos over-ear con tecnología de reducción de ruido y conectividad Bluetooth. Incluyen una batería de larga duración con hasta 25 horas de uso continuo y carga rápida USB-C.",
        images: [
            '031.jpg',
            '031.jpg'
        ],
        inStock: 15,
        price: 180,
        slug: "audifonos_over_ear_teros",
        type: 'teros',
        tags: ['audifonos', 'over_ear'],
        title: "Audífonos Over-Ear Teros",
        gender: 'audifono'
    },
    {
        description: "Audífonos gaming con micrófono desmontable y luces LED. Ofrecen un sonido envolvente 7.1 para una experiencia de juego inmersiva. Compatibles con PC, consolas y dispositivos móviles.",
        images: [
            '032.jpg',
            '032.jpg'
        ],
        inStock: 50,
        price: 100,
        slug: "audifonos_gaming_teros",
        type: 'teros',
        tags: ['audifonos', 'gaming'],
        title: "Audífonos Gaming Teros",
        gender: 'audifono'
    },
    {
        description: "Audífonos con diseño retro y sonido de alta fidelidad. Construcción robusta con materiales de alta calidad para una durabilidad excepcional. Incluyen cable desmontable y bolsa de transporte.",
        images: [
            '033.jpg',
            '033.jpg'
        ],
        inStock: 25,
        price: 120,
        slug: "audifonos_retro_teros",
        type: 'teros',
        tags: ['audifonos', 'retro'],
        title: "Audífonos Retro Teros",
        gender: 'audifono'
    },
    {
        description: "Audífonos de estudio con respuesta de frecuencia precisa y diseño cerrado para una excelente aislación del sonido. Ideales para producción musical y monitoreo en estudio.",
        images: [
            '034.jpg',
            '034.jpg'
        ],
        inStock: 35,
        price: 220,
        slug: "audifonos_estudio_teros",
        type: 'reddragon',
        tags: ['audifonos', 'estudio'],
        title: "Audífonos de Estudio Reddragon",
        gender: 'audifono'
    },
        
        {
            description: "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
            images: [
              '40.jpg',
              '40.jpg',
            ],
            inStock: 15,
            price: 70,
            slug: "3d_large_wordmark_pullover_hoodie",
            type: 'reddragon',
            tags: ['hoodie'],
            title: "3D Large Wordmark Pullover Hoodie",
            gender: 'memoria'
        },
        {
            description: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
            images: [
              '41.jpg',
              '41.jpg',
            ],
            inStock: 13,
            price: 60,
            slug: "cybertruck_graffiti_hoodie",
            type: 'reddragon',
            tags: ['hoodie'],
            title: "Cybertruck Graffiti Hoodie",
            gender: 'memoria'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
              '42.jpg',
              '42.jpg',
            ],
            inStock: 11,
            price: 30,
            slug: "relaxed_t_logo_hat",
            type: 'halion',
            tags: ['hats'],
            title: "Relaxed T Logo Hat",
            gender: 'memoria'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
              '43.jpg',
              '43.jpg',
            ],
            inStock: 13,
            price: 35,
            slug: "thermal_cuffed_beanie",
            type: 'halion',
            tags: ['hats'],
            title: "Thermal Cuffed Beanie",
            gender: 'memoria'
        },
        {
            description: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
            images: [
              '44.png',
              '44.png',
            ],
            inStock: 85,
            price: 225,
            slug: "women_cropped_puffer_jacket",
            type: 'reddragon',
            tags: ['hoodie'],
            title: "Audifono Red Dragon",
            gender: 'memoria'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
              '39.jpg',
              '39.jpg',
            ],
            inStock: 10,
            price: 130,
            slug: "women_chill_half_zip_cropped_hoodie",
            type: 'reddragon',
            tags: ['hoodie'],
            title: "Women's Chill Half Zip Cropped Hoodie",
            gender: 'memoria'
        },
        {
          description: "Energiza tus dispositivos. Este cable de poder es perfecto para conectar tus equipos electrónicos a la fuente de energía. Compatible con computadoras, monitores y electrodomésticos, asegurando una conexión segura y fiable.",
          images: [
            '46.jpg',
            '46.jpg',
          ],
          inStock: 10,
          price: 30,
          slug: "Cable_de_Poder",
          type: 'cable',
          tags: ['Cable de Poder'],
          title: "Cable de Poder",
          gender: 'otros'
      },
      {
        description: "Conecta y alimenta con confianza. Nuestro cable trébol, también conocido como cable Cloverleaf, es ideal para laptops, adaptadores de corriente y otros dispositivos electrónicos. Su diseño compacto y duradero asegura una conexión segura y fiable. ¡Perfecto para mantener tus dispositivos siempre cargados y listos para usar!",
        images: [
          '47.jpg',
          '47.jpg',
        ],
        inStock: 10,
        price: 130,
        slug: "Cable_Trébol",
        type: 'cable',
        tags: ['Cable Trébol'],
        title: "Cable Trébol (Cloverleaf)",
        gender: 'otros'
      },
      {
        description: "Conexión confiable. Nuestro cable VGA azul es la solución ideal para conectar tu PC a un monitor. Ofrece una transmisión de video analógica clara y estable, perfecto para dispositivos más antiguos y resoluciones estándar",
        images: [
          '48.jpg',
          '48.jpg',
        ],
        inStock: 10,
        price: 50,
        slug: "Cable_VGA",
        type: 'cable',
        tags: ['Cable VGA'],
        title: "Cable VGA",
        gender: 'otros'
    },
    {
      description: "Conéctate a la velocidad de la luz. Este cable Ethernet proporciona una conexión rápida y estable para tu red doméstica o de oficina. Ideal para conectar computadoras, routers y otros dispositivos, asegurando una navegación sin interrupciones.",
      images: [
        '49.jpg',
        '49.jpg',
      ],
      inStock: 10,
      price: 20,
      slug: "Cable_Ethernet",
      type: 'cable',
      tags: ['Cable Ethernet'],
      title: "Cable Ethernet",
      gender: 'otros'
      },
      {
        description: "Conéctate con claridad. Nuestro cable HDMI de alta calidad te permite disfrutar de video y audio digital en alta definición. Ideal para televisores, monitores y consolas de videojuegos, soportando resoluciones 4K y 3D. ¡Mejora tu experiencia de entretenimiento!",
        images: [
          '50.jpg',
          '50.jpg',
        ],
        inStock: 10,
        price: 20,
        slug: "Cable_HDMI",
        type: 'cable',
        tags: ['Cable HDMI'],
        title: "Cable HDMI",
        gender: 'otros'
      },
      {
        description: "Versatilidad y velocidad en tus manos. Este cable USB-C es perfecto para la transferencia de datos y la carga rápida de tus dispositivos modernos. Compatible con smartphones, laptops y tablets, soportando estándares de alta velocidad como USB 3.1 y Thunderbolt 3.",
        images: [
          '51.jpg',
          '51.jpg',
        ],
        inStock: 10,
        price: 10,
        slug: "Cable_USB-C",
        type: 'cable',
        tags: ['Cable USB-C'],
        title: "Cable USB-C",
        gender: 'otros'
      },
      {
        description: "Potencia y eficiencia en un solo paquete. Esta fuente de poder Micronics de 500W es ideal para sistemas de computadoras de rango medio. Con su diseño compacto y rendimiento fiable, garantiza un suministro de energía constante y seguro.",
        images: [
          '57.jpg',
          '57.jpg',
        ],
        inStock: 15,
        price: 50,
        slug: "fuente-poder-micronics-500w",
        type: "micronics",
        tags: ["fuente de poder", "500W", "micronics"],
        title: "Fuente de Poder Micronics 500W",
        gender: "fuentePoder"
      },
      {
        description: "La fuente de poder Micronics de 600W ofrece una mayor potencia para sistemas exigentes. Ideal para PCs de alto rendimiento, su eficiencia y estabilidad garantizan un funcionamiento óptimo bajo cualquier carga.",
        images: [
          "53.png",
          "53.png"
        ],
        inStock: 10,
        price: 70,
        slug: "fuente-poder-micronics-600w",
        type: "micronics",
        tags: ["fuente de poder", "600W", "micronics"],
        title: "Fuente de Poder Micronics 600W",
        gender: "fuentePoder"
      },
      {
        description: "Para aquellos que necesitan aún más energía, la fuente de poder Micronics de 700W es la elección perfecta. Con una excelente eficiencia energética y protección contra sobrecargas, es ideal para PCs gaming y estaciones de trabajo.",
        images: [
          "54.jpg",
          "54.jpg"
        ],
        inStock: 8,
        price: 90,
        slug: "fuente-poder-micronics-700w",
        type: "micronics",
        tags: ["fuente de poder", "700W", "micronics"],
        title: "Fuente de Poder Micronics 700W",
        gender: "fuentePoder"
      },
      {
        description: "La fuente de poder Micronics de 800W proporciona una potencia excepcional para los sistemas más avanzados. Con una eficiencia superior y una fiabilidad inigualable, es perfecta para configuraciones de alto rendimiento.",
        images: [
          "55.jpg",
          "55.jpg"
        ],
        inStock: 5,
        price: 110,
        slug: "fuente-poder-micronics-800w",
        type: "micronics",
        tags: ["fuente de poder", "800W", "micronics"],
        title: "Fuente de Poder Micronics 800W",
        gender: "fuentePoder"
      },
      {
        description: "Corsair 750W: potencia y calidad inigualable. Esta fuente de poder es perfecta para sistemas gaming y estaciones de trabajo que requieren un rendimiento fiable y eficiente. Con certificación 80 PLUS Bronze, garantiza un uso eficiente de la energía.",
        images: [
          "56.jpeg",
          "56.jpeg"
        ],
        inStock: 7,
        price: 120,
        slug: "fuente-poder-corsair-750w",
        type: "corsair",
        tags: ["fuente de poder", "750W", "corsair"],
        title: "Fuente de Poder Corsair 750W",
        gender: "fuentePoder"
      },
      {
        description: "La fuente de poder Corsair de 850W ofrece una potencia robusta para los sistemas más exigentes. Ideal para configuraciones de múltiples GPUs y overclocking, garantiza un rendimiento estable y eficiente con certificación 80 PLUS Gold.",
        images: [
          "52.jpg",
          "52.jpg"
        ],
        inStock: 3,
        price: 150,
        slug: "fuente-poder-corsair-850w",
        type: "corsair",
        tags: ["fuente de poder", "850W", "corsair"],
        title: "Fuente de Poder Corsair 850W",
        gender: "fuentePoder"
      },
      {
        description: "La impresora Canon PIXMA G6020 es una multifuncional inalámbrica con sistema de tanque de tinta recargable. Ofrece impresión, escaneo y copiado de alta calidad con una capacidad de impresión de hasta 6,000 páginas en negro y 7,700 páginas a color.",
        images: [
          "60.jpg",
          "60.jpg"
        ],
        inStock: 12,
        price: 200,
        slug: "impresora-canon-pixma-g6020",
        type: "cannon",
        tags: ["impresora", "canon", "multifuncional", "tanque de tinta"],
        title: "Impresora Canon PIXMA G6020",
        gender: "impresora"
      },
      {
        description: "La impresora HP LaserJet Pro MFP M227fdw es una multifuncional láser monocromática que ofrece impresión, copiado, escaneo y fax. Con conectividad inalámbrica y una velocidad de impresión de hasta 30 ppm, es ideal para oficinas pequeñas y medianas.",
        images: [
          "62.png",
          "62.png"
        ],
        inStock: 8,
        price: 250,
        slug: "impresora-hp-laserjet-pro-mfp-m227fdw",
        type: "hp",
        tags: ["impresora", "hp", "laser", "multifuncional"],
        title: "Impresora HP LaserJet Pro MFP M227fdw",
        gender: "impresora"
      },
      {
        description: "La impresora Epson EcoTank L3150 es una multifuncional inalámbrica con sistema de tanque de tinta recargable. Ofrece impresión, escaneo y copiado de alta calidad, con una capacidad de impresión de hasta 4,500 páginas en negro y 7,500 páginas a color.",
        images: [
          "58.jpg",
          "58.jpg"
        ],
        inStock: 20,
        price: 180,
        slug: "impresora-epson-ecotank-l3150",
        type: "epson",
        tags: ["impresora", "epson", "multifuncional", "tanque de tinta"],
        title: "Impresora Epson EcoTank L3150",
        gender: "impresora"
      },
      {
        description: "La impresora Epson WorkForce WF-2830 es una multifuncional inalámbrica con impresión, escaneo, copiado y fax. Con una velocidad de impresión de hasta 10 ppm en negro y 4.5 ppm a color, es perfecta para oficinas en casa y pequeñas empresas.",
        images: [
          "59.png",
          "59.png"
        ],
        inStock: 15,
        price: 120,
        slug: "impresora-epson-workforce-wf2830",
        type: "epson",
        tags: ["impresora", "epson", "multifuncional", "workforce"],
        title: "Impresora Epson WorkForce WF-2830",
        gender: "impresora"
      },
      {
        description: "La impresora Epson Expression Home XP-4100 es una multifuncional inalámbrica compacta que ofrece impresión, escaneo y copiado. Con una resolución de impresión de hasta 5760 x 1440 dpi y una velocidad de impresión de 10 ppm en negro, es ideal para uso doméstico.",
        images: [
          "61.jpg",
          "61.jpg"
        ],
        inStock: 10,
        price: 100,
        slug: "impresora-epson-expression-home-xp4100",
        type: "epson",
        tags: ["impresora", "epson", "multifuncional", "expression home"],
        title: "Impresora Epson Expression Home XP-4100",
        gender: "impresora"
      },
      {
        description: "La laptop HP Pavilion 15 cuenta con un procesador Intel Core i5 de 10ma generación, 8GB de RAM y un SSD de 256GB. Su pantalla de 15.6 pulgadas Full HD y la tarjeta gráfica integrada Intel UHD proporcionan una experiencia visual nítida y fluida. Ideal para trabajo y entretenimiento.",
        images: [
          "62.jpg",
          "62.jpg"
        ],
        inStock: 15,
        price: 750,
        slug: "laptop-hp-pavilion-15",
        type: "hp",
        tags: ["laptop", "hp", "pavilion", "i5"],
        title: "Laptop HP Pavilion 15",
        gender: "laptop"
      },
      {
        description: "La laptop HP Envy 13 ofrece un rendimiento excepcional con su procesador Intel Core i7 de 11va generación, 16GB de RAM y un SSD de 512GB. Con una pantalla táctil de 13.3 pulgadas 4K Ultra HD y una tarjeta gráfica NVIDIA GeForce MX450, es perfecta para profesionales y creadores de contenido.",
        images: [
          "63.jpg",
          "63.jpg"
        ],
        inStock: 10,
        price: 1200,
        slug: "laptop-hp-envy-13",
        type: "hp",
        tags: ["laptop", "hp", "envy", "i7"],
        title: "Laptop HP Envy 13",
        gender: "laptop"
      },
      {
        description: "La laptop HP Omen 15 es ideal para gamers, con un procesador AMD Ryzen 7, 16GB de RAM y un SSD de 1TB. Su pantalla de 15.6 pulgadas Full HD y la tarjeta gráfica NVIDIA GeForce GTX 1660 Ti ofrecen un rendimiento gráfico impresionante para juegos y aplicaciones intensivas.",
        images: [
          "64.jpg",
          "64.jpg"
        ],
        inStock: 5,
        price: 1300,
        slug: "laptop-hp-omen-15",
        type: "hp",
        tags: ["laptop", "hp", "omen", "gaming"],
        title: "Laptop HP Omen 15",
        gender: "laptop"
      },
      {
        description: "La laptop Lenovo ThinkPad X1 Carbon es una opción premium para profesionales, con un procesador Intel Core i7 de 10ma generación, 16GB de RAM y un SSD de 1TB. Su pantalla de 14 pulgadas Full HD y su diseño ultradelgado hacen que sea perfecta para el trabajo en movimiento.",
        images: [
          "65.jpg",
          "65.jpg"
        ],
        inStock: 8,
        price: 1500,
        slug: "laptop-lenovo-thinkpad-x1-carbon",
        type: "lenovo",
        tags: ["laptop", "lenovo", "thinkpad", "i7"],
        title: "Laptop Lenovo ThinkPad X1 Carbon",
        gender: "laptop"
      },
      {
        description: "La laptop Lenovo Legion 5 es perfecta para gaming, con un procesador AMD Ryzen 5, 16GB de RAM y un SSD de 512GB. Su pantalla de 15.6 pulgadas Full HD y la tarjeta gráfica NVIDIA GeForce GTX 1660 Ti ofrecen una experiencia de juego fluida y visualmente impresionante.",
        images: [
          "66.jpg",
          "66.jpg"
        ],
        inStock: 7,
        price: 1100,
        slug: "laptop-lenovo-legion-5",
        type: "lenovo",
        tags: ["laptop", "lenovo", "legion", "gaming"],
        title: "Laptop Lenovo Legion 5",
        gender: "laptop"
      },
      {
        description: "La memoria RAM Kingston HyperX Fury de 8GB DDR4 proporciona un rendimiento rápido y estable con una velocidad de 2666MHz. Ideal para mejorar el rendimiento de tu PC en tareas multitarea, juegos y aplicaciones exigentes.",
        images: [
          "67.jpg",
          "67.jpg"
        ],
        inStock: 20,
        price: 40,
        slug: "memoria-ram-kingston-hyperx-fury-8gb-ddr4",
        type: "kingston",
        tags: ["memoria RAM", "kingston", "DDR4", "8GB"],
        title: "Memoria RAM Kingston HyperX Fury 8GB DDR4",
        gender: "memoriaRam"
      },
      {
        description: "La memoria RAM Kingston HyperX Fury de 16GB DDR4 ofrece un alto rendimiento con una velocidad de 3200MHz. Perfecta para gamers y profesionales que necesitan una capacidad de memoria elevada para ejecutar múltiples aplicaciones simultáneamente.",
        images: [
          "68.jpg",
          "68.jpg"
        ],
        inStock: 15,
        price: 80,
        slug: "memoria-ram-kingston-hyperx-fury-16gb-ddr4",
        type: "kingston",
        tags: ["memoria RAM", "kingston", "DDR4", "16GB"],
        title: "Memoria RAM Kingston HyperX Fury 16GB DDR4",
        gender: "memoriaRam"
      },
      {
        description: "La memoria RAM Kingston ValueRAM de 4GB DDR4 es una opción económica para mejorar el rendimiento de tu computadora. Con una velocidad de 2400MHz, es ideal para tareas básicas y aumentar la capacidad de respuesta del sistema.",
        images: [
          "69.jpg",
          "69.jpg"
        ],       inStock: 30,
        price: 25,
        slug: "memoria-ram-kingston-valueram-4gb-ddr4",
        type: "kingston",
        tags: ["memoria RAM", "kingston", "DDR4", "4GB"],
        title: "Memoria RAM Kingston ValueRAM 4GB DDR4",
        gender: "memoriaRam"
      },
      {
        description: "La memoria RAM Kingston HyperX Predator de 8GB DDR4 proporciona un rendimiento extremo con una velocidad de 3600MHz. Diseñada para gamers y entusiastas del hardware que buscan maximizar el rendimiento de su sistema.",
        images: [
          "70.jpg",
          "70.jpg"
        ],
        inStock: 10,
        price: 70,
        slug: "memoria-ram-kingston-hyperx-predator-8gb-ddr4",
        type: "kingston",
        tags: ["memoria RAM", "kingston", "DDR4", "8GB"],
        title: "Memoria RAM Kingston HyperX Predator 8GB DDR4",
        gender: "memoriaRam"
      },
      {
        description: "La memoria RAM Kingston Fury Beast de 16GB DDR4 ofrece un alto rendimiento con una velocidad de 3000MHz. Perfecta para gamers y profesionales que necesitan una capacidad de memoria elevada para ejecutar múltiples aplicaciones simultáneamente.",
        images: [
          "71.jpg",
          "71.jpg"
        ],
        inStock: 12,
        price: 85,
        slug: "memoria-ram-kingston-fury-beast-16gb-ddr4",
        type: "kingston",
        tags: ["memoria RAM", "kingston", "DDR4", "16GB"],
        title: "Memoria RAM Kingston Fury Beast 16GB DDR4",
        gender: "memoriaRam"
      },
      {
        description: "La memoria RAM T-Force Vulcan Z de 8GB DDR4 proporciona un rendimiento confiable y eficiente con una velocidad de 3200MHz. Diseñada para gamers y usuarios de PC que buscan una memoria de alta calidad para sus sistemas.",
        images: [
          "72.jpg",
          "72.jpg"
        ],
        inStock: 18,
        price: 45,
        slug: "memoria-ram-t-force-vulcan-z-8gb-ddr4",
        type: "tforce",
        tags: ["memoria RAM", "t-force", "DDR4", "8GB"],
        title: "Memoria RAM T-Force Vulcan Z 8GB DDR4",
        gender: "memoriaRam"
      },
      {
        description: "El monitor Samsung Odyssey G5 de 27 pulgadas ofrece una experiencia inmersiva con su pantalla curva y resolución QHD (2560x1440). Con una tasa de refresco de 144Hz y un tiempo de respuesta de 1ms, es ideal para gaming y contenido multimedia.",
        images: [
          "73.jpg",
          "73.jpg"
        ],
        inStock: 20,
        price: 300,
        slug: "monitor-samsung-odyssey-g5-27",
        type: "samsung",
        tags: ["monitor", "samsung", "odyssey", "27 pulgadas", "QHD", "gaming"],
        title: "Monitor Samsung Odyssey G5 27\"",
        gender: "monitor"
      },
      {
        description: "El monitor Samsung T55 de 32 pulgadas cuenta con una pantalla curva Full HD (1920x1080) y un diseño elegante. Con una tasa de refresco de 75Hz y tecnología FreeSync, es perfecto para trabajo y entretenimiento.",
        images: [
          "76.jpg",
          "76.jpg"
        ],
        inStock: 15,
        price: 250,
        slug: "monitor-samsung-t55-32-curvo",
        type: "samsung",
        tags: ["monitor", "samsung", "32 pulgadas", "curvo", "Full HD"],
        title: "Monitor Samsung T55 32\" Curvo",
        gender: "monitor"
      },
      {
        description: "El monitor Samsung S24R350 de 24 pulgadas ofrece una resolución Full HD (1920x1080) con tecnología IPS para ángulos de visión amplios y colores precisos. Con un diseño de bisel delgado y soporte para FreeSync, es ideal para uso diario y juegos ligeros.",
        images: [
          "78.jpg",
          "78.jpg"
        ],
        inStock: 25,
        price: 180,
        slug: "monitor-samsung-s24r350-24",
        type: "samsung",
        tags: ["monitor", "samsung", "24 pulgadas", "Full HD", "IPS"],
        title: "Monitor Samsung S24R350 24\"",
        gender: "monitor"
      },
      {
        description: "El monitor Teros TE-3209 de 32 pulgadas ofrece una resolución Full HD (1920x1080) con una pantalla LED brillante. Con múltiples puertos de conexión y un diseño elegante, es ideal para oficinas y entretenimiento en el hogar.",
        images: [
          "74.jpg",
          "74.jpg"
        ],
        inStock: 10,
        price: 220,
        slug: "monitor-teros-te3209-32",
        type: "teros",
        tags: ["monitor", "teros", "32 pulgadas", "Full HD"],
        title: "Monitor Teros TE-3209 32\"",
        gender: "monitor"
      },
      {
        description: "El monitor NOC X24 de 24 pulgadas ofrece una resolución Full HD (1920x1080) con tecnología IPS para colores vibrantes y ángulos de visión amplios. Con una tasa de refresco de 75Hz y un diseño de bisel delgado, es perfecto para uso diario y tareas creativas.",
        images: [
          "75.jpg",
          "75.jpg"
        ],
        inStock: 18,
        price: 160,
        slug: "monitor-noc-x24-24",
        type: "noc",
        tags: ["monitor", "noc", "24 pulgadas", "Full HD", "IPS"],
        title: "Monitor NOC X24 24\"",
        gender: "monitor"
      },
      {
        description: "El monitor MSI Optix G241 de 24 pulgadas ofrece una experiencia de juego fluida con su resolución Full HD (1920x1080), tasa de refresco de 144Hz y tiempo de respuesta de 1ms. Equipado con tecnología FreeSync y un panel IPS, proporciona colores precisos y ángulos de visión amplios.",
        images: [
          "77.png",
          "77.png"
        ],
        inStock: 12,
        price: 200,
        slug: "monitor-msi-optix-g241-24",
        type: "msi",
        tags: ["monitor", "msi", "24 pulgadas", "Full HD", "gaming", "144Hz"],
        title: "Monitor MSI Optix G241 24\"",
        gender: "monitor"
      },
      {
        description: "La placa base Gigabyte Z490 AORUS Elite está diseñada para soportar los procesadores Intel de 10ma generación. Ofrece compatibilidad con memoria DDR4 hasta 128GB, puertos PCIe 4.0, y conectividad avanzada con USB 3.2 y Ethernet de 2.5Gbps. Ideal para gamers y entusiastas del hardware.",
        images: [
          "80.png",
          "80.png"
        ],
        inStock: 20,
        price: 200,
        slug: "placa-base-gigabyte-z490-aorus-elite",
        type: "gigabyte",
        tags: ["placa base", "gigabyte", "Z490", "AORUS", "Intel"],
        title: "Placa Base Gigabyte Z490 AORUS Elite",
        gender: "placaBase"
      },
      {
        description: "La placa base Gigabyte B450M DS3H soporta procesadores AMD Ryzen de 1ra, 2da y 3ra generación. Ofrece compatibilidad con memoria DDR4 hasta 64GB, puertos PCIe 3.0, y conectividad avanzada con USB 3.1 y HDMI. Perfecta para sistemas de gama media.",
        images: [
          "82.jpg",
          "82.jpg"
        ],
        inStock: 30,
        price: 90,
        slug: "placa-base-gigabyte-b450m-ds3h",
        type: "gigabyte",
        tags: ["placa base", "gigabyte", "B450", "AMD"],
        title: "Placa Base Gigabyte B450M DS3H",
        gender: "placaBase"
      },
      {
        description: "La placa base Gigabyte X570 AORUS Master está diseñada para los procesadores AMD Ryzen de 3ra generación. Soporta memoria DDR4 hasta 128GB, ofrece puertos PCIe 4.0, y cuenta con conectividad avanzada incluyendo WiFi 6, USB 3.2 y Ethernet de 2.5Gbps.",
        images: [
          "83.jpg",
          "83.jpg"
        ],
        inStock: 10,
        price: 350,
        slug: "placa-base-gigabyte-x570-aorus-master",
        type: "gigabyte",
        tags: ["placa base", "gigabyte", "X570", "AORUS", "AMD"],
        title: "Placa Base Gigabyte X570 AORUS Master",
        gender: "placaBase"
      },
      {
        description: "La placa base MSI B550 Tomahawk es compatible con procesadores AMD Ryzen de 3ra generación. Ofrece compatibilidad con memoria DDR4 hasta 128GB, puertos PCIe 4.0, y conectividad avanzada con USB 3.2, HDMI y Ethernet de 2.5Gbps. Ideal para sistemas de gama alta.",
        images: [
          "79.jpg",
          "79.jpg"
        ],
        inStock: 15,
        price: 180,
        slug: "placa-base-msi-b550-tomahawk",
        type: "msi",
        tags: ["placa base", "msi", "B550", "AMD"],
        title: "Placa Base MSI B550 Tomahawk",
        gender: "placaBase"
      },
      {
        description: "La placa base MSI MPG Z490 Gaming Edge WiFi está diseñada para procesadores Intel de 10ma generación. Soporta memoria DDR4 hasta 128GB, ofrece puertos PCIe 4.0, y cuenta con conectividad avanzada incluyendo WiFi 6, USB 3.2 y Ethernet de 2.5Gbps.",
        images: [
          "84.jpg",
          "84.jpg"
        ],
        inStock: 12,
        price: 220,
        slug: "placa-base-msi-mpg-z490-gaming-edge-wifi",
        type: "msi",
        tags: ["placa base", "msi", "Z490", "Intel"],
        title: "Placa Base MSI MPG Z490 Gaming Edge WiFi",
        gender: "placaBase"
      },
      {
        description: "La placa base ASUS ROG Strix B550-F Gaming soporta procesadores AMD Ryzen de 3ra generación. Ofrece compatibilidad con memoria DDR4 hasta 128GB, puertos PCIe 4.0, y conectividad avanzada con USB 3.2, HDMI y Ethernet de 2.5Gbps. Perfecta para gamers y entusiastas del hardware.",
        images: [
          "81.jpg",
          "81.jpg"
        ],
        inStock: 18,
        price: 200,
        slug: "placa-base-asus-rog-strix-b550-f-gaming",
        type: "asus",
        tags: ["placa base", "asus", "B550", "AMD", "ROG"],
        title: "Placa Base ASUS ROG Strix B550-F Gaming",
        gender: "placaBase"
      },
      {
        description: "El procesador Intel Core i9-10900K de 10ma generación ofrece 10 núcleos y 20 hilos, con una velocidad base de 3.7 GHz y Turbo Boost de hasta 5.3 GHz. Soporta memoria DDR4 y cuenta con gráficos integrados Intel UHD 630, ideal para tareas intensivas y gaming.",
        images: [
          "85.jpg",
          "85.jpg"
        ],
        inStock: 15,
        price: 500,
        slug: "procesador-intel-core-i9-10900k",
        type: "intel",
        tags: ["procesador", "intel", "i9", "10ma generación"],
        title: "Procesador Intel Core i9-10900K",
        gender: "procesador"
      },
      {
        description: "El procesador Intel Core i7-10700F de 10ma generación cuenta con 8 núcleos y 16 hilos, con una velocidad base de 2.9 GHz y Turbo Boost de hasta 4.8 GHz. No tiene gráficos integrados, lo que lo hace perfecto para sistemas con tarjetas gráficas dedicadas.",
        images: [
          "88.png",
          "88.png"
        ],
        inStock: 20,
        price: 350,
        slug: "procesador-intel-core-i7-10700f",
        type: "intel",
        tags: ["procesador", "intel", "i7", "10ma generación"],
        title: "Procesador Intel Core i7-10700F",
        gender: "procesador"
      },
      {
        description: "El procesador Intel Core i5-10600K de 10ma generación ofrece 6 núcleos y 12 hilos, con una velocidad base de 4.1 GHz y Turbo Boost de hasta 4.8 GHz. Soporta memoria DDR4 y cuenta con gráficos integrados Intel UHD 630, ideal para gaming y uso cotidiano.",
        images: [
          "89.jpg",
          "89.jpg"
        ],
        inStock: 25,
        price: 250,
        slug: "procesador-intel-core-i5-10600k",
        type: "intel",
        tags: ["procesador", "intel", "i5", "10ma generación"],
        title: "Procesador Intel Core i5-10600K",
        gender: "procesador"
      },
      {
        description: "El procesador AMD Ryzen 9 5900X de la serie 5000 ofrece 12 núcleos y 24 hilos, con una velocidad base de 3.7 GHz y Boost de hasta 4.8 GHz. Soporta memoria DDR4 y cuenta con la arquitectura Zen 3, proporcionando un rendimiento superior para gaming y productividad.",
        images: [
          "86.jpg",
          "86.jpg"
        ],
        inStock: 10,
        price: 550,
        slug: "procesador-amd-ryzen-9-5900x",
        type: "amd",
        tags: ["procesador", "amd", "ryzen", "9", "serie 5000"],
        title: "Procesador AMD Ryzen 9 5900X",
        gender: "procesador"
      },
      {
        description: "El procesador AMD Ryzen 7 5800X de la serie 5000 cuenta con 8 núcleos y 16 hilos, con una velocidad base de 3.8 GHz y Boost de hasta 4.7 GHz. Soporta memoria DDR4 y está basado en la arquitectura Zen 3, ideal para gaming y aplicaciones multitarea.",
        images: [
          "87.jpg",
          "87.jpg"
        ],
        inStock: 18,
        price: 450,
        slug: "procesador-amd-ryzen-7-5800x",
        type: "amd",
        tags: ["procesador", "amd", "ryzen", "7", "serie 5000"],
        title: "Procesador AMD Ryzen 7 5800X",
        gender: "procesador"
      },
      {
        description: "El procesador AMD Ryzen 5 5600X de la serie 5000 ofrece 6 núcleos y 12 hilos, con una velocidad base de 3.7 GHz y Boost de hasta 4.6 GHz. Soporta memoria DDR4 y está basado en la arquitectura Zen 3, proporcionando un excelente rendimiento para gaming y uso diario.",
        images: [
          "90.jpg",
          "90.jpg"
        ],
        inStock: 22,
        price: 300,
        slug: "procesador-amd-ryzen-5-5600x",
        type: "amd",
        tags: ["procesador", "amd", "ryzen", "5", "serie 5000"],
        title: "Procesador AMD Ryzen 5 5600X",
        gender: "procesador"
      },
      {
        description: "La tarjeta de video Gigabyte GeForce RTX 3080 Gaming OC ofrece un rendimiento excepcional con 10GB de memoria GDDR6X. Con su arquitectura NVIDIA Ampere, soporta Ray Tracing y DLSS, proporcionando gráficos realistas y altos FPS en juegos modernos.",
        images: [
          "91.jpg",
          "91.jpg"
        ],
        inStock: 15,
        price: 1200,
        slug: "tarjeta-video-gigabyte-geforce-rtx-3080-gaming-oc",
        type: "gigabyte",
        tags: ["tarjeta de video", "gigabyte", "RTX 3080", "NVIDIA"],
        title: "Tarjeta de Video Gigabyte GeForce RTX 3080 Gaming OC",
        gender: "tarjetaVideo"
      },
      {
        description: "La tarjeta de video Gigabyte Radeon RX 6800 XT Gaming OC ofrece 16GB de memoria GDDR6 y está basada en la arquitectura RDNA 2 de AMD. Soporta Ray Tracing y tiene un rendimiento superior en juegos AAA, ideal para gamers exigentes.",
        images: [
          "92.jpg",
          "92.jpg"
        ],
        inStock: 10,
        price: 900,
        slug: "tarjeta-video-gigabyte-radeon-rx-6800-xt-gaming-oc",
        type: "gigabyte",
        tags: ["tarjeta de video", "gigabyte", "RX 6800 XT", "AMD"],
        title: "Tarjeta de Video Gigabyte Radeon RX 6800 XT Gaming OC",
        gender: "tarjetaVideo"
      },
      {
        description: "La tarjeta de video Gigabyte GeForce RTX 3070 Vision OC ofrece 8GB de memoria GDDR6 y está diseñada con un enfoque en la creatividad y el diseño gráfico. Soporta Ray Tracing y DLSS, proporcionando un equilibrio perfecto entre rendimiento y estética.",
        images: [
          "93.jpg",
          "93.jpg"
        ],
        inStock: 20,
        price: 700,
        slug: "tarjeta-video-gigabyte-geforce-rtx-3070-vision-oc",
        type: "gigabyte",
        tags: ["tarjeta de video", "gigabyte", "RTX 3070", "NVIDIA"],
        title: "Tarjeta de Video Gigabyte GeForce RTX 3070 Vision OC",
        gender: "tarjetaVideo"
      },
      {
        description: "La tarjeta de video Gigabyte GeForce RTX 3060 Ti Gaming OC cuenta con 8GB de memoria GDDR6 y está diseñada para ofrecer un excelente rendimiento en juegos a 1080p y 1440p. Con soporte para Ray Tracing y DLSS, proporciona gráficos impresionantes y alta eficiencia energética.",
        images: [
          "94.jpg",
          "94.jpg"
        ],
        inStock: 25,
        price: 600,
        slug: "tarjeta-video-gigabyte-geforce-rtx-3060-ti-gaming-oc",
        type: "gigabyte",
        tags: ["tarjeta de video", "gigabyte", "RTX 3060 Ti", "NVIDIA"],
        title: "Tarjeta de Video Gigabyte GeForce RTX 3060 Ti Gaming OC",
        gender: "tarjetaVideo"
      },
      {
        description: "La tarjeta de video Gigabyte Radeon RX 6700 XT Gaming OC ofrece 12GB de memoria GDDR6 y está basada en la arquitectura RDNA 2 de AMD. Ideal para gaming en 1440p, soporta Ray Tracing y proporciona un excelente equilibrio entre rendimiento y precio.",
        images: [
          "95.jpg",
          "95.jpg"
        ],
        inStock: 18,
        price: 500,
        slug: "tarjeta-video-gigabyte-radeon-rx-6700-xt-gaming-oc",
        type: "gigabyte",
        tags: ["tarjeta de video", "gigabyte", "RX 6700 XT", "AMD"],
        title: "Tarjeta de Video Gigabyte Radeon RX 6700 XT Gaming OC",
        gender: "tarjetaVideo"
      },
      {
        description: "El Logitech MX Master 3 es un ratón avanzado diseñado para profesionales. Ofrece desplazamiento electromagnético MagSpeed, diseño ergonómico y múltiples botones personalizables. Compatible con Windows, macOS y Linux.",
        images: [
            '018.jpg',
            '018.jpg'
        ],
        inStock: 15,
        price: 99,
        slug: "logitech_mx_master_3",
        type: 'logitech',
        tags: ['ratón', 'ergonómico', 'profesional'],
        title: "Logitech MX Master 3",
        gender: 'mouse'
    },
    {
        description: "El Logitech G502 Hero es un ratón gaming con sensor HERO 25K, 11 botones programables y peso ajustable. Perfecto para gamers que buscan precisión y personalización en su experiencia de juego.",
        images: [
            '019.jpg',
            '019.jpg'
        ],
        inStock: 20,
        price: 79,
        slug: "logitech_g502_hero",
        type: 'logitech',
        tags: ['ratón', 'gaming', 'sensor HERO'],
        title: "Logitech G502 Hero",
        gender: 'mouse'
    },
    {
        description: "El Logitech M720 Triathlon es un ratón inalámbrico multi-dispositivo que ofrece conectividad a través de Bluetooth y USB. Su batería dura hasta 24 meses y permite cambiar fácilmente entre tres dispositivos.",
        images: [
            '020.jpg',
            '020.jpg'
        ],
        inStock: 25,
        price: 49,
        slug: "logitech_m720_triathlon",
        type: 'logitech',
        tags: ['ratón', 'multi-dispositivo', 'inalámbrico'],
        title: "Logitech M720 Triathlon",
        gender: 'mouse'
    },
    {
        description: "El Logitech Pebble M350 es un ratón inalámbrico compacto y silencioso, ideal para uso en oficina y viajes. Ofrece conectividad dual a través de Bluetooth y receptor USB.",
        images: [
            '021.jpg',
            '021.jpg'
        ],
        inStock: 30,
        price: 29,
        slug: "logitech_pebble_m350",
        type: 'logitech',
        tags: ['ratón', 'compacto', 'silencioso'],
        title: "Logitech Pebble M350",
        gender: 'mouse'
    },
    {
        description: "El Logitech MX Anywhere 2S es un ratón portátil con seguimiento en cualquier superficie, incluso vidrio. Ofrece conectividad a través de Bluetooth y receptor USB, y permite cambiar entre tres dispositivos.",
        images: [
            '022.jpg',
            '022.jpg'
        ],
        inStock: 18,
        price: 69,
        slug: "logitech_mx_anywhere_2s",
        type: 'logitech',
        tags: ['ratón', 'portátil', 'multi-dispositivo'],
        title: "Logitech MX Anywhere 2S",
        gender: 'mouse'
    },
    {
        description: "El Teros T8801 es un ratón gaming económico con sensor óptico de alta precisión, iluminación RGB y diseño ergonómico. Ideal para gamers que buscan calidad a un precio accesible.",
        images: [
            '023.jpg',
            '023.jpg'
        ],
        inStock: 50,
        price: 25,
        slug: "teros_t8801",
        type: 'teros',
        tags: ['ratón', 'gaming', 'RGB'],
        title: "Teros T8801",
        gender: 'mouse'
    }
  
    ]
}