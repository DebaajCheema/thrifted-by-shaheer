export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import Redis from "ioredis";

let redis;
function getRedis() {
  if (!redis) {
    redis = new Redis(process.env.REDIS_URL);
  }
  return redis;
}

export async function GET() {
  try {
    const client = getRedis();
    const idsJson = await client.get("thrifted:product-ids");
    const ids = idsJson ? JSON.parse(idsJson) : [];

    const products = [];
    for (const id of ids) {
      const productJson = await client.get(`thrifted:product:${id}`);
      if (productJson) {
        products.push(JSON.parse(productJson));
      }
    }

    return NextResponse.json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ products: [], error: "Failed to load products" }, { status: 500 });
  }
}