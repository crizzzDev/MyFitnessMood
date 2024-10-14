// CalorieTracker.jsx
import React, { useState } from 'react';

const CalorieTracker = () => {
  const [currentCalories, setCurrentCalories] = useState(0);
  const maxCalories = 2000;

  const addCalories = (caloriesToAdd) => {
    const newCalories = currentCalories + caloriesToAdd;
    setCurrentCalories(newCalories);
  };

  const handleAddCalories = () => {
    const caloriesInput = document.getElementById('caloriesInput').value;
    const caloriesToAdd = parseInt(caloriesInput);
    if (isNaN(caloriesToAdd) || caloriesToAdd <= 0) {
      alert('Por favor, ingrese una cantidad válida de calorías.');
      return;
    }
    addCalories(caloriesToAdd);
  };

  const excessCalories = currentCalories > maxCalories ? currentCalories - maxCalories : 0;
  const isExceeded = currentCalories > maxCalories;
  const percentage = Math.min((currentCalories / maxCalories) * 100, 100);

  return (
    <div className="calorie-dashboard">
      <div className="dashboard01">
        <div className="calorie-tracker">
          <div className="progress-ring">
            <svg>
              <circle className="circle-bg" r="50" cx="50" cy="50"></circle>
              <circle
                className="circle-progress"
                r="50"
                cx="50"
                cy="50"
                style={{ strokeDasharray: `${(percentage / 100) * 251}, 251` }}
              ></circle>
            </svg>
            <div className="calories-text">
              {isExceeded ? `${excessCalories} Calorías Excedidas` : `${currentCalories} / ${maxCalories} Calorías`}
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard02">
        <h1>Registra tus alimentos</h1>
        <div className="caloriesInput">
          <input type="text" id="caloriesInput" placeholder="Ingrese las calorías" />
          <button onClick={handleAddCalories}>Agregar Calorías</button>
        </div>
      </div>
    </div>
  );
};

export default CalorieTracker;