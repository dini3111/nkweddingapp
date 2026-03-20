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
