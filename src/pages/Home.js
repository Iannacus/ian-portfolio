import Container from '../components/Container'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

function Home() {
    return (
        <Container >
            <Header />
            <main>
                <div className='info'>
                    <div className='info_pic'>
                    </div>
                    <div className='info_txt'>
                        <p className='gray no-margin'>Front End Web Developer</p>
                        <h1>Ian Rosas</h1>
                        <p>Desarrollador Front End que cuenta con conocimientos en HTML, CSS, Java Script y React.
                            Me destaco por ser una persona que le encanta y encuentra divertido resolver problemas con software,
                            y siempre estoy en constante aprendizaje.
                        </p>
                        <Button />
                    </div>
                </div>
            </main>
            <Footer />
        </Container>
    );
}

export default Home;