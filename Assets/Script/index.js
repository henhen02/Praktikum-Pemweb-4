function darkMode() {
    document.body.classList.toggle('dark');
}

const darkButton = document.querySelector('#slide');
darkButton.addEventListener('click', darkMode)