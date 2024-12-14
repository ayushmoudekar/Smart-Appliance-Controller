// script.js

function toggleAppliance(id) {
    const appliance = document.getElementById(id);
    const button = appliance.querySelector('.control-button');
    if (button.textContent === 'ON/OFF') {
        button.textContent = 'OFF';
        button.style.backgroundColor = '#f44336'; // Red for OFF
    } else {
        button.textContent = 'ON/OFF';
        button.style.backgroundColor = '#4caf50'; // Green for ON
    }
}