// Change theme of page between dark and light

function changeTheme() {
    const body = document.body;
    const icon = document.getElementById('themeSwitcher');

    if (body.classList.contains('darkTheme')) {
        body.classList.remove('darkTheme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        body.classList.add('darkTheme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}    