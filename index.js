import express from 'express';
import cors from 'cors';
import { queryUserByEmailAndPassword, queryAllUsers } from './query.js';  // Importa las funciones de consulta

const app = express();  // Crea una instancia de la aplicación Express
const PORT = process.env.PORT || 5000; // Definición del puerto

app.use(cors());
app.use(express.json()); // Para parsear JSON en el cuerpo de las solicitudes

// Ruta básica para comprobar que el servidor funciona
app.get('/', (req, res) => res.send("¡My Fitness Mood funciona!"));

// Ruta para iniciar sesión
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await queryUserByEmailAndPassword(email, password); // Usa la función de consulta

        if (user) {
            res.status(200).send('Usuario encontrado');
        } else {
            res.status(401).send('Usuario no existe');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
    }
});

// Ruta para obtener todos los usuarios
app.get('/users', async (req, res) => {
    try {
        const users = await queryAllUsers(); // Usa la función para obtener todos los usuarios
        res.status(200).json(users); // Envía la lista de usuarios como respuesta
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener usuarios');
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});