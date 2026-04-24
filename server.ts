import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Routes
  app.get("/api/images", (req, res) => {
    // This simulates getting images from a database or storage
    const images = [
      {
        id: '1',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0015-removebg-preview.png',
        title: 'Chilli Powder',
        description: 'Fine vibrant red powder sourced from the central province, sun-dried and cold-ground to preserve essential oils.',
        category: 'Spices'
      },
      {
        id: '2',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0036-removebg-preview.png',
        title: 'Turmeric Powder',
        description: 'Bright golden-yellow powder with high curcumin content, traditionally processed for pure potency.',
        category: 'Spices'
      },
      {
        id: '3',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0034-removebg-preview.png',
        title: 'Curry Powder',
        description: 'An aromatic and flavourful blend of spices is used in almost all traditional Sri Lankan curries.',
        category: 'Powders'
      },
      {
        id: '4',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0027-removebg-preview.png',
        title: 'Roasted Curry Powder',
        description: 'A deeply aromatic blend of roasted spices, perfect for meat and vegetable curries.',
        category: 'Powders'
      },
      {
        id: '5',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/cloves.png',
        title: 'Cloves',
        description: 'Premium quality whole cloves with rich essential oils.',
        category: 'Spices'
      },
      {
        id: '6',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0041-removebg-preview.png',
        title: 'Black Pepper',
        description: 'Sun-dried organic black pepper with intense aroma.',
        category: 'Spices'
      },
      {
        id: '7',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0021-removebg-preview.png',
        title: 'Chilli Pieces',
        description: 'Our chilli pieces are a great addition to any dish as a garnish or for added flavour.',
        category: 'Spices'
      },
      {
        id: '8',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0107-removebg-preview.png',
        title: 'Fenugreek',
        description: 'Fenugreek Seeds are harvested and processed for packaging at our state-of-the-art processing facility.',
        category: 'Spices'
      },
      {
        id: '9',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0115-removebg-preview.png',
        title: 'Fennel',
        description: 'Fennel seeds have an aniseed aroma and taste that is used throughout Sri Lankan cuisine.',
        category: 'Spices'
      },
      {
        id: '10',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0051-removebg-preview.png',
        title: 'Mustard',
        description: 'Raw mustard pods are harvested from the Mustard plant and processed under strict food safety guidelines.',
        category: 'Spices'
      }
    ];
    res.json(images);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
