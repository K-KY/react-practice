import axios from "axios";

export const getTest = async () => {

    axios.get("http://localhost:8080/posts")
        .then(res => {console.log(res.data);})
        .catch((error) => console.error('API 오류:', error));
}

export const getPosts = async (post) => {
    try {
        const response = await axios.post("http://localhost:8080/posts", {
            title: post.title,
            content: post.content,
            author: post.author,
        });

        if (response.status === 200) {
            return true;
        }

    } catch (error) {
        console.log(error);
        return false;
    }
}
