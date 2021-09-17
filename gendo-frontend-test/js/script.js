var btn = document.querySelector('.sectionCollapseImage');
var screens = document.querySelector('.screens');


btn.addEventListener('click', function() {
    if(screens.style.display === 'flex') {
        screens.style.display = 'none';
    } else {
        screens.style.display = 'flex';
    }
});


