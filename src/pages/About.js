import Container from '../components/Container'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import TimelineItem from '../components/TimelineItem';
import Skill from '../components/Skill';

function About() {
    return (
        <Container >
            <Header />
            <Title
                title='Resume'
            ></Title>
            <main>
                <div className='resume'>
                    <p>Desarrollador Front End que cuenta con conocimientos en HTML, CSS, Java Script y React.</p>

                    <p>Me destaco por ser una persona que le encanta y encuentra divertido resolver problemas con software, y siempre estoy en constante aprendizaje.

                        Por el momento me encuentro desarrollando habilidades en backend con tecnologías como node y python.</p>

                    <p>Juego baseball y softball los fines de semana y en mis tiempos libres disfruto de la lectura, buena música y un café.</p>
                </div>
                <div className='about'>
                    <div className='about_info'>
                        <h2 className='underline'>Educación</h2>
                        <div className='about_info-content'>

                            <TimelineItem
                                year='2021'
                                company='Academlo'
                                title='Fullstack Developer & computer science'
                                content='Desarrollando habilidades de fullstack developer, desde html, css, js, react, node, express, python, bases de
                                datos, trabajo en equipo, control de versiones git, algoritmos y estructuras de datos.'
                            />
                            <TimelineItem
                                year='2013'
                                company='UTCAM'
                                title='Ingenieria en Mecatrónica'
                                content='Ingeniero en Mecatrónica, enfocado en el desarrollo y programación de interfaces humano maquina.'
                            />
                            <TimelineItem
                                year='2011'
                                company='UTCAM'
                                title='TSU en Mecatrónica'
                                content='Tecnico Superior Universitario en Mecatrónica área automatización'
                            />
                        </div>
                    </div>
                    <div className='about_info'>
                        <h2 className='underline'>Experiencia</h2>
                        <div className='about_info-content'>

                            <TimelineItem
                                year='2021'
                                company='Academlo'
                                title='Fullstack Developer & computer science'
                                content='He desarrollado proyectos con Java Script Vanilla, HTML y CSS, también usando react junto con librerias 
                                como react-router, context y redux. También desarrollando las habilidades de trabajo en equipo con proyectos 
                                realizados. '
                            />
                            <TimelineItem
                                year='2017-2021'
                                company='Instituto Gardner'
                                title='Profesor de Informática y Tecnología'
                                content='Imparto las materias de Tecnología en nivel secundaria, dando temas de fundamentos de programación
                                en lenguajes de bloques y swift. A nivel preparatoria imparto la materia de informatica, dando temas introductorios
                                HTML, CSS y JS.'
                            />
                        </div>
                    </div>
                </div>
                <div className='skills'>
                    <div className='skills_info'>
                        <h2>Hábilidades Técnicas</h2>
                        <div className='skills_content'>
                            <Skill
                                skillName='HTML'
                                skillPercentage='85%'
                            />
                            <Skill
                                skillName='CSS'
                                skillPercentage='80%'
                            />
                            <Skill
                                skillName='JavaScript'
                                skillPercentage='85%'
                            />
                            <Skill
                                skillName='React'
                                skillPercentage='80%'
                            />
                        </div>
                    </div>
                    <div className='skills_info'>
                        <h2>Otras Habilidades</h2>
                        <div className='skills_content'>
                            <Skill
                                skillName='Aprendizaje rápido'
                                skillPercentage='100%'
                            />
                            <Skill
                                skillName='Resolución de Problemas'
                                skillPercentage='100%'
                            />
                            <Skill
                                skillName='Trbajo en Equipo'
                                skillPercentage='100%'
                            />
                            <Skill
                                skillName='Facliidad de Palabra'
                                skillPercentage='100%'
                            />

                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </Container >
    );
}

export default About;