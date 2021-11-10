import Container from '../components/Container'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import TimelineItem from '../components/TimelineItem';
import Skill from '../components/Skill';

import { 
    experience, 
    education, 
    technicalSkills, 
    softSkills 
} from '../info/experience';

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
                          {
                            education.map((school, i) => {
                              return(
                                <TimelineItem 
                                  year={school.year}
                                  company={school.company}
                                  title={school.title}
                                  content={school.content}
                                  key={i}
                                />
                              )
                            }).reverse()
                          }
                        </div>
                    </div>
                    <div className='about_info'>
                        <h2 className='underline'>Experiencia</h2>
                        <div className='about_info-content'>
                          {
                            experience.map((work, i) => {
                                return(
                                  <TimelineItem
                                    year={work.year}
                                    company={work.company}
                                    title={work.title}
                                    content={work.content}
                                    key={i}
                                  />
                                )
                            }).reverse()
                          }
                        </div>
                    </div>
                </div>
                <div className='skills'>
                    <div className='skills_info'>
                        <h2>Hábilidades Técnicas</h2>
                        <div className='skills_content'>
                          {
                            technicalSkills.map((skill, i) => {
                              return(
                                <Skill
                                  skillName={skill.skillName}
                                  skillPercentage={skill.skillPercentage}
                                  key={i}
                                />
                              )
                            })
                          }
                        </div>
                    </div>
                    <div className='skills_info'>
                        <h2>Otras Habilidades</h2>
                        <div className='skills_content'>
                          {
                            softSkills.map((skill, i) => {
                              return(
                                <Skill
                                  skillName={skill.skillName}
                                  skillPercentage={skill.skillPercentage}
                                  key={i}
                                />
                              )
                            })
                          }
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </Container >
    );
}

export default About;