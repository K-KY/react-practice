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
            <input type="submit" value="Save"/>
        </form>
    )
}

const Board = () => {
    const [posts, setPosts] = useState([]);//게시물
    const [totalPages, setTotalPages] = useState(0);//총 페이지 수
    const [pageSize, setPageSize] = useState(50);//불러올 페이지 게시물 수
    const [page, setPage] = useState(0);// 현재 페이지


    useEffect(() => {
        getPosts(page, pageSize).then((data) => {
            if (data) {
                setPosts(data.content);
                setTotalPages(data.totalPages);
                console.log(data.totalPages);
            }
        });
    }, [page, pageSize]);

    const pageSizeChange = (e) => {
        setPageSize(Number(e.target.value));
        setPage(0);

    }

    return (
        <>
            <table>
                <thead className={"post-header"}>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </tr>
                <tr>
                    <td> 페이지 수 : {totalPages}</td>
                    <td>
                        <button onClick={(e) => {
                            e.preventDefault();
                            pageSizeChange(e)
                        }} value={10}>10개
                        </button>
                    </td>
                    <td>
                        <button onClick={(e) => {
                            e.preventDefault();
                            pageSizeChange(e)
                        }} value={50}>50개
                        </button>
                    </td>
                    <td>
                        <button onClick={(e) => {
                            e.preventDefault();
                            pageSizeChange(e)
                        }} value={100}>100개
                        </button>
                    </td>
                </tr>
                </thead>

                <tbody className="post-body">
                {posts.map((post, index) => {
                    return (
                        <tr className={"post-info"} onClick={() => console.log("click")} key={post["postId"]}>
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
            <div className="pagination">
                {Array.from({length: totalPages}, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i)}
                        style={{fontWeight: page === i ? "bold" : "normal"}}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

        </>
    )
}

export {Board};

export {WriteBoard};

