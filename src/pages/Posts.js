import { useEffect, useState } from "react";
import API from "../api/axios";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Retrieve token from localStorage
                const token = localStorage.getItem("access");

                if (!token) {
                    throw new Error("No access token found. Please log in.");
                }

                const response = await API.get('/posts/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setPosts(response.data.results);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.content}</li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;