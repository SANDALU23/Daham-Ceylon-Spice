export default function handler(req: any, res: any) {
  const images = [
    {
      id: '1',
      url: 'https://picsum.photos/seed/spice1/800/600',
      title: 'Premium Cinnamon',
      description: 'Hand-picked Ceylon cinnamon sticks from our finest plantations.',
      category: 'Spices'
    },
    {
      id: '2',
      url: 'https://picsum.photos/seed/spice2/800/600',
      title: 'Organic Black Pepper',
      description: 'Sun-dried organic black pepper with intense aroma.',
      category: 'Spices'
    },
    {
      id: '3',
      url: 'https://picsum.photos/seed/spice3/800/600',
      title: 'Pure Turmeric Powder',
      description: 'High-curcumin turmeric powder processed naturally.',
      category: 'Powders'
    },
    {
      id: '4',
      url: 'https://picsum.photos/seed/spice4/800/600',
      title: 'Green Cardamom',
      description: 'Aromatic green cardamom pods harvested at peak maturity.',
      category: 'Spices'
    },
    {
      id: '5',
      url: 'https://rayinfood.com/wp-content/uploads/2022/05/cloves.png',
      title: 'Clove',
      description: 'Raw clove buds are harvested from our cultivation of clove trees and processed by cleaning and drying under strict hygienic conditions. The dried clove buds are then packed into premium quality pouches that ensure freshness and aroma are retained till use.',
      category: 'Spices'
    },
    {
      id: '6',
      url: 'https://picsum.photos/seed/spice6/800/600',
      title: 'Nutmeg',
      description: 'Whole nutmeg seeds with distinctive warm flavor.',
      category: 'Spices'
    }
  ];
  res.status(200).json(images);
}
