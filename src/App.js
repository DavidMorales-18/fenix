import { AppBar, Toolbar, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Icon } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa el CSS
import uniformImage from '../src/assets/img/uniforme.png';
import fenix from '../src/assets/img/fenix-sello.png';
import backgroundStadium from '../src/assets/img/background-stadium.png'; // Imagen de estadio como fondo
import { FaWhatsapp } from 'react-icons/fa'; // Importa el icono de WhatsApp

// Configuración del tema oscuro de Material-UI
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// Estilos reutilizables
const carouselImageStyle = (widthPercentage) => ({
  width: widthPercentage,
  height: 'auto',
  transition: 'filter 0.5s ease-in-out', // Animación suave
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
}));

// Barra de navegación
const NavigationBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Icon />
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Escuela de futbol Fénix
      </Typography>
    </Toolbar>
  </AppBar>
);

// Sección de horarios de entrenamiento
const TrainingSchedule = () => (
  <StyledPaper elevation={3} sx={{ mt: 4 }}>
    <Typography variant="h6" sx={{ mb: 2 }}>
      Horarios de Entrenamiento
    </Typography>
    <TableContainer component={Paper}>
      <Table aria-label="horarios de entrenamiento">
        <TableBody>
          <TableRow>
            <TableCell>Lunes</TableCell>
            <TableCell>3:00 PM - 5:00 PM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Miércoles</TableCell>
            <TableCell>3:00 PM - 5:00 PM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Viernes</TableCell>
            <TableCell>3:00 PM - 5:00 PM</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </StyledPaper>
);

// Sección de misión, visión y valores
const AboutUs = () => (
  <StyledPaper elevation={3}>
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6">Acerca de Nosotros</Typography>
      <Typography variant="body1" paragraph>
        Misión:
        "Formar jugadores de fútbol integrales, desarrollando sus habilidades deportivas, sociales y emocionales, a través de la enseñanza de los valores de trabajo en equipo, disciplina y respeto. Nuestra escuela busca fomentar la pasión por el deporte y promover una vida saludable para niños y jóvenes."
      </Typography>
      <Typography variant="body1" paragraph>
        Visión:
        "Ser una escuela de fútbol líder, reconocida por nuestra excelencia en la formación de jugadores y personas íntegras, comprometidas con el deporte y con su comunidad. Aspiramos a ser un referente en la educación futbolística, inspirando a futuras generaciones a alcanzar su máximo potencial."
      </Typography>
      <Typography variant="body1" paragraph>
        Valores:
        Trabajo en equipo, Disciplina, Respeto, Pasión, Inclusión, Superación personal.
      </Typography>
    </Paper>
  </StyledPaper>
);

// Carrusel con imágenes
const CarouselComponent = () => (
  <Carousel
    autoPlay
    interval={3000}
    infiniteLoop
    showThumbs={false}
    showStatus={false}
    onChange={(index) => {
      const currentImage = document.querySelectorAll('.carousel img')[index];
      if (currentImage) {
        currentImage.classList.add('highlight');
        setTimeout(() => currentImage.classList.remove('highlight'), 500); // Remueve el efecto después de 500ms
      }
    }}
  >
    <div className="w-full flex justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
      <img
        src={uniformImage}
        alt="Imagen del Uniforme de Fenix"
        style={carouselImageStyle('30%')}
        className="carousel-image"
      />
      <p className="legend">Uniforme</p>
    </div>
    <div className="w-full flex justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
      <img
        src={fenix}
        alt="Escudo del Club Fenix"
        style={carouselImageStyle('31%')}
        className="carousel-image"
      />
      <p className="legend">Escudo</p>
    </div>
  </Carousel>
);

// Pie de página
const Footer = () => (
  <AppBar position="static" color="primary" sx={{ mt: 'auto' }}>
    <Toolbar>
      <Typography variant="body1" sx={{ color: 'inherit' }}>
        © 2024 Club Deportivo Fénix J2
      </Typography>
    </Toolbar>
  </AppBar>
);

// Componente principal
const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div
        className="min-h-screen flex flex-col text-white"
        style={{
          backgroundImage: `url(${backgroundStadium})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <NavigationBar />
        <CarouselComponent />
        <div className="flex-grow p-4 space-x-4">
          <AboutUs />
          {/* Agrega el componente de horarios aquí */}
          <TrainingSchedule />
          <Paper elevation={3} sx={{ p: 2, flex: 1 }}>
            <Typography variant="h6">Inscripción y Contacto</Typography>
            <p style={{ marginTop: '15px' }}>
              Localización:{" "}
              <a
                href="https://www.google.com/maps/place/Liga+Barrial+El+Guabo+FLQ/@-0.2224255,-78.4791095,17.03z/data=!4m14!1m7!3m6!1s0x91d599fe95c4a731:0x40c6b4d7850494e1!2sLiga+Barrial+El+Guabo+FLQ!8m2!3d-0.223673!4d-78.4792715!16s%2Fg%2F11dxf1ln6j"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#1976d2', textDecoration: 'none' }}
              >
                Ver en Google Maps
              </a>
            </p>
            <div>
              <p>Email: <a href="mailto:bmoralest84@gmail.com" style={{ color: '#1976d2', textDecoration: 'none' }}>contacto@fenix.com</a></p>
              <a
                href="https://wa.me/593984369725?text=Fenix%20J2%20deseo%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  backgroundColor: '#25D366',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  marginTop: '10px',
                }}
              >
                <FaWhatsapp style={{ marginRight: '10px' }} />
                Contactar por WhatsApp
              </a>
            </div>
          </Paper>
        </div>
        <Footer />
      </div>

      <style jsx>{`
        .carousel img {
          transition: filter 0.5s ease-in-out;
        }
        .carousel img.highlight {
          filter: brightness(1.5);
        }
      `}</style>
    </ThemeProvider>
  );
};

export default App;
