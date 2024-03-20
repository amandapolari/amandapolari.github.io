import styled from 'styled-components';

export const ContainerHomePage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
`;

export const ContainerImageAndText = styled.div`
    /* border: solid blue 2px; */
    display: flex;
`;

export const ImageMain = styled.img`
    /* border: solid red 2px; */
    height: 50vh;
    padding: 2vh;
    border-radius: 30px;
`;

export const TitleHome = styled.p`
    font-family: 'Truculenta', sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-size: 7vh;
    margin: 0;
    line-height: 7vh;
`;

export const ContainerText = styled.div`
    /* border: solid blue 2px; */
    display: flex;
    flex-direction: column;
    justify-content: end;
`;

export const Text = styled.p`
    width: 20vw;
`;
