// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Function to fetch posts
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

export default function PostsComponent() {
  // useQuery returns data, status flags, and error
  const { data, isLoading, isError, error, refetch } = useQuery(['posts'], fetchPosts);

  if (isLoading) return <div>Loading posts...</div>;

  if (isError) return (
    <div>
      <p>Error fetching posts!</p>
      {/* Display actual error message */}
      <pre>{error.message}</pre>
    </div>
  );

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch} style={{ marginBottom: '1rem' }}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}