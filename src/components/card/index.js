/* eslint-disable react/jsx-no-target-blank */
import { ContainerCard, ContainerTecs, Image, Tecs } from './style';

export const Card = ({ name, tech, image, resume, linkDeploy }) => {
    // console.log(image);
    return (
        <ContainerCard>
            <h2>{name}</h2>
            <a href={linkDeploy} target='_blank'>
                <Image src={image} />
            </a>
            <p>{resume}</p>
            <ContainerTecs>
                {tech.map((item, index) => (
                    <Tecs key={index}>{item}</Tecs>
                ))}
            </ContainerTecs>
        </ContainerCard>
    );
};
