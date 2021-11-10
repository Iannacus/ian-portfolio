import Container from '../components/Container'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Project from '../components/Project';
import stopwatch from '../resources/img/projects/stopWatch.png';
import pokedex from '../resources/img/projects/pokedex.png';
import todo from '../resources/img/projects/todolist.png';
import ram from '../resources/img/projects/ram.png';
import weather from '../resources/img/projects/weathehrapp.png';
import trivia from '../resources/img/projects/triviapp.png';
import crud from '../resources/img/projects/crudjs.png';
import tvlist from '../resources/img/projects/tvlist.png';

function Portfolio() {
    return (
        <Container >
            <Header />
            <Title
                title='Portafolio'
            ></Title>
            <main>
                <div className='projects'>
                    <Project
                        title='tvList'
                        img={tvlist}
                        description='Aplicación realizada con redux para mostrar catalogo de series de tv. Puedes buscar, agregar y eleiminar de favoritos'
                        applink='https://tvlistene.netlify.app/'
                        repolink='https://github.com/Iannacus/tvlist/'
                    />
                    <Project
                        title='stopWatch'
                        img={stopwatch}
                        description='Aplicación de temporizador y crónometro realizada en react usando redux'
                        applink='https://stopwatchene.netlify.app/'
                        repolink='https://github.com/Iannacus/stopWatch'
                    />
                    <Project
                        title='Pokedex'
                        img={pokedex}
                        description='Cree una pokedex usando la información brindada por la pokeapi.
                        En este proyecto hice uso de context y react-router'
                        applink='https://pokedexene.netlify.app/'
                        repolink='https://github.com/Iannacus/pokedex'
                    />
                    <Project
                        title='ToDo List'
                        img={todo}
                        description='Aplicación CRUD consumienedo una api y usando los métodos GET, POST, PUT y DELETE'
                        applink='https://iaenetaks.netlify.app/'
                        repolink='https://github.com/Iannacus/todolist'
                    />
                    <Project
                        title='Rick And Morty'
                        img={ram}
                        description='Aplicación hecha con react consumiendo la api de rick and morty
                        Cree la interfaz y la lógica requerida para buscar una localización y obtener la url para realizar la petición correcta y obtener los datos para ser mostrados.'
                        applink='https://iaenerickandmorty.netlify.app/'
                        repolink='https://github.com/Iannacus/ram'
                    />
                    <Project
                        title='Weather App'
                        img={weather}
                        description='Aplicación hecha con react consumiendo la api de open weather y geolocalización del navegador
                        El fondo de pantalla cambia de color dependiendo del estado del clima actual'
                        applink='https://iaeneweatherapp.netlify.app/'
                        repolink='https://github.com/Iannacus/weatherApp'
                    />
                    <Project
                        title='Trivia'
                        img={trivia}
                        description='Usando Java Script y consumiendo la app de Open Trivia DB, realice el diseño de la interfaz y la lógica necesaria para poder realizar una pequeña aplicación de trivia.
                        Puedes seleccionar la cantidad de preguntas, el tema, la dificultad entre otras caracteristicas más.'
                        applink='https://triviappi.netlify.app/'
                        repolink='https://github.com/Iannacus/trivia'
                    />
                    <Project
                        title='CRUD'
                        img={crud}
                        description='Interfaz de lista de carros dodne puedes agregar, editar y eliminar hehcha con HTML, CSS y JS'
                        applink='https://carcrud.netlify.app/'
                        repolink='https://github.com/Iannacus/CRUD'
                    />
                </div>
            </main >
            <Footer />
        </Container >
    );
}

export default Portfolio;