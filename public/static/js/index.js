const navMenu = document.querySelector('.nav-menu-toggle');
const navaItem = document.querySelectorAll('.nav-item-one');
const navRatings = document.querySelector('.nav-item-ratings');

navMenu.addEventListener('click', () => {
    document.querySelector('.nav-menu-sgv').classList.toggle('hidden');
    document.querySelector('.nav-close-sgv').classList.toggle('tabMb_d-block');

    document.querySelector('.nav-home').classList.toggle('tabMb_d-none');
    document.querySelector('.nav-list').classList.toggle('hidden');
});

for (let i = 0; i < navaItem.length; i++) {
    navaItem[i].onclick = () => {
        console.log(document.querySelectorAll('.nav-item-child')[i]);
        document.querySelectorAll('.nav-item-child')[i].classList.toggle('tabMb_d-block');
    };
}

$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 8,
    nav: false,
    responsiveClass: true,
    dots: false,
    responsive: {
        0: {
            items: 2,
        },
        540: {
            items: 3,
        },
        640: {
            items: 4,
            margin: 12,
        },
        1280: {
            items: 6,
            margin: 12,
        },
    },
});
