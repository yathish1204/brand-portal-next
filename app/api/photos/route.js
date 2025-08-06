// app/api/photos/route.js

export async function GET(req) {
    const { searchParams } = new URL(req.url);
  const page = searchParams.get('page') || 1;
  const perPage =24;
  const res = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=${perPage}`, {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Failed to fetch from Unsplash' }), {
      status: 500,
    });
  }

  const data = await res.json();
  return Response.json(data);
}
