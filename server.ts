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
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/cloves.png',
        title: 'Premium Cloves',
        description: 'Hand-picked dried flower buds from our plantations, known for their intense aroma and medicinal properties.',
        category: 'Spices'
      },
      {
        id: '2',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0034-removebg-preview.png',
        title: 'Sri Lankan Curry Powder',
        description: 'A traditional blend of roasted and ground spices, the heart of authentic Ceylon cuisine.',
        category: 'Powders'
      },
      {
        id: '3',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0021-removebg-preview.png',
        title: 'Chilli Pieces',
        description: 'High-quality sun-dried chillies crushed to perfection for a bold, spicy kick to your favorite dishes.',
        category: 'Spices'
      },
      {
        id: '4',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0107-removebg-preview.png',
        title: 'Organic Fenugreek',
        description: 'Carefully processed fenugreek seeds with a slightly sweet and nutty flavor profile.',
        category: 'Spices'
      },
      {
        id: '5',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0115-removebg-preview.png',
        title: 'Fennel Seeds',
        description: 'Aromatic fennel seeds harvested at peak maturity to ensure maximum freshness and flavor.',
        category: 'Spices'
      },
      {
        id: '6',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0051-removebg-preview.png',
        title: 'Mustard Seeds',
        description: 'Raw mustard seeds sourced from the finest crops, essential for traditional tempering.',
        category: 'Spices'
      },
      {
        id: '7',
        url: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0041-removebg-preview.png',
        title: 'Organic Black Pepper',
        description: 'Black pepper kernels sun-dried and processed to maintain their natural heat and aroma.',
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
