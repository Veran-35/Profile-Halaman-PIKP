const mudarElement = document.getElementById('mudar')

if (mudarElement !== null) {
    mudarElement.addEventListener('scroll', e => {
        const totalScrollWidth = e.currentTarget.scrollWidth;
        const visibleWidth = e.currentTarget.clientWidth;
        const currentScrollPosition = e.currentTarget.scrollLeft;

        const isAtEnd = currentScrollPosition + visibleWidth >= totalScrollWidth - 1; // Allowing 1px buffer


        if (isAtEnd) {
            e.currentTarget.parentElement.classList.remove('fade-effect');
        } else {
            e.currentTarget.parentElement.classList.add('fade-effect');
        }
    });
}

const header = document.getElementById('target-this')

window.addEventListener('scroll', e => {




    if (window.pageYOffset >= document.getElementById('hero').clientHeight / 1.5) {
        header.classList.add('bg-white', 'test', 'shadow-lg')

        document.querySelector('.pota').classList.add('fix-the-color')
    } else {
        header.classList.remove('bg-white', 'test', 'shadow-lg')
        document.querySelector('.pota').classList.remove('fix-the-color')
    }
})