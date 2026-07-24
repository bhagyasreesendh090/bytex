import express from "express";
import { createServer } from "http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Robust static assets path resolution
  const prodPublic = path.resolve(__dirname, "public");
  const distPublic = path.resolve(__dirname, "..", "dist", "public");
  const clientPublic = path.resolve(__dirname, "..", "client", "public");

  let staticPath = prodPublic;
  if (fs.existsSync(prodPublic)) {
    staticPath = prodPublic;
  } else if (fs.existsSync(distPublic)) {
    staticPath = distPublic;
  } else if (fs.existsSync(clientPublic)) {
    staticPath = clientPublic;
  }

  app.use(express.static(staticPath));
  if (fs.existsSync(clientPublic) && clientPublic !== staticPath) {
    app.use(express.static(clientPublic));
  }

  // Handle client-side routing - serve index.html for all SPA routes
  app.get("*", (_req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("Application build not found. Please run npm run build.");
    }
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
