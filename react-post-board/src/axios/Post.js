import axios from "axios";

export const getTest = async () => {

    axios.get("http://localhost:8080/posts/test")
        .then(res => {console.log(res.data);})
        .catch((error) => console.error('API 오류:', error));
}

export const writePosts = async (post) => {
    try {
        const response = await axios.post("http://localhost:8080/posts", {
            title: post.title,
            contents: post.contents,
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

export const getPosts = async (page, pageSize) => {
    try {
        const res = await axios.get(`http://localhost:8080/posts/${page}/${pageSize}`);
        console.log("getPosts called")
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};
export const getPostsDefault = async () => {
    try {
        const res = await axios.get("http://localhost:8080/posts");
        console.log("getPosts called")
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};
