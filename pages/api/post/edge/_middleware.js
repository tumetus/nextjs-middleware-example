
export async function middleware(req, ev) {
    const url = req.nextUrl;
    let postId = null;
    url.searchParams.forEach((val, key) => {
        if (key === "postId") {
            postId = val;
            return;
        }
    });

    if (!postId) {
        return new Response(JSON.stringify({ error: "postId is required" }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
            },
          });
    } else {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const post = await response.json();
  
      return new Response(JSON.stringify({ title: post.title }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
}