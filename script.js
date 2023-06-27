let section = document.querySelectorAll('section');
let lists = document.querySelectorAll('.nav-item');
function activeLink(li) {
    lists.forEach((item) => item.classList.remove('nav-active'));
    li.classList.add('nav-active');
}
lists.forEach((item) =>
    item.addEventListener('click', function(){
        activeLink(this);
    }));

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            const target = document.querySelector(`[href='#${id}']`).parentElement;
            activeLink(target);
        }
    })
};