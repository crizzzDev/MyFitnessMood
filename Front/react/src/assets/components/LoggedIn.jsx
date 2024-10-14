import React, { useState } from 'react';
import '../components/LoggedIn.css'; // Importación del archivo CSS que contiene los estilos de la página
import Footer from './Footer';
import LoggedInHeader from './LoggedInHeader';

function LoggedIn() {
    // Estado que almacena las calorías actuales ingresadas por el usuario
    const [currentCalories, setCurrentCalories] = useState(0);
    const maxCalories = 2000; // Máximo de calorías diarias que el usuario puede consumir

    // Función que actualiza el progreso de calorías basándose en la entrada del usuario
    const updateProgress = (caloriesToAdd) => {
        if (caloriesToAdd <= 0 || isNaN(caloriesToAdd)) {
            alert('Por favor, ingrese una cantidad válida de calorías.');
            return;
        }

        let newCalories = currentCalories + caloriesToAdd;

        // Validación que avisa si las calorías exceden el límite permitido
        if (newCalories > maxCalories) {
            alert('Has excedido tu límite de calorías.');
        }

        setCurrentCalories(newCalories); // Actualiza el estado con las nuevas calorías
    };

    // Maneja el evento de agregar calorías cuando el usuario hace clic en el botón
    const handleAddCalories = () => {
        const caloriesInput = document.getElementById('caloriesInput').value;
        updateProgress(parseInt(caloriesInput)); // Llama a la función para actualizar el progreso
    };

    return (
        <div className="div-sitio"> {/* Contenedor principal de la página */}

            {/* Encabezado con el logo y barra de navegación */}
            <LoggedInHeader/>
            {/* Sección del dashboard de calorías */}
            <div className="calorie-dashboard">
                <div className="dashboard01">
                    <div className="calorie-tracker">
                        <div className="progress-ring"> {/* Representación visual del progreso de calorías */}
                            <svg>
                                <circle className="circle-bg" r="50" cx="50" cy="50"></circle> {/* Círculo de fondo */}
                                <circle className="circle-progress" r="50" cx="50" cy="50"></circle> {/* Círculo de progreso */}
                            </svg>
                            {/* Texto que muestra el estado actual de las calorías consumidas */}
                            <div className="calories-text">
                                {currentCalories} / {maxCalories} Calorías
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard02"> {/* Sección para registrar alimentos */}
                    <h1>Registra tus alimentos</h1>
                    <div className="caloriesInput">
                        <input type="text" id="caloriesInput" placeholder="Ingrese las calorías" /> {/* Input de calorías */}
                        <button onClick={handleAddCalories}>Agregar Calorías</button> {/* Botón para añadir calorías */}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default LoggedIn; // Exportación del componente para poder utilizarlo en otras partes del proyecto