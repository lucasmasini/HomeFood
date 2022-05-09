import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    margin: 0px;
    width: 100%;
    aling-content: center; 
    justify-content: space-between;
    padding: 0px 10px 10px 10px;
    background: linear-gradient(to right, #fc967a, #ff7c58);
}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 97%;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;    
`;

export const Row = styled.div`
    display: flex;
    column-gap: 200px;
}
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 8px;
    font-size: 15px;
    text-decoration: none;
    &:hover {
        color: black;
        transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
    font-size: 19px;
    color: #fff;
    font-weight: 600;
`;