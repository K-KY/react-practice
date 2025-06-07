import React, {useState} from "react";
import "../axios/Post"
import {getPosts} from "../axios/Post";
import {useNavigate} from "react-router-dom";



const WriteBoard = () => {
    const navi = useNavigate();
    const [posts, setPosts] = useState({
        title: "",
        content: "",
        author: "default",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPosts({...posts, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await getPosts(posts);
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
                name="content"
                placeholder="content"
                value={posts.content}
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
    const testData = {
        posts: [
            {
                "title": "postTitle1",
                "post-contents": "postContent1",
                "post-author": "postAuthor1",
                "post-date": Date.now(),
                "post-number": 1
            },
            {
                "title": "postTitle2",
                "post-contents": "postContent2",
                "post-author": "postAuthor2",
                "post-date": Date.now(),
                "post-number": 2
            },
            {
                "title": "postTitle3",
                "post-contents": "postContent3",
                "post-author": "postAuthor3",
                "post-date": Date.now(),
                "post-number": 3
            },
            {
                "title": "postTitle4",
                "post-contents": "postContent4",
                "post-author": "postAuthor4",
                "post-date": Date.now(),
                "post-number": 4
            },
        ]
    }

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
            {testData.posts.map((post, index) => {
                return (
                    <tr className={"post-info"} onClick={() => console.log("click")} key={post["post-number"]}>
                        <td className={"post-child"}>{post["post-number"]}</td>
                        <td className={"post-child"}>{post["title"]}</td>
                        <td className={"post-child"}>{post["post-contents"]}</td>
                        <td className={"post-child"}>{post["post-author"]}</td>
                        <td className={"post-child"}>{post["post-date"]}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>

    )
}

export {Board};

export {WriteBoard};

