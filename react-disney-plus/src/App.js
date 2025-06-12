import './App.css';
import NavView from "./components/NavView";
import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import Banner from "./components/Banner";
import Category from "./components/Category";

function App() {
    return (
        <Container>
            <div>
                <NavView></NavView>
                <Banner />
                <Category></Category>
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