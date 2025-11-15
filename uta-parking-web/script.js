// Parking data
const scenarios = {
    morning: {
        'Lot 25': { available: 5, total: 150, color: '#FF4444' },
        'Lot 34': { available: 20, total: 200, color: '#FFAA00' },
        'West Garage': { available: 180, total: 400, color: '#44FF44' },
        'Park South': { available: 5, total: 180, color: '#FF4444' }
    },
    afternoon: {
        'Lot 25': { available: 70, total: 150, color: '#44FF44' },
        'Lot 34': { available: 100, total: 200, color: '#44FF44' },
        'West Garage': { available: 220, total: 400, color: '#44FF44' },
        'Park South': { available: 90, total: 180, color: '#44FF44' }
    },
    gameDay: {
        'Lot 25': { available: 0, total: 150, color: '#FF4444' },
        'Lot 34': { available: 0, total: 200, color: '#FF4444' },
        'West Garage': { available: 50, total: 400, color: '#FFAA00' },
        'Park South': { available: 0, total: 180, color: '#FF4444' }
    }
};

let currentScenario = 'morning';
let selectedLot = null;

// Show screen function
function showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    document.getElementById(screenName).classList.add('active');
}

// Initialize the app
function initApp() {
    renderLoginScreen();
    renderMapScreen();
    
    // Show login screen first
    showScreen('login-screen');
}

// Render login screen
function renderLoginScreen() {
    const app = document.getElementById('app');
    
    const loginScreen = document.createElement('div');
    loginScreen.id = 'login-screen';
    loginScreen.className = 'screen login-screen';
    loginScreen.innerHTML = `
        <div class="uta-logo">
            <div class="uta-logo-text">UTA</div>
        </div>
        <h1 class="login-title">MavID Login</h1>
        <div class="login-form">
            <div class="input">MavID Username</div>
            <div class="input">Password</div>
            <button class="login-button" onclick="showScreen('map-screen')">
                SIGN IN →
            </button>
        </div>
        <p class="demo-text">UTA Parking Demo App</p>
    `;
    
    app.appendChild(loginScreen);
}

// Render map screen
function renderMapScreen() {
    const app = document.getElementById('app');
    
    const mapScreen = document.createElement('div');
    mapScreen.id = 'map-screen';
    mapScreen.className = 'screen map-screen';
    
    app.appendChild(mapScreen);
    updateMapScreen();
}

// Update map screen with current data
function updateMapScreen() {
    const mapScreen = document.getElementById('map-screen');
    const parkingData = scenarios[currentScenario];
    
    mapScreen.innerHTML = `
        <div class="header">
            <h1 class="header-title">UTA Parking Map</h1>
            <p class="header-subtitle">Live Parking Availability</p>
        </div>
        
        <div class="map-container">
            ${Object.entries(parkingData).map(([lotName, data]) => `
                <div class="parking-lot" style="background-color: ${data.color}" 
                     onclick="selectLot('${lotName}')">
                    <div class="lot-name">${lotName}</div>
                    <div class="lot-spaces">${data.available} spots available</div>
                </div>
            `).join('')}
        </div>

        <div class="legend">
            <div class="legend-item">
                <div class="legend-color" style="background-color: #44FF44"></div>
                <span class="legend-text">Available</span>
            </div>
            <div class="legend-item">
                <div class="legend-color" style="background-color: #FFAA00"></div>
                <span class="legend-text">Limited</span>
            </div>
            <div class="legend-item">
                <div class="legend-color" style="background-color: #FF4444"></div>
                <span class="legend-text">Full</span>
            </div>
        </div>

        <div class="demo-controls">
            <h3 class="demo-title">Demo Scenarios:</h3>
            <div class="scenario-buttons">
                <button class="scenario-button ${currentScenario === 'morning' ? 'active' : ''}" 
                        onclick="changeScenario('morning')">Morning Rush</button>
                <button class="scenario-button ${currentScenario === 'afternoon' ? 'active' : ''}" 
                        onclick="changeScenario('afternoon')">Afternoon</button>
                <button class="scenario-button ${currentScenario === 'gameDay' ? 'active' : ''}" 
                        onclick="changeScenario('gameDay')">Game Day</button>
            </div>
        </div>
    `;
}

// Render details screen
function renderDetailsScreen() {
    const app = document.getElementById('app');
    
    // Remove existing details screen if any
    const existingDetails = document.getElementById('details-screen');
    if (existingDetails) {
        existingDetails.remove();
    }
    
    const parkingData = scenarios[currentScenario];
    const lot = parkingData[selectedLot];
    
    const detailsScreen = document.createElement('div');
    detailsScreen.id = 'details-screen';
    detailsScreen.className = 'screen details-screen';
    detailsScreen.innerHTML = `
        <div class="header">
            <button class="back-button" onclick="showScreen('map-screen')">← Back to Map</button>
            <h1 class="header-title">${selectedLot}</h1>
        </div>
        
        <div class="details-container">
            <div class="space-count">
                <div class="space-number">${lot.available}</div>
                <div class="space-label">Available Spaces</div>
                <div class="space-total">of ${lot.total} total</div>
            </div>
            
            <button class="navigate-button">GET DIRECTIONS</button>
        </div>
    `;
    
    app.appendChild(detailsScreen);
}

// Change scenario
function changeScenario(scenario) {
    currentScenario = scenario;
    updateMapScreen();
}

// Select lot and show details
function selectLot(lotName) {
    selectedLot = lotName;
    renderDetailsScreen();
    showScreen('details-screen');
}

// Start the app when page loads
document.addEventListener('DOMContentLoaded', initApp);