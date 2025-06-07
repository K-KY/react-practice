import React from 'react';
import './Home.css';
import {getTest} from '../axios/Post'
import {Board, WriteBoard} from "./Board";
import {Route, Routes, Link} from "react-router-dom";

function Home() {

    return (
        <div className='App'>
            <button onClick={() => getTest()}>Test</button>
            <button onClick={() => getTest()}><Link to={"/write-post"}>글 작성</Link></button>

            <Routes>
                <Route path="/" element={<Board/>}> /</Route>
                <Route path="/write-post" element={<WriteBoard/>}> </Route>
            </Routes>

        </div>
    );
}

export default Home;