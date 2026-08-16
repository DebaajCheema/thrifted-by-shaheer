require("dotenv").config({ path: ".env.local" });
const Redis = require("ioredis");
const { PRODUCTS } = require("../lib/products.js");

const redis = new Redis(process.env.REDIS_URL);

async function seed() {
  console.log("Starting to load products into Redis...");

  for (const product of PRODUCTS) {
    const key = "thrifted:product:" + product.id;
    await redis.set(key, JSON.stringify(product));
    console.log("Saved: " + product.name);
  }

  const allIds = PRODUCTS.map(function (p) { return p.id; });
  await redis.set("thrifted:product-ids", JSON.stringify(allIds));

  console.log("Done! All products loaded into Redis.");
  process.exit(0);
}

seed().catch(function (err) {
  console.error("Error:", err);
  process.exit(1);
});
