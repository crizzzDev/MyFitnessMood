import mongoose from 'mongoose'; // Importa Mongoose para poder usar sus métodos
import express from 'express'; // Importa Express para manejar las rutas
import cors from 'cors'; // Importa CORS para permitir solicitudes desde otros dominios
import { queryUserByEmailAndPassword, queryAllUsers } from './query.js'; // Importa las funciones para las consultas a la base de datos
import { findUserByEmail, User } from './db.js'; // Importa el modelo de usuario y la función para encontrar usuarios

const app = express(); // Inicializo la aplicación de Express
const PORT = process.env.PORT || 5000; // Configuro el puerto, usando 5000 como valor por defecto

app.use(cors()); // Habilito CORS para permitir solicitudes desde otros dominios
app.use(express.json()); // Middleware para interpretar el cuerpo de las solicitudes como JSON

// Ruta raíz para verificar que el servidor está activo
app.get('/', (req, res) => res.send("¡My Fitness Mood funciona!"));

// Ruta para manejar el inicio de sesión
app.post('/loggedIn', async (req, res) => {
    const { email, password } = req.body; // Extraigo el email y la contraseña desde el cuerpo de la solicitud

    try {
        // Consulto si existe un usuario con el email y la contraseña proporcionados
        const user = await queryUserByEmailAndPassword(email, password);

        // Si el usuario existe, se envía un mensaje de éxito
        if (user) {
            res.status(200).send('Usuario encontrado');
        } else {
            res.status(401).send('Usuario no existe'); // Si no existe, se envía un mensaje de error
        }
    } catch (err) {
        console.error(err); // Si ocurre un error en la consulta, se maneja aquí
        res.status(500).send('Error en el servidor');
    }
});

// Nueva ruta para registrar un usuario
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body; // Extraigo los datos del nombre, email y contraseña del cuerpo de la solicitud

    try {
        // Verifico si ya existe un usuario registrado con el mismo email
        const existingUser = await findUserByEmail(email);

        // Si el usuario ya existe, devuelvo un mensaje indicando el conflicto
        if (existingUser) {
            return res.status(400).send('El usuario ya existe');
        }

        // Si no existe, creo un nuevo usuario con los datos proporcionados
        const newUser = new User({ name, email, password });
        
        // Guardo el nuevo usuario en la base de datos
        await newUser.save();

        // Respondo con un mensaje de éxito
        res.status(201).send('Usuario registrado exitosamente');
    } catch (err) {
        console.error('Error al registrar el usuario:', err); // Manejo de errores en caso de que ocurra algún problema durante el proceso
        res.status(500).send('Error en el servidor');
    }
});

// Ruta para obtener la lista de todos los usuarios
app.get('/users', async (req, res) => {
    try {
        // Obtengo todos los usuarios desde la base de datos
        const users = await queryAllUsers();
        
        // Devuelvo la lista de usuarios en formato JSON
        res.status(200).json(users);
    } catch (err) {
        console.error('Error al obtener usuarios:', err); // Manejo de errores si falla la consulta de usuarios
        res.status(500).send('Error al obtener usuarios');
    }
});

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const userId = new mongoose.Types.ObjectId(id); // Usar new

        const user = await User.findByIdAndDelete(userId);

        if (user) {
            res.status(200).send('Usuario eliminado');
        } else {
            res.status(404).send('Usuario no encontrado');
        }
    } catch (err) {
        console.error('Error al eliminar el usuario:', err);
        if (err instanceof mongoose.Error.CastError) {
            res.status(400).send('ID de usuario inválido');
        } else {
            res.status(500).send('Error en el servidor');
        }
    }
});

// Arranco el servidor y lo pongo a escuchar en el puerto configurado
app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`); // Mensaje de inicio del servidor
});