const open = () => {
    let icon = document.querySelector('nav .icon');
    let ul = document.querySelector('nav ul');
    icon.addEventListener('click', function() {
        ul.classList.toggle('open');
    })
}
open();