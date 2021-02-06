import styled from 'styled-components'

export const Keyboard = styled.div`
    display: grid;
    margin: 3px;
    width: 95%;
    grid-gap: 3px;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(5, 60px);
`