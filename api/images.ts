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
    },
    {
      id: '7',
      url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0034-removebg-preview.png',
      title: 'Curry Powder',
      description: 'An aromatic and flavourful blend of spices (cumin, fennel seeds, coriander seeds, cinnamon, green cardamom, cloves and curry leaves) is used in almost all traditional Sri Lankan curries. Our harvest of spices is carefully processed and ground before packaging in high-quality pouches that retain the freshness and flavours of this much-loved spice blend.',
      category: 'Powders'
    },
    {
      id: '8',
      url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0021-removebg-preview.png',
      title: 'Chilli Pieces',
      description: 'Our chilli pieces are a great addition to any dish as a garnish or for added flavour, instantly elevate your meals with Rayin Chilli Pieces. Our chillies are dried and processed under strict hygienic conditions to provide you with a flavourful food product that is safe to eat.',
      category: 'Spices'
    },
    {
      id: '9',
      url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0107-removebg-preview.png',
      title: 'Fenugreek',
      description: 'Fenugreek Seeds are harvested and processed for packaging at our state-of-the-art processing facility. The seeds are packed under hygienic conditions according to international safety guidelines. The packaging ensures the seeds retain freshness and aroma till use.',
      category: 'Spices'
    },
    {
      id: '10',
      url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0115-removebg-preview.png',
      title: 'Fennel',
      description: 'Fennel seeds have an aniseed aroma and taste that is used throughout Sri Lankan cuisine. We harvest our fennel seeds from the plant, and clean and dry them before packing. Our process makes sure flavour and aroma are not lost and that the seeds retain freshness till use.',
      category: 'Spices'
    },
    {
      id: '11',
      url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0051-removebg-preview.png',
      title: 'Mustard',
      description: 'Raw mustard pods are harvested from the Mustard plant and processed under strict food safety guidelines to ensure a high-quality end product that is ready for consumption. All our seeds are processed in our state-of-the-art food processing plant and packed using high-quality materials to ensure the seeds retain their freshness.',
      category: 'Spices'
    }
  ];
  res.status(200).json(images);
}
