/*INICIO nav mobile responsive display*/
document.addEventListener('DOMContentLoaded', function() {
    const sidebarButton = document.querySelector('.mobile-menu-icon');
    sidebarButton.addEventListener('click', showSidebar);
});

function showSidebar() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.classList.add('show'); // Añadir la clase para mostrar la barra lateral

    // Agregar el evento para cerrar la barra lateral
    const closeButton = sidebar.querySelector('.mobile-close-icon');
    closeButton.addEventListener('click', hideSidebar);
}

function hideSidebar() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.classList.remove('show'); // Remover la clase para ocultar la barra lateral
}
/*FIN nav mobile responsive display*/

/*INICIO DropDown menu*/
document.addEventListener('DOMContentLoaded', function() {
    const userIcon = document.querySelector('.user-icon');
    const dropdown = userIcon.closest('.dropdown');

    userIcon.addEventListener('click', function() {
        dropdown.classList.toggle('show');
    });

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.user-icon')) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    });
});
/*FIN DropDown menu*/

/*INICIO tracker de calorias*/
let currentCalories = 0;
const maxCalories = 2000;
const circleProgress = document.querySelector('.circle-progress');
const caloriesText = document.querySelector('.calories-text');
const caloriesInput = document.getElementById('caloriesInput');

function updateProgress() {
    const caloriesToAdd = parseInt(caloriesInput.value);
    if (isNaN(caloriesToAdd) || caloriesToAdd <= 0) {
        alert('Por favor, ingrese una cantidad válida de calorías.');
        return;
    }
    
    currentCalories += caloriesToAdd;
    
    const excessCalories = currentCalories - maxCalories;
    const isExceeded = currentCalories > maxCalories;

    let percentage = (currentCalories / maxCalories) * 100;
    if (percentage > 100) {
        percentage = 100;
    }

    const dashArrayValue = (percentage / 100) * 251; // 251 is the circumference of the circle (2 * π * radius)
    circleProgress.style.strokeDasharray = `${dashArrayValue}, 251`;

    if (isExceeded) {
        caloriesText.textContent = `${excessCalories} Calorías Excedidas`;
    } else {
        caloriesText.textContent = `${currentCalories} / ${maxCalories} Calorías`;
    }

    // Limpiar el campo de entrada después de agregar calorías
    caloriesInput.value = '';
}

function addCalories() {
    updateProgress();
}
/*FIN Tracker de calorias*/