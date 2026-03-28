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
