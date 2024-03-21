import { Card } from '../../components';
import {
    ContainerCardsProjects,
    ContainerProjectsPage,
    TitleMain,
} from './style';
import projects from '../../data/projects.json';

export const ProjectsPage = () => {
    return (
        <ContainerProjectsPage>
            <ContainerCardsProjects>
                <TitleMain>Meus Projetos</TitleMain>
                {projects.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        tech={item.technologies}
                        image={item.image}
                        resume={item.resume}
                        linkDeploy={item.link_deploy}
                        // tech={item.technologies.map((i) => {
                        //     // console.log(i);
                        //     return i;
                        // })}
                    />
                ))}
            </ContainerCardsProjects>
        </ContainerProjectsPage>
    );
};
