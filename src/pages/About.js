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
                <div className='about'>
                    <div className='about_info'>
                        <h2>Educación</h2>
                        <div className='about_info-content'>

                            <TimelineItem
                                year='2021'
                                company='Academlo'
                                title='Fullstack Developer & computer science'
                                content='Hola mundo como estan todos por allá'
                            />
                            <TimelineItem
                                year='2013'
                                company='UTCAM'
                                title='Ingenieria en Mecatrónica'
                                content='Hola mundo como estan todos por allá'
                            />
                            <TimelineItem
                                year='2011'
                                company='UTCAM'
                                title='TSU en Mecatrónica'
                                content='Hola mundo como estan todos por allá'
                            />
                        </div>
                    </div>
                    <div className='about_info'>
                        <h2>Experiencia</h2>
                        <div className='about_info-content'>

                            <TimelineItem
                                year='2021'
                                company='Academlo'
                                title='Fullstack Developer & computer science'
                                content='Hola mundo como estan todos por allá'
                            />
                            <TimelineItem
                                year='2013'
                                company='UTCAM'
                                title='Ingenieria en Mecatrónica'
                                content='Hola mundo como estan todos por allá'
                            />
                            <TimelineItem
                                year='2011'
                                company='UTCAM'
                                title='TSU en Mecatrónica'
                                content='Hola mundo como estan todos por allá'
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