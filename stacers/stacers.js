// Function to handle animation for features
function handleFeaturesAnimation() {
    const features = document.querySelectorAll('#features .animate-on-scroll');
    const triggerPoint = window.innerHeight * 0.85;

    features.forEach((feature) => {
        const elementTop = feature.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            feature.classList.add('scrolled-in');
        } else {
            feature.classList.remove('scrolled-in');
        }
    });
}

// Function to handle animation for the mission statement
function handleMissionAnimation() {
    const mission = document.querySelector('#mission');
    const triggerPoint = window.innerHeight * 0.75;

    if (mission) {
        const elementTop = mission.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            mission.classList.add('scrolled-in');
        } else {
            mission.classList.remove('scrolled-in');
        }
    }
}

// Master scroll handler
function handleScrollAnimations() {
    handleFeaturesAnimation();
    handleMissionAnimation();
}

// Event listener for scroll
window.addEventListener('scroll', handleScrollAnimations);

// Trigger animation on page load
document.addEventListener('DOMContentLoaded', handleScrollAnimations);
