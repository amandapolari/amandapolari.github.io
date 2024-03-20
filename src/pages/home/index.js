import {
    ContainerHomePage,
    ContainerImageAndText,
    ContainerText,
    ImageMain,
    Text,
    TitleHome,
} from './style';

import images from '../../assets/importImages';

export const HomePage = () => {
    return (
        <ContainerHomePage>
            <ContainerImageAndText>
                {/* <ImageMain src={images.image_main} /> */}
                <ImageMain src={images.dev} />
                <ContainerText>
                    <TitleHome>
                        Desenvolvedora <br /> Front-End
                    </TitleHome>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas a nisi vel elit ornare iaculis. Proin congue,
                        quam id imperdiet molestie, leo nunc imperdiet quam, sed
                        ultrices libero dolor at libero.
                    </Text>
                </ContainerText>
            </ContainerImageAndText>
        </ContainerHomePage>
    );
};
