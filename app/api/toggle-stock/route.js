import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import Redis from "ioredis";

let redis;
function getRedis() {
  if (!redis) {
    redis = new Redis(process.env.REDIS_URL);
  }
  return redis;
}

export async function POST(request) {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("thrifted_admin");

  if (!isAdmin || isAdmin.value !== "true") {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const body = await request.json();
  const { productId } = body;

  if (!productId) {
    return NextResponse.json({ error: "Missing productId" }, { status: 400 });
  }

  try {
    const client = getRedis();
    const key = `thrifted:product:${productId}`;
    const productJson = await client.get(key);

    if (!productJson) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const product = JSON.parse(productJson);
    product.status = product.status === "sold" ? "available" : "sold";

    await client.set(key, JSON.stringify(product));

    return NextResponse.json({ success: true, product });
  } catch (error) {
    console.error("Error toggling stock:", error);
    return NextResponse.json({ error: "Failed to update stock" }, { status: 500 });
  }
}