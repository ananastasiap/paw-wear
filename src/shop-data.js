const SHOP_DATA = [
  {
    title: 'Hats',
    items: [
      {
        id: 1,
        name: "Fruitilicious Hat",
        imageUrl: "https://images.baxterboo.com/global/images/products/large/strawberry-dog-hatdogo-8970.jpg",
        price: 18,
      },
      {
        id: 2,
        name: "Baseball Hat",
        imageUrl: "https://images.baxterboo.com/global/images/products/large/denver-broncos-pet-baseball-hat-4783.jpg",
        price: 22,
      },
      {
        id: 3,
        name: "Aviator Hat",
        imageUrl: "https://images.baxterboo.com/global/images/products/large/worthy-dog-aviator-dog-hat-tan-plaid-1893.jpg",
        price: 17,
      },
      {
        id: 4,
        name: "Knit Hat",
        imageUrl: "https://images.baxterboo.com/global/images/products/large/san-francisco-49ers-knit-dog-hat-3838.jpg",
        price: 10,
      },
      {
        id: 5,
        name: "Orange Sun Protectant Cap",
        imageUrl: "https://images.baxterboo.com/global/images/products/large/pet-life-sea-spot-sun-uv-protectant-mesh-brimmed-dog-hat-cap-black-4903.JPG",
        price: 12,
      },
      {
        id: 6,
        name: "Colorful Sun Protectant Canopy",
        imageUrl: "https://images.baxterboo.com/global/images/products/large/pet-life-colorfur-uv-protectant-dog-hat-cap-rainbow-6053.jpg",
        price: 12,
      },
    ],
  },
  {
    title: 'Collars and Harness',
    items: [
      {
        id: 7,
        name: 'Bananas Harness',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/fuzzyard-coachella-dog-harness-1388.jpg',
        price: 17,
      },
      {
        id: 8,
        name: 'Step-In Harness',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/gooby-simple-step-in-dog-harness-blue-3356.jpg',
        price: 13,
      },
      {
        id: 9,
        name: 'Green Harness',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/gooby-comfort-x-dual-snap-dog-harness-green-5640.jpg',
        price: 27,
      },
      {
        id: 10,
        name: 'Purple Collar',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/halti-two-toned-dog-collar-black-gray-3401.jpg',
        price: 10,
      },
      {
        id: 11,
        name: 'Pineapple Collar',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/pineapple-parade-adjustable-clip-dog-collar-6519.jpg',
        price: 13,
      },
    ],
  },
  {
    title: 'Shoes',
    items: [
      {
        id: 12,
        name: 'Purple Shoes',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/pet-life-helios-surface-performance-dog-shoes-blue-7286.jpg',
        price: 40,
      },
      {
        id: 13,
        name: 'Black Boots',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/ultra-paws-durable-dog-boots-black-8905.jpg',
        price: 45,
      },
      {
        id: 14,
        name: 'White-Red Sneakers',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/pet-life-air-mesh-running-dog-shoes-sneakers-5073.jpeg',
        price: 30,
      },
      {
        id: 15,
        name: 'High-Ankle Boots',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/pet-life-helios-traverse-high-ankle-dog-boots-blue-5799.JPG',
        price: 40,
      },
      {
        id: 16,
        name: 'Muttsoks Socks',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/muttluks-muttsoks-dog-socks-9575.jpg',
        price: 10,
      },
    ],
  },
  {
    title: 'Outerwear',
    items: [
      {
        id: 17,
        name: 'Ladybugs-Daisies Dress',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/ladybugs-daisies-dog-harness-dress-with-leashdoggie-design-8729.jpg',
        price: 24,
      },
      {
        id: 18,
        name: 'Gray Hoodie',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/basic-dog-hoodie-heather-gray-1.jpg',
        price: 17,
      },
      {
        id: 19,
        name: 'Purple Polo Shirt',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/polo-dog-shirt-ultra-violet-2167.jpg',
        price: 16,
      },
      {
        id: 20,
        name: 'Plaid Sherpa Lined Coat ',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/doggie-design-plaid-sherpa-fleece-lined-dog-harness-coat-yellow-9106.jpg',
        price: 25,
      },
      {
        id: 21,
        name: 'Fleece Coat',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/highline-fleece-dog-coatdoggie-design-two-tone-green-3692.jpg',
        price: 16,
      },
      {
        id: 22,
        name: 'Meh Grey Shirt ',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/meh-dog-cat-shirt-gray-8633.jpg',
        price: 13,
      },
      {
        id: 23,
        name: 'Turtleneck Shirt',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/boo-turtleneck-cat-shirtcatspia-pink-1572.jpg',
        price: 24,
      },
    ],
  },
  {
    title: 'Backpacks',
    items: [
      {
        id: 24,
        name: 'Horse Backpack',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/pet-life-teddy-tails-dual-pocketed-dog-harness-backpack-5172.jpg',
        price: 28,
      },
      {
        id: 25,
        name: 'Duckbill Backpack',
        imageUrl: 'https://images.baxterboo.com/global/images/products/large/pet-life-mooltese-large-pocketed-dog-harness-backpack-7669.jpg',
        price: 28,
      },
      {
        id: 26,
        name: 'Love Backpack',
        imageUrl: 'https://img.ltwebstatic.com/images3_pi/2021/09/22/163230244579e3dc4b921572cab7cc6bbe9d97e939_thumbnail_600x.jpg',
        price: 7,
      },
      {
        id: 27,
        name: 'Rabbit Backpack',
        imageUrl: 'https://img.ltwebstatic.com/images3_pi/2021/03/09/161527085693e0a3cb184d2222f4aad94b110ca994_thumbnail_600x.jpg',
        price: 8,
      },
      {
        id: 28,
        name: 'Zi Chen Backpack',
        imageUrl: 'https://ae04.alicdn.com/kf/Hdbf5672a31ba400f84e5d0a426032941J.jpg',
        price: 7,
      },
      {
        id: 29,
        name: '"OG" GREY BACKPACK',
        imageUrl: 'https://barkindustry.com/cdn/shop/products/dogpacksweb_2000x.jpg?v=1600643750',
        price: 20,
      },
    ],
  },
];

export default SHOP_DATA;
