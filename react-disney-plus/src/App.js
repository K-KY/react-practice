import './App.css';
import NavView from "./components/NavView";
import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Row from "./components/Row";
import requests from "./api/requests";

function App() {
    return (
        <Container>
            <div>
                <NavView></NavView>
                <Banner />
                <Category></Category>
                <Row title={"Trending Now"} id={"trend"} fetchURL={requests.fetchTrendingList}></Row>
                <Row title={"Top Rated"} id={"topRated"} fetchURL={requests.fetchTopRated}></Row>
                <Row title={"Actions"} id={"actions"} fetchURL={requests.fetchActionMovie}></Row>
                <Row title={"Comedy"} id={"comedy"} fetchURL={requests.fetchComedyMovie}></Row>
                <Routes>
                    <Route path={"/"}></Route>
                </Routes>
            </div>

        </Container>
    );
}

export default App;


const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0;
        opacity: 1;
        z-index: -1;

    }
`