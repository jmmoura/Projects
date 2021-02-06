import styled from 'styled-components'

export const Display = styled.div`
    color: #fff;
    font-size: 2.5em;
    width: 95%;
    height: 100%;
    margin: 0;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    direction: rtl;

    ::-webkit-scrollbar {
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #dbdbdb; 
    }
    
    ::-webkit-scrollbar-thumb {
        background: #777777; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`

export const Text = styled.span`
    direction: ltr;
`