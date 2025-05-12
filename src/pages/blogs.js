import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BlogTemplate from '../components/BlogTemplate';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        setError('Failed to load post');
      }
    };
    fetchPost();
  }, [id]);

  if (error) return <div className="text-center my-5 text-danger">{error}</div>; // Display error message
  if (!post) return <div className="text-center my-5">Loading...</div>; // Loading state

  return <BlogTemplate post={post} />;
};

export default BlogDetail;
