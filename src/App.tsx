import { useEffect, useState } from "react";
import "./App.css";
import { getPost } from "./api/wordpress";

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPost();

        console.log("Data received in App:", data);
        console.log("Is array in App:", Array.isArray(data));

        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("Expected an array but received:", data);
          setPosts([]);
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setPosts([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Website</h1>

      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title.rendered}</h2>

          <div
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}
          />
        </article>
      ))}
    </div>
  );
}

export default App;