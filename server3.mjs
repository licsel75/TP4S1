// 1. Importamos express (igual que antes)
import express from 'express';

const app = express();
const PORT = 3000;

// 2. Definimos la ruta base '/profile'
//    Nota que NO tiene ':', solo es '/profile'.
//    Express esperará que cualquier parámetro extra venga en la query string.
app.get('/profile', (req, res) => {
    // 3. Accedemos a los parámetros de consulta desde req.query
    //    Si la URL es /profile?edad=30, entonces req.query será un objeto: { edad: '30' }
    //    Si la URL es /profile?nombre=Juan&ciudad=Madrid, req.query será { nombre: 'Juan', ciudad: 'Madrid' }
    const edad = req.query.edad;
     const ciudad = req.query.ciudad;

    // 4. Mostramos la edad en la consola del servidor
    console.log(`Edad recibida: ${edad} y ciudad : ${ciudad}`);

    // 5. Enviamos una respuesta al cliente
    res.send(`Edad del perfil: ${edad} y ciudad : ${ciudad}`);
});

app.listen(PORT, () => {
    console.log(`Servidor de consultas corriendo en http://localhost:${PORT}`);
});