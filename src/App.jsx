import React, { useEffect, useState } from 'react';
import api from './api';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // db로부터 값을 가져온다.
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        console.log(response)
      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;