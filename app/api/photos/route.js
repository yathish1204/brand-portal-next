// app/api/photos/route.js

export const dynamic = "force-dynamic";

export async function GET(req) {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!accessKey) {
    return Response.json(
      {
        error:
          "UNSPLASH_ACCESS_KEY is not set. Add it to your environment for production builds.",
      },
      { status: 503 },
    );
  }

  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const perPage = 24;

  const res = await fetch(
    `https://api.unsplash.com/photos?page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    const detail = await res.text();
    let message = "Failed to fetch from Unsplash";
    try {
      const parsed = JSON.parse(detail);
      message = parsed.errors?.[0] || parsed.error || message;
    } catch {
      if (detail) message = `${message} (${res.status})`;
    }
    return Response.json(
      { error: message },
      { status: res.status >= 500 ? 502 : res.status },
    );
  }

  const data = await res.json();
  return Response.json(data);
}
