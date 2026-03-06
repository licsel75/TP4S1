import express from 'express';

const app = express();
const PORT = 3000;



app.get('/', (req, res) => {
   
    
    res.send(`Estimados profesores,

Espero que se encuentren bien. Me dirijo a ustedes para comentarles que, debido a algunas dificultades que estoy enfrentando para adaptarme a la nueva modalidad de enseñanza, no me será posible entregar el TP4 en la fecha estipulada.

La dinámica actual me ha resultado un poco compleja de seguir, y estoy trabajando para nivelarme y comprender mejor los contenidos. Quiero comprometerme a entregar el trabajo en breve, en cuanto pueda avanzar y asegurarme de que esté completo y bien realizado.

Agradezco mucho su comprensión y paciencia en este proceso. Cualquier orientación o sugerencia que puedan brindarme para facilitar mi aprendizaje será bienvenida.

Quedo atento a sus comentarios y les agradezco de antemano por su apoyo.

`);
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
