// Function to get or create a unique identifier for this browser/device
function getBrowserFingerprint() {
    try {
        // Check if we already have an ID stored
        let fingerprint = localStorage.getItem('browserFingerprint');
        
        // If not, create one based on browser properties
        if (!fingerprint) {
            // Create a simple fingerprint based on available browser information
            const components = [
                navigator.userAgent,
                navigator.language,
                screen.width,
                screen.height,
                new Date().getTimezoneOffset(),
                navigator.platform || 'unknown',
                navigator.hardwareConcurrency || 'unknown',
                navigator.deviceMemory || 'unknown'
            ];
            
            // Generate a string and get a hash-like number from it
            const baseStr = components.join('||||');
            let hashNum = 0;
            
            for (let i = 0; i < baseStr.length; i++) {
                const char = baseStr.charCodeAt(i);
                hashNum = ((hashNum << 5) - hashNum) + char;
                hashNum = hashNum & hashNum; // Convert to 32bit integer
            }
            
            // Make sure it's positive
            fingerprint = Math.abs(hashNum).toString();
            
            // Store it for future visits
            try {
                localStorage.setItem('browserFingerprint', fingerprint);
            } catch (e) {
                console.log("Unable to store in localStorage, but continuing with generated fingerprint");
            }
        }
        
        return fingerprint;
    } catch (error) {
        console.error("Error generating fingerprint:", error);
        // Return a fallback random fingerprint if there's an error
        return Math.floor(Math.random() * 1000000).toString();
    }
}

// Function to detect device type
function getDeviceType() {
    try {
        const userAgent = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
            return "tablet";
        } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
            return "mobile";
        }
        return "desktop";
    } catch (error) {
        console.error("Error detecting device type:", error);
        return "desktop"; // Default fallback
    }
}

// Function to get a simulated temperature based on fingerprint
function getTemperature(fingerprint) {
    try {
        const tempKeys = Object.keys(temperatures.celsius);
        const tempKey = tempKeys[parseInt(fingerprint.slice(-5)) % tempKeys.length];
        
        // Decide whether to use Celsius or Fahrenheit
        const usesCelsius = navigator.language !== "en-US"; // Simple logic - non-US users get Celsius
        
        if (usesCelsius) {
            return temperatures.celsius[tempKey] + " (" + temperatures.fahrenheit[tempKey] + ")";
        } else {
            return temperatures.fahrenheit[tempKey] + " (" + temperatures.celsius[tempKey] + ")";
        }
    } catch (error) {
        console.error("Error getting temperature:", error);
        return "70°F (21°C)"; // Default fallback temperature
    }
}

// Function to get greeting based on time of day
function getTimeGreeting() {
    try {
        const hour = new Date().getHours();
        
        if (hour >= 5 && hour < 12) {
            return timeGreetings.morning;
        } else if (hour >= 12 && hour < 17) {
            return timeGreetings.afternoon;
        } else if (hour >= 17 && hour < 22) {
            return timeGreetings.evening;
        } else {
            return timeGreetings.night;
        }
    } catch (error) {
        console.error("Error getting time greeting:", error);
        return "Hello"; // Default fallback greeting
    }
}

// Function to get browser name
function getBrowserName() {
    try {
        const userAgent = navigator.userAgent;
        let browserName;
        
        if (userAgent.match(/chrome|chromium|crios/i)) {
            browserName = "Chrome";
        } else if (userAgent.match(/firefox|fxios/i)) {
            browserName = "Firefox";
        } else if (userAgent.match(/safari/i)) {
            browserName = "Safari";
        } else if (userAgent.match(/opr\//i)) {
            browserName = "Opera";
        } else if (userAgent.match(/edg/i)) {
            browserName = "Edge";
        } else {
            browserName = "Unknown browser";
        }
        
        return browserName;
    } catch (error) {
        console.error("Error getting browser name:", error);
        return "your browser"; // Default fallback
    }
}

// Helper function to determine if a color is dark
function isColorDark(hexColor) {
    try {
        // Convert hex to RGB
        const r = parseInt(hexColor.substr(1, 2), 16);
        const g = parseInt(hexColor.substr(3, 2), 16);
        const b = parseInt(hexColor.substr(5, 2), 16);
        
        // Calculate perceived brightness (YIQ equation)
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        
        // Return true if color is dark
        return brightness < 128;
    } catch (error) {
        console.error("Error determining color brightness:", error);
        return false; // Default fallback
    }
}

// Function to generate the welcome message
function generateWelcomeMessage(fingerprint) {
    try {
        // Get device info
        const deviceType = getDeviceType();
        const deviceTypeArray = deviceTypes[deviceType];
        const deviceName = deviceTypeArray[parseInt(fingerprint.slice(0, 4)) % deviceTypeArray.length];
        
        // Get location (simulated)
        const city = cities[parseInt(fingerprint.slice(4, 8)) % cities.length];
        
        // Get weather (simulated)
        const weatherType = weatherTypes[parseInt(fingerprint.slice(8, 12)) % weatherTypes.length];
        const temperature = getTemperature(fingerprint);
        
        // Get time greeting
        const greeting = getTimeGreeting();
        
        // Get browser
        const browser = getBrowserName();
        
        // Build message
        return `<p>${greeting}! Thank you for opening this website from your <span>${deviceName}</span> in <span>${city}</span>, where it's currently <span>${weatherType}</span> with a temperature of <span>${temperature}</span>.</p>
        <p>We see you're browsing with <span>${browser}</span> ${navigator.userAgent.includes("Mobile") ? "on a mobile device" : ""}. Based on your unique browser fingerprint, we've created a personalized experience just for you.</p>`;
    } catch (error) {
        console.error("Error generating welcome message:", error);
        return "<p>Welcome to your personalized experience!</p>"; // Default fallback message
    }
}

// Function to set up the personalized experience
function setupExperience() {
    try {
        // Show loading screen
        document.getElementById('loading-screen').style.opacity = '1';
        
        // Simulate loading time for dramatic effect (1.5 seconds)
        setTimeout(() => {
            try {
                const fingerprint = getBrowserFingerprint();
                
                // We'll use different parts of the fingerprint for different aspects of personalization
                
                // Determine title (using modulo to get index)
                const titleIndex = parseInt(fingerprint.slice(0, 5)) % siteTitles.length;
                const siteTitle = siteTitles[titleIndex];
                document.getElementById('site-title').textContent = siteTitle;
                document.title = siteTitle; // Also update the page title
                
                // Update subtitle
                document.getElementById('subtitle').textContent = "A uniquely personalized experience";
                
                // Determine background color
                const colorIndex = parseInt(fingerprint.slice(5, 10)) % backgroundColors.length;
                document.body.style.backgroundColor = backgroundColors[colorIndex];
                
                // Determine welcome box color
                const welcomeBoxIndex = parseInt(fingerprint.slice(10, 15)) % welcomeBoxColors.length;
                const welcomeBox = document.getElementById('welcome-message');
                welcomeBox.style.backgroundColor = welcomeBoxColors[welcomeBoxIndex].bg;
                welcomeBox.style.borderLeftColor = welcomeBoxColors[welcomeBoxIndex].border;
                
                // Generate and set welcome message
                welcomeBox.innerHTML = generateWelcomeMessage(fingerprint);
                
                // Determine which story to show
                const storyIndex = parseInt(fingerprint.slice(15, 20)) % stories.length;
                const story = stories[storyIndex];
                document.getElementById('story-title').textContent = story.title;
                document.getElementById('story-content').innerHTML = story.content;
                
                // Adjust footer color based on background for contrast
                const isDarkColor = isColorDark(backgroundColors[colorIndex]);
                
                if (isDarkColor) {
                    document.querySelector('footer').style.color = 'rgba(255,255,255,0.9)';
                    document.querySelector('header').style.color = 'rgba(255,255,255,0.9)';
                } else {
                    document.querySelector('footer').style.color = 'rgba(0,0,0,0.7)';
                    document.querySelector('header').style.color = 'rgba(0,0,0,0.8)';
                }
                
                // Hide loading screen
                document.getElementById('loading-screen').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('loading-screen').style.display = 'none';
                }, 1000);
            } catch (setupError) {
                console.error("Error during setup:", setupError);
                // Emergency fallback - at least hide the loading screen
                document.getElementById('loading-screen').style.display = 'none';
                
                // Show a basic experience
                document.getElementById('site-title').textContent = "Your Personalized Experience";
                document.getElementById('welcome-message').innerHTML = "<p>Welcome! Something went wrong with the personalization, but we've prepared a story for you anyway.</p>";
                
                // Show at least one story
                document.getElementById('story-title').textContent = stories[0].title;
                document.getElementById('story-content').innerHTML = stories[0].content;
            }
        }, 1500);
    } catch (error) {
        console.error("Critical error in setup:", error);
        // Last resort fallback
        document.getElementById('loading-screen').style.display = 'none';
        alert("Sorry, there was a problem loading the personalized experience. Please refresh the page to try again.");
    }
}

// Initialize the experience when the page loads
document.addEventListener('DOMContentLoaded', setupExperience);
