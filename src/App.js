import { AppBar, Toolbar, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa el CSS
import uniformImage from '../src/assets/img/uniforme.png';
import fenix from '../src/assets/img/fenix-sello.png';
import backgroundStadium from '../src/assets/img/background-stadium.png'; // Imagen de estadio como fondo

// Configuración del tema oscuro de Material-UI
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div 
        className="min-h-screen flex flex-col text-white"
        style={{
          backgroundImage: `url(${backgroundStadium})`, // Fondo del estadio
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Escuela de futbol Fenix
            </Typography>
            <Button color="inherit">Club</Button>
            <Button color="inherit">Estadio</Button>
          </Toolbar>
        </AppBar>

        {/* Carousel con imágenes con width: 50% y fondo opaco */}
        <Carousel
          autoPlay
          interval={3000}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          <div className="w-full flex justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}> {/* Fondo blanco opaco */}
            <img src={uniformImage} alt="Uniforme" style={{ width: '30%', height: 'auto' }} />
            <p className="legend">Uniforme</p>
          </div>
          <div className="w-full flex justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}> {/* Fondo blanco opaco */}
            <img src={fenix} alt="Noticias" style={{ width: '31%', height: 'auto' }} />
            <p className="legend">Fenix J2</p>
          </div>
        </Carousel>

        <div className="flex-grow p-4 space-x-4">
          <Paper elevation={3} sx={{ p: 2, flex: 1 }}>
            <Typography variant="h6">Último Partido</Typography>
            <div>1 - 2</div>
          </Paper>
          <Paper elevation={3} sx={{ p: 2, flex: 1 }}>
            <Typography variant="h6">Próximo Partido</Typography>
            <div>vs Nombre del Equipo</div>
          </Paper>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>Equipo</TableCell>
                <TableCell align="right">Pts</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <AppBar position="static" color="primary" sx={{ mt: 'auto' }}>
          <Toolbar>
            <Typography variant="body1" sx={{ color: 'inherit' }}>
              © 2024 Club Deportivo Fenix J2
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

export default App;
