// Falling Petals Animation - Low Visibility
function createFallingFlower() {
    const container = document.getElementById('flowersContainer');
    
    if (!container) return;
    
    const flower = document.createElement('div');
    // Petal symbols - delicate and small
    const petals = ['✿', '❀', '✾', '✽', '❁', '♡', '♥'];
    const randomPetal = petals[Math.floor(Math.random() * petals.length)];
    const randomLeft = Math.random() * 100;
    const randomDuration = Math.random() * 3 + 8; // 8-11 seconds for slower fall
    const driftType = Math.random();
    
    flower.className = 'flower';
    if (driftType < 0.33) {
        flower.classList.add('float-left');
    } else if (driftType < 0.66) {
        flower.classList.add('float-right');
    }
    
    // Add beautiful colors to petals
    const colors = ['#d9a05b', '#c9755d', '#e8c69c', '#a85a6a', '#d4a574', '#c67c7e', '#e5a89e', '#b8715f', '#d1a97a'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    flower.textContent = randomPetal;
    flower.style.left = randomLeft + '%';
    flower.style.animationDuration = randomDuration + 's';
    flower.style.color = randomColor;
    flower.style.textShadow = `0 0 6px ${randomColor}, 0 0 12px ${randomColor}80`;
    // Enhanced opacity for better visibility
    flower.style.opacity = (0.45 + Math.random() * 0.35).toString();
    
    container.appendChild(flower);
    
    // Remove petal after animation completes
    setTimeout(() => {
        flower.remove();
    }, randomDuration * 1000);
}

// Start falling petals animation on page load
window.addEventListener('load', function() {
    // Create initial burst of petals
    for (let i = 0; i < 8; i++) {
        setTimeout(() => createFallingFlower(), i * 200);
    }
    
    // Create new petals continuously - less frequent for subtlety
    setInterval(createFallingFlower, 1200);
});

// Also start if DOMContentLoaded fires first
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => createFallingFlower(), i * 300);
        }
    });
}

// Audio playback management
const bgMusic = document.getElementById('bgMusic');
const playMusicBtn = document.getElementById('playMusicBtn');
let isPlaying = false;

function toggleAudio() {
    if (!bgMusic) return;
    
    if (isPlaying) {
        bgMusic.pause();
        isPlaying = false;
        if (playMusicBtn) playMusicBtn.innerHTML = '🔊 Play Music';
    } else {
        startAudioPlayback();
    }
}

function startAudioPlayback() {
    if (!bgMusic || isPlaying) return;
    
    bgMusic.muted = false;
    bgMusic.volume = 0.3;
    
    let playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log('✓ Audio playing successfully');
                isPlaying = true;
                if (playMusicBtn) {
                    playMusicBtn.style.display = 'block';
                    playMusicBtn.innerHTML = '🔇 Mute Music';
                }
            })
            .catch(error => {
                console.log('✗ Autoplay blocked:', error.message);
                if (playMusicBtn) {
                    playMusicBtn.style.display = 'block';
                    playMusicBtn.innerHTML = '🔊 Play Music';
                }
            });
    }
}

// Manual play button
if (playMusicBtn) {
    playMusicBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleAudio();
    });
}

// Scroll-based heading transformation
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('header.hero');
    const h1 = document.querySelector('h1');
    const wedsText = document.querySelector('.weds-text');
    
    if (!heroSection || !h1 || !wedsText) return;
    
    const heroBottom = heroSection.getBoundingClientRect().bottom;
    
    // If scrolled past hero section (hero bottom is above viewport)
    if (heroBottom < 100) {
        // Change to single line with heart
        h1.classList.add('scroll-mode');
        wedsText.textContent = '💕';
    } else {
        // Back to cascade layout with weds
        h1.classList.remove('scroll-mode');
        wedsText.textContent = 'weds';
    }
});

function openTab(evt, tabName) {
    // 1. Hide all elements with the class "tab-content"
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // 2. Remove the "active" class from all tab buttons
    const tablinks = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // 3. Show the current tab, and add the "active" class to the button that was clicked
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Switch between Telugu and English Patrika
function switchLanguage(lang) {
    document.getElementById('lang-te').style.display = lang === 'te' ? 'block' : 'none';
    document.getElementById('lang-en').style.display = lang === 'en' ? 'block' : 'none';

    const langBtns = document.getElementsByClassName("lang-btn");
    langBtns[0].classList.toggle("active", lang === 'te');
    langBtns[1].classList.toggle("active", lang === 'en');

    // Toggle royal scroll card theme for English
    const patrikaCard = document.querySelector('.patrika-card');
    if (lang === 'en') {
        patrikaCard.classList.add('scroll-theme');
    } else {
        patrikaCard.classList.remove('scroll-theme');
    }
}
