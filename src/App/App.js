import NavBar from '../Componentes/NavBar/Navbar.jsx';
import { Div } from './Styled.js';
import image from '../Img/Imgweat/ImageWeather.png';
import imagemy from '../Img/imgYo/edit.jpg';
import imageCountries from '../Img/ImgCountries/CountriesApp.png'
import cv from "../download/Garcia Agustin Desarrollador Fullstack.pdf"

function App() {
  return (
    <Div>
      <NavBar/>
      <section className="contact-social">
        <div className="wrapper col" >           
          <div className="icon linkedin">
            <div className="tooltip">Linkedin</div>
              <span><a href="https://www.linkedin.com/in/agustin-garcia-716865228/"><i className="bi bi-linkedin"></i></a></span>
            </div>
          <div className="icon github">
              <div className="tooltip">Github</div>
                <span><a href="https://github.com/agustingarcia1998"><i className="bi bi-github"></i></a></span>
          </div>
          <div className="icon whatsapp">
            <div className="tooltip">Whatsapp</div>
            <span><a href="https://api.whatsapp.com/send?phone=5493513877412"><i className="bi bi-whatsapp"></i></a></span>
          </div>   
        </div>    
      </section>
      <div className='divDeTodo'>
        <h4>¡Bienvenidos a mi sitio web!</h4>
        <div className='contsaludo'>
          <h1 className="animated animated-text">
            <span className="mr-2">¡Hola a todos! Soy</span>
            <div className="animated-info">
              <span className="animated-item">Agustín García</span>
              <span className="animated-item">Desarrollador FullStack</span>
              <span className="animated-item">Desarrollador Web</span>
            </div>
          </h1>
        </div>
        <div className='info' id='info'>
          <div className='image'>
            <img className='imgme' src={imagemy} width="351px" height="351px" alt='img not found'/>
          </div>
          <div className='info-text'>
            <p>
              Me considero una persona comprometida al progreso, de rápido aprendizaje. Me gustan los nuevos retos y aprender de raíz las cosas para entender por completo su funcionamiento.
              Considero el trabajo en equipo uno de mis fuertes, teniendo respeto y compañerismo como valores principales. Disfruto compartir ideas y escuchar para aprender💪🏽. 
            </p>
              <p>
              Estoy en búsqueda de una oportunidad laboral, en la que pueda desempeñar mis habilidades para mejorarlas, y a la vez, crecer y capacitarme profesionalmente al lado de compañeros que también disfruten de la programación.
              </p>
              <div className="box-1">
                <div>
                <a className="btn btn-one" href={cv} download="CV García Agustín Fullstack web developer.pdf">Descargar CV</a>
                </div>
              </div>
          </div>
        </div>
        <div>
          <h2 className='tituloskills'>SKILLS</h2>
          <div className="all-logos">
            <div className="logo html">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" width="70px" height="70px" alt='img not found'/>
            </div>
            <div className="logo css">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" width="70px" height="70px" alt='img not found'/>
            </div>
            <div className="logo javascript">
                <img src="https://quintagroup.com/cms/js/js-image/javascript-logo.png/@@images/8c64c4b9-4e1c-4c26-9b5e-78d85e3130a9.png" width="80px" height="80px" alt='img not found'/>
            </div>
            <div className="logo react">
                <img src="https://asap-consulting.com.ar/wp-content/uploads/2021/03/react.png" width="100px" height="100px" alt='img not found'/>
            </div>
            <div className="logo bootstrap">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" width="80px" height="80px" alt='img not found'/>
            </div>
            <div className="logo sass">
                <img src="https://1000marcas.net/wp-content/uploads/2021/06/Sass-Logo.png" width="80px" height="80px" alt='img not found'/>
            </div>
            <div className="logo nodejs">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png" width="90px" height="80px" alt='img not found'/>
            </div>
            <div className="logo express">
                <img src="https://images.tute.io/tute/topic/express-js.png" width="80px" height="80px" alt='img not found'/>
            </div>
            <div className="logo postgreSQL">
                <img src="https://www.sistemasumgcoban.com/wp-content/uploads/2018/05/postgresql-logo.png" width="100px" height="100px" alt='img not found'/>
            </div>
            <div className="logo sequelize">
                <img src="https://cdn.iconscout.com/icon/free/png-256/sequelize-3-1175091.png" width="100px" height="100px" alt='img not found'/>
            </div>
            <div className="logo webpack">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Webpack.svg/2560px-Webpack.svg.png" width="90px" height="80px" alt='img not found'/>
            </div>
            <div className="logo materialUi">
                <img src="https://mui.com/static/logo.png" width="70px" height="70px" alt='img not found'/>
            </div>
          </div>
        </div>
        <div className='proyectos' id='proyectos'>
          <h2>PROYECTOS</h2>
              <h4>Countries app</h4>
              <p>Este proyecto está basado en el desarrollo de una SPA (Single Page Application), la cual hace uso de una API de datos (restcountries.com).</p>
              <p>Características del proyecto:</p>
              <ul>
                <li>Paginación que muestra 10 países diferentes por página.</li>
                <li>Clasificación por continente, por población y alfabéticamente (A-Z, Z-A).</li>
                <li>Filtra por actividades (creadas en la base de datos).</li>
                <li>Barra de búsqueda por nombre.</li>
                <li>Formulario controlado para crear y publicar las actividades.</li>
             </ul>
              <p>Tecnologías utilizadas:</p>
              <ul>
                <li>Idioma: JavaScript.</li>
                <li>Front-End: React, Redux, Styled Components (CSS en estado puro).</li>
                <li> Backend: NodeJS, ExpresJS.</li>
                <li> Base de datos: PostgreSQL, Sequelize.</li>
                <h4><a className='linkapp' href='https://countries-page.vercel.app'>¡Ingresa a la app aquí!</a></h4>
                <div className='imageCountries'>
                  <img className='imageCountries' src={imageCountries} width="800px" height="600px" alt='img not found'/>
                </div>
              </ul>
        <h4 className='weatherTitle'>Weather cards</h4>
            <p>Este fué uno de mis proyectos de cursada. Es una aplicación que renderiza tarjetas de clima, de los países que se busquen en una SearchBar. Desarrollado con React.js y CSS puro.</p>
            <h4><a className='linkapp' href='https://wheater-app-self.vercel.app'>¡Ingresa a la app aquí!</a></h4>
          <div className='imagecards'>
            <img className='imagecards' src={image} width="800px" height="600px" alt='img not found'/>
          </div>
        </div>
      <section id="contact" className="contact-form col-lg-10 mx-auto" >
        <div className='contieneForm'>
            <div className="cont-contact col-lg-4 mx-auto" id="contact">
                <h2 className='contacto'>Te interesa que trabajemos juntos?</h2>
                <h2 className="talk" id='contacto'>Contáctame:</h2>             
            </div>
          <div className='contAll'>
            <div className='contactForm'>
              <form action="mailto:agustingarcia280998@gmail.com" method="post" encType="text/plain">
                  <div className="row">
                    <div className="col-lg-5 col-12">
                      <input type="text" className="form-control" name="name" placeholder="Nombre" id="name" autoComplete="off"/>
                   
                      <input type="email" className="form-control" name="email" placeholder="Email" id="email" autoComplete="off"/>
                    </div>

                    <div className="col-10">
                      <textarea name="message" rows="4" className="form-control" id="Message" placeholder=" Mensaje"></textarea>
                    </div>

                    <div className="boton">
                      <input type="submit" className="botonEnviar" value="Enviar"/>
                    </div>
                  </div>
                </form>
              </div>
          </div>
        </div>   
        </section>
    </div>
    </Div>
  );
}

export default App;
