export default async function handler(req, res) {
    const { postId } = req.query;

    if (!postId) {
      res.status(500).json({ error: "postId is required" });
    } else {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const post = await response.json();
  
      res.status(200).json({ title: post.title });
    }
  }