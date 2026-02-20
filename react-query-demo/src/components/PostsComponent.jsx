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
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery(['posts'], fetchPosts, {
    // Advanced React Query options
    staleTime: 1000 * 60 * 5,          // Data is fresh for 5 minutes
    cacheTime: 1000 * 60 * 30,         // Unused data stays in cache for 30 minutes
    refetchOnWindowFocus: true,        // Refetch when window/tab gains focus
    keepPreviousData: true,            // Keep previous data while fetching new data
  });

  if (isLoading) return <div>Loading posts...</div>;

  if (isError) return (
    <div>
      <p>Error fetching posts!</p>
      <pre>{error.message}</pre>
    </div>
  );

  return (
    <div>
      <h2>Posts</h2>

      {/* Refetch button */}
      <button onClick={refetch} style={{ marginBottom: '1rem' }}>
        Refetch Posts
      </button>

      {/* Show fetching status */}
      {isFetching && <p>Updating posts...</p>}

      {/* Posts list */}
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