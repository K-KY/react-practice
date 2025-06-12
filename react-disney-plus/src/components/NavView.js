import React, {useEffect, useState} from 'react';
import styled from "styled-components";

NavView.propTypes = {};

function NavView() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setShow(true);
            }

            if (window.scrollY <= 50) {
                setShow(false);
            }
        })

        return () => {
            window.removeEventListener('scroll', () => {})
        }
    }, [])

    console.log("123123");
    return (
        <NavViewHolder show={show}>
            <div>NAVVIEW</div>
            <Logo>
                <img alt="logo" src="../../images/logo.svg" />
                onClick={() => (window.location.href = "/")} />

            </Logo>
        </NavViewHolder>
    );
}

export default NavView;

const NavViewHolder = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: ${props => props.show ? "bisque" : "transparent"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img {
        display: block;
        width: 100%;
        
    }
`