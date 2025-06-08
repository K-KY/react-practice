import React, {useEffect, useState} from "react";
import "../axios/Post"
import {getPosts, writePosts} from "../axios/Post";
import {useNavigate} from "react-router-dom";



const WriteBoard = () => {
    const navi = useNavigate();
    const [posts, setPosts] = useState({
        title: "",
        contents: "",
        author: "default",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPosts({...posts, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await writePosts(posts);
        console.log(response);

        if (response) {
            navi('/')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                placeholder="title"
                value={posts.title}
                onChange={handleChange}
            />
            <input
                name="contents"
                placeholder="contents"
                value={posts.contents}
                onChange={handleChange}
            />
            <input
                name="author"
                placeholder="author"
                value={posts.author}
                onChange={handleChange}
            />
            <input type="submit" value="Save" />
        </form>
    )
}

const Board = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then((data) => {
            if (data) {
                setPosts(data);
            }
        });
    }, []);



    return (
        <table>
            <thead className={"post-header"}>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>내용</th>
                <th>작성자</th>
                <th>작성일</th>
            </tr>
            </thead>

            <tbody className="post-body">
            {posts.map((post, index) => {
                return (
                    <tr className={"post-info"} onClick={() => console.log("click")} key={post["post-number"]}>
                        <td className={"post-child"}>{post["postId"]}</td>
                        <td className={"post-child"}>{post["title"]}</td>
                        <td className={"post-child"}>{post["content"]}</td>
                        <td className={"post-child"}>{post["author"]}</td>
                        <td className={"post-child"}>{post["createdAt"]}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>

    )
}

export {Board};

export {WriteBoard};

