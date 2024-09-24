// db.js
import mongoose from 'mongoose';  // Importa Mongoose para trabajar con MongoDB

// Conectar a MongoDB usando la URI de la base de datos
const mongoURI = 'mongodb://localhost:27017/users';
mongoose.connect(mongoURI)
  .then(() => console.log('Conectado a MongoDB'))  // Mensaje si la conexión es exitosa
  .catch(err => console.error('Error de conexión a MongoDB:', err));  // Mensaje si hay un error

// Definición del esquema de usuarios basado en los datos de la colección "loginInfo"
const usersInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Campo 'name', tipo String, obligatorio
  email: { type: String, required: true }, // Campo 'email', tipo String, obligatorio
  password: { type: String, required: true }  // Campo 'password', tipo String, obligatorio
}, { collection: 'loginInfo' });  // Especifica que Mongoose use la colección 'loginInfo'

// Crear el modelo de usuario basado en el esquema definido
const User = mongoose.model('User', usersInfoSchema);

// Función para encontrar un usuario por su email
async function findUserByEmail(email) {
  try {
    // Buscar un usuario cuyo email coincida con el pasado como parámetro
    const user = await User.findOne({ email }).maxTimeMS(5000);
    if (user) {
      console.log('Usuario encontrado:', user);  // Muestra el usuario si se encuentra
      return user;  // Devuelve el usuario encontrado
    } else {
      console.log('Usuario no encontrado');  // Mensaje si no se encuentra el usuario
      return null;  // Retorna null si no existe
    }
  } catch (err) {
    console.error('Error al encontrar el usuario:', err);  // Muestra el error si ocurre
    throw err;  // Lanza el error para que se maneje en la función que lo llama
  }
}

// Exportar la función y el modelo para que puedan ser usados en otros archivos
export { findUserByEmail, User };