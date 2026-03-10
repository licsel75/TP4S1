// 1. Importamos express
import express from 'express';

// 2. Creamos una instancia de la aplicación express. Esto es nuestro "mesero".
const app = express();

// 3. Definimos el puerto en el que nuestro servidor va a escuchar.
const PORT = 3000;






// 4. Definimos una ruta. Esta es la parte más importante.

//    app.get() le dice a express: "Cuando recibas una solicitud GET en la ruta '/user/:id'...".
//    El ':id' es un parámetro de ruta. Los dos puntos (:) le indican a express que 'id' es una variable.
app.get('/user/:id', (req, res) => {
    // 5. Cuando alguien entre a esta ruta, Express ejecutará esta función.
    //    'req' es el objeto de la solicitud (request). Contiene toda la info de lo que nos pide el cliente.
    //    'res' es el objeto de la respuesta (response). Lo usamos para enviar algo de vuelta al cliente.

    // 6. Accedemos al parámetro de ruta 'id' desde req.params.
    //    El nombre 'id' debe coincidir con el que pusimos en la ruta (':id').
    const userId = req.params.id;

    // 7. Mostramos el ID en la consola del servidor (la terminal).
    //    Usamos console.log() con template literals (las comillas invertidas `` y ${}) para insertar la variable.
    console.log(`ID del usuario recibido: ${userId}`);

    // 8. Enviamos una respuesta al cliente (el navegador o Postman).
    res.send(`Perfil del usuario con ID: ${userId} esto sale en el navegador`);
});

// 9. Finalmente, le decimos a nuestra aplicación que empiece a escuchar en el puerto definido.
app.listen(PORT, () => {
    // Esta función se ejecuta una vez que el servidor se ha iniciado correctamente.
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});