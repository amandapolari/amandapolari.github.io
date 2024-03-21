import styled from 'styled-components';

export const ContainerProjectsPage = styled.div`
    /* border: blue solid 3px; */
    height: 90vh;
    display: grid;
    justify-content: center;
    /* align-items: center; */
`;

export const ContainerCardsProjects = styled.div`
    /* border: red solid 3px; */
    width: 98vw;
    display: grid;
    justify-content: center;
    grid-template-rows: 0.2fr 1fr;
    grid-template-columns: 1fr 1fr;

    /* align-items: center; */
`;

export const TitleMain = styled.p`
    /* border: red solid 3px; */
    grid-column: 1/3;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    font-size: 9vh;
    margin: 0;
`;
