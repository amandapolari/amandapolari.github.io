import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from '@mui/lab';

export const AboutPage = () => {
    return (
        // <div>
        //     <h1>About Page</h1>
        // </div>
        <Timeline position='alternate'>
            <TimelineItem>
                <TimelineOppositeContent color='text.secondary'>
                    2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <b>Laboratoria</b>
                    <br />O bootcamp da Laboratória tem duração de 6 meses com
                    foco em empregabilidade na área de Programação. O
                    treinamento é intensivo, voltado para a formação de
                    desenvolvedora front-end júnior que saiba trabalhar em
                    ambientes de incertezas e constante mudança. Nele, são
                    aprendidas linguagem JavaScript, HTML, CSS, UX, entre
                    outras. No bootcamp são desenvolvidas não só as habilidades
                    técnicas, como também as habilidades socioemocionais e
                    profissionais, como autoaprendizagem, comunicação, trabalho
                    em equipe, entre outras.
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color='text.secondary'>
                    2023 - 2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <b>Labenu</b>
                    <br />
                    Programa com mais de 1000 horas de experiência prática em
                    desenvolvimento Full-stack, guiadas por metodologias ágeis
                    (Kanban/Scrum). Entre as habilidades aprendidas durante o
                    curso estão HTML, CSS, JavaScript, React, Styled-Components,
                    React Hooks, REST, Api Restful, HTTP, Jest, Node.JS, Knex,
                    TypeScript, MySQL, SQL, Git, Github, Testes
                    unitários e UI Design.
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color='text.secondary'>
                    12:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color='text.secondary'>
                    9:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Repeat</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};
