document.querySelectorAll('.reiting, .reiting__love')
    .forEach(button => button.addEventListener('click', e => button.classList
        .toggle('active')));