import React from 'react';
import './Home.css';
import {getTest} from '../axios/Post'
import {Board, WriteBoard} from "./Board";
import {Route, Routes, Link} from "react-router-dom";

function Home() {

    return (
        <div className='App'>
            <button onClick={() => getTest()}>Test</button>

            <Link to={"/write-post"}><button>글 작성</button></Link>
            <Link to={"/"}><button>Home</button></Link>

            <Routes>
                <Route path="/" element={<Board/>}> /</Route>
                <Route path="/write-post" element={<WriteBoard/>}> </Route>
            </Routes>

        </div>
    );
}

export default Home;