// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

export default function PostsComponent() {
  const { data, isLoading, isError, refetch } = useQuery(['posts'], fetchPosts);

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error fetching posts!</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch} className="refetch-btn">Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}