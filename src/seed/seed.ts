import bcryptjs from  'bcryptjs';

interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: 'teclado'|'audifono'|'memoria'|'monitor';
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: 'admin'|'user'
}


type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
type ValidTypes = 'teros'|'logitech'|'reddragon'|'halion';

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
      'Teros','Logitech','Reddragon','Halion'
    ],

    products: [
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '005.jpg',
                '005.jpg',
            ],
            inStock: 7,
            price: 200,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "mens_chill_crew_neck_sweatshirt",
            type: 'teros',
            tags: ['sweatshirt'],
            title: "Teclado Mecanico",
            gender: 'teclado'
        },
        {
            description: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
            images: [
              '006.jpg',
              '006.jpg',
            ],
            inStock: 5,
            price: 200,
            sizes: ['XS','S','M','XL','XXL'],
            slug: "men_quilted_shirt_jacket",
            type: 'teros',
            tags: ['jacket'],
            title: "Men's Quilted Shirt Jacket",
            gender: 'teclado'
        },
        
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
            images: [
              '008.jpg',
              '008.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['S','M','L','XL','XXL'],
            slug: "men_raven_lightweight_zip_up_bomber_jacket",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's Raven Lightweight Zip Up Bomber Jacket",
            gender: 'teclado'
        },

        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            images: [
              '009.jpg',
              '009.jpg',
            ],
            inStock: 50,
            price: 45,
            sizes: ['XS','S','M','L'],
            slug: "men_turbine_long_sleeve_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's Turbine Long Sleeve Tee",
            gender: 'teclado'
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            images: [
              '010.jpg',
              '010.jpg',
            ],
            inStock: 50,
            price: 40,
            sizes: ['M','L','XL','XXL'],
            slug: "men_turbine_short_sleeve_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's Turbine Short Sleeve Tee",
            gender: 'teclado'
        },
        {
            description: "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
              '011.jpg',
              '011.jpg',
            ],
            inStock: 0,
            price: 35,
            sizes: ['M','L','XL','XXL'],
            slug: "men_cybertruck_owl_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's Cybertruck Owl Tee",
            gender: 'teclado'
        },
        {
            description: "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            images: [
              '012.jpg',
              '012.jpg',
            ],
            inStock: 15,
            price: 35,
            sizes: ['S','M','L','XL'],
            slug: "men_solar_roof_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's Solar Roof Tee",
            gender: 'teclado'
        },
        {
            description: "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            images: [
              '013.jpg',
              '013.jpg',
            ],
            inStock: 17,
            price: 35,
            sizes: ['XS','S','XL','XXL'],
            slug: "men_let_the_sun_shine_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's Let the Sun Shine Tee",
            gender: 'teclado'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
            images: [
              '014.jpg',
              '014.jpg',
            ],
            inStock: 12,
            price: 35,
            sizes: ['XS','S','M'],
            slug: "men_3d_large_wordmark_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's 3D Large Wordmark Tee",
            gender: 'teclado'
        },
        {
            description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            images: [
              '015.jpg',
              '015.jpg',
            ],
            inStock: 5,
            price: 35,
            sizes: ['XS','S'],
            slug: "men_3d_t_logo_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's 3D T Logo Tee",
            gender: 'teclado'
        },
        {
            description: "Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.",
            images: [
              '016.jpg',
              '016.jpg',
            ],
            inStock: 2,
            price: 35,
            sizes: ['XS','S','M'],
            slug: "men_3d_small_wordmark_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men’s 3D Small Wordmark Tee",
            gender: 'teclado'
        },
        {
            description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            images: [
              '017.jpg',
              '017.jpg',
            ],
            inStock: 82,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_plaid_mode_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's Plaid Mode Tee",
            gender: 'teclado'
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.",
            images: [
              '001.jpg',
              '001.jpg',
            ],
            inStock: 24,
            price: 35,
            sizes: ['XL','XXL'],
            slug: "men_powerwall_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's Powerwall Tee",
            gender: 'audifono'
        },
        {
            description: "Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.",
            images: [
              '002.jpg',
              '002.jpg',
            ],
            inStock: 5,
            price: 30,
            sizes: ['XS','S','XXL'],
            slug: "men_battery_day_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's Battery Day Tee",
            gender: 'audifono'
        },
        {
            description: "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
              '029.jpg',
              '029.jpg',
            ],
            inStock: 150,
            price: 30,
            sizes: ['M','L'],
            slug: "men_cybertruck_bulletproof_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men’s Cybertruck Bulletproof Tee",
            gender: 'audifono'
        },
        {
            description: "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
            images: [
              '030.jpg',
              '030.jpg',
            ],
            inStock: 10,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_haha_yes_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's Haha Yes Tee",
            gender: 'audifono'
        },
        {
            description: "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
            images: [
              '031.jpg',
              '031.jpg',
            ],
            inStock: 34,
            price: 35,
            sizes: ['XS','S','M','L'],
            slug: "men_s3xy_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's S3XY Tee",
            gender: 'audifono'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
            images: [
              '032.jpg',
              '032.jpg',
            ],
            inStock: 15,
            price: 40,
            sizes: ['XL','XXL'],
            slug: "men_3d_wordmark_long_sleeve_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's 3D Wordmark Long Sleeve Tee",
            gender: 'audifono'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
            images: [
              '033.jpg',
              '033.jpg',
            ],
            inStock: 12,
            price: 40,
            sizes: ['XS','XXL'],
            slug: "men_3d_t_logo_long_sleeve_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's 3D T Logo Long Sleeve Tee",
            gender: 'audifono'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
              '034.jpg',
              '034.jpg',
            ],
            inStock: 10,
            price: 115,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_raven_lightweight_hoodie",
            type: 'reddragon',
            tags: ['hoodie'],
            title: "Men's Raven Lightweight Hoodie",
            gender: 'audifono'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
              '035.jpg',
              '035.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "chill_pullover_hoodie",
            type: 'reddragon',
            tags: ['hoodie'],
            title: "Chill Pullover Hoodie",
            gender: 'audifono'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
              '036.jpg',
              '036.jpg',
            ],
            inStock: 100,
            price: 85,
            sizes: ['XS','L','XL','XXL'],
            slug: "men_chill_full_zip_hoodie",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's Chill Full Zip Hoodie",
            gender: 'audifono'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
              '037.jpg',
              '037.jpg',
            ],
            inStock: 7,
            price: 85,
            sizes: ['XS','S','M'],
            slug: "men_chill_quarter_zip_pullover_-_gray",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's Chill Quarter Zip Pullover - Gray",
            gender: 'audifono'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
              '038.jpg',
              '038.jpg',
            ],
            inStock: 15,
            price: 85,
            sizes: ['XS','S','M','L'],
            slug: "men_chill_quarter_zip_pullover_-_white",
            type: 'teros',
            tags: ['shirt'],
            title: "Men's Chill Quarter Zip Pullover - White",
            gender: 'audifono'
        },
        {
            description: "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
            images: [
              '018.jpg',
              '018.jpg',
            ],
            inStock: 15,
            price: 70,
            sizes: ['XS','S','XL','XXL'],
            slug: "3d_large_wordmark_pullover_hoodie",
            type: 'reddragon',
            tags: ['hoodie'],
            title: "3D Large Wordmark Pullover Hoodie",
            gender: 'memoria'
        },
        {
            description: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
            images: [
              '019.jpg',
              '019.jpg',
            ],
            inStock: 13,
            price: 60,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "cybertruck_graffiti_hoodie",
            type: 'reddragon',
            tags: ['hoodie'],
            title: "Cybertruck Graffiti Hoodie",
            gender: 'memoria'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
              '020.jpg',
              '020.jpg',
            ],
            inStock: 11,
            price: 30,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "relaxed_t_logo_hat",
            type: 'halion',
            tags: ['hats'],
            title: "Relaxed T Logo Hat",
            gender: 'memoria'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
              '021.jpg',
              '021.jpg',
            ],
            inStock: 13,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "thermal_cuffed_beanie",
            type: 'halion',
            tags: ['hats'],
            title: "Thermal Cuffed Beanie",
            gender: 'memoria'
        },
        {
            description: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
            images: [
              '022.jpg',
              '022.jpg',
            ],
            inStock: 85,
            price: 225,
            sizes: ['XS','S','M'],
            slug: "women_cropped_puffer_jacket",
            type: 'reddragon',
            tags: ['hoodie'],
            title: "Audifono Red Dragon",
            gender: 'memoria'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
              '023.jpg',
              '023.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','XXL'],
            slug: "women_chill_half_zip_cropped_hoodie",
            type: 'reddragon',
            tags: ['hoodie'],
            title: "Women's Chill Half Zip Cropped Hoodie",
            gender: 'memoria'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            images: [
              '024.jpg',
              '024.jpg',
            ],
            inStock: 9,
            price: 110,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_raven_slouchy_crew_sweatshirt",
            type: 'reddragon',
            tags: ['hoodie'],
            title: "Women's Raven Slouchy Crew Sweatshirt",
            gender: 'memoria'
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
            images: [
              '025.jpg',
              '025.jpg',
            ],
            inStock: 10,
            price: 45,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_turbine_cropped_long_sleeve_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Women's Turbine Cropped Long Sleeve Tee",
            gender: 'memoria'
        },
        {
            description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            images: [
              '026.jpg',
              '026.jpg',
            ],
            inStock: 0,
            price: 40,
            sizes: ['XS','S'],
            slug: "women_turbine_cropped_short_sleeve_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Women's Turbine Cropped Short Sleeve Tee",
            gender: 'memoria'
        },
        {
            description: "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            images: [
              '027.jpg',
              '027.jpg',
            ],
            inStock: 30,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_t_logo_short_sleeve_scoop_neck_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Women's T Logo Short Sleeve Scoop Neck Tee",
            gender: 'memoria'
        },
        {
            description: "Designed for style and comfort, the ultrasoft Women's T Logo Long Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            images: [
              '028.jpg',
              '028.jpg',
            ],
            inStock: 16,
            price: 40,
            sizes: ['XS','S','L','XL','XXL'],
            slug: "women_t_logo_long_sleeve_scoop_neck_tee",
            type: 'teros',
            tags: ['shirt'],
            title: "Women's T Logo Long Sleeve Scoop Neck Tee",
            gender: 'memoria'
        }
    ]
}