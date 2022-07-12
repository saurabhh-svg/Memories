import axios from "axios";

const url = "http://localhost:8000/posts";

export const fetchPosts = () => axios.get(url);
