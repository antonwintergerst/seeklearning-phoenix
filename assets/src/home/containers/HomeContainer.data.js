export const users = [
  {
    id: 1,
    name: 'Matt Giampietro',
    occupation: 'Producer, Unilever',
    perks: [1],
    avatar: '/dist/images/matthew.png',
  },
  {
    id: 2,
    name: 'Molly',
    occupation: 'Head of Product, Apple',
    perks: [2],
    avatar: '/dist/images/molly.png',
  },
  {
    id: 3,
    name: 'Elyse',
    occupation: 'Social Media Manager, Nike',
    perks: [3],
    avatar: '/dist/images/elyse.png',
  },
  {
    id: 4,
    name: 'Elliot',
    occupation: 'Service Advisor, Ford',
    perks: [4, 5, 6],
    avatar: '/dist/images/elliot.jpg',
  },
];

export const perks = [
  {
    id: 1,
    description: 'Gets a for **3 for 2 deal on Classic Ads**',
    discounts: [
      {
        ad_type_id: 1,
        min: 3,
        bonus: 1,
      },
    ],
  },
  {
    id: 2,
    description: 'Gets a discount on **Standout Ads where the price drops to $299.99 per ad**',
    discounts: [
      {
        ad_type_id: 2,
        price: 299.99,
      },
    ],
  },
  {
    id: 3,
    description: 'Gets a discount on **Premium Ads when 4 or more** are purchased. The price drops to **$379.99 per ad**',
  },
  {
    id: 4,
    description: 'Gets a **5 for 4 deal on Classic Ads**',
  },
  {
    id: 5,
    description: 'Gets a discount on **Standout Ads where the price drops to $309.99 per ad**',
  },
  {
    id: 6,
    description: 'Gets a discount on **Premium Ads when 3 or more** are purchased. The price drops to **$389.99 per ad**',
  },
];
export default users;
