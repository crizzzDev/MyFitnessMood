// este documento facilita las pruebas, consultas  y mantiene la estructura del código organizada
import { User } from './db.js'; // Importa el modelo de usuario desde db.js

// Función para consultar un usuario por email y contraseña
async function queryUserByEmailAndPassword(email, password) {
  try {
    const user = await User.findOne({ email, password }); // Busca un usuario con el email y contraseña proporcionados
    return user; // Devuelve el usuario encontrado o null si no existe
  } catch (err) {
    console.error('Error al consultar el usuario:', err); // Manejo de errores
    throw err; // Lanza el error para que pueda ser manejado donde se llame a esta función
  }
}

// Función para obtener todos los usuarios
// metodo para generar las consultas en el terminal "Invoke-RestMethod -Uri http://localhost:5000/users -Method Get"
async function queryAllUsers() {
  try {
    const users = await User.find(); // Busca todos los usuarios en la colección
    return users; // Devuelve la lista de usuarios
  } catch (err) {
    console.error('Error al obtener todos los usuarios:', err); // Manejo de errores
    throw err; // Lanza el error para que pueda ser manejado donde se llame a esta función
  }
}

// Exportar las funciones para usarlas en otros archivos
export { queryUserByEmailAndPassword, queryAllUsers };
