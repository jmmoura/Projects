import styled from 'styled-components'

export const Button = styled.button`
    background-color: #2c3e50;
    color: #fff;
    font-size: 1.5em;
    width: 100%;
    height: 100%;
    border-style: none;
    outline: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #465a6d;
        
    }

    &:active {
        background-color: #5e758a;
        transition: 0.2s;
    }

    &.operation {
    }

    &.ce {
        grid-column: span 3;
    }

    &.zero {
        grid-column: span 2;
    }
`