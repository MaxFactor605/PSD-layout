function openMenu(){
    document.querySelector('.menu').style.width = '360px'
    document.querySelector('.menu-but').style.visibility = 'hidden'
    document.querySelector('.close__link').style.visibility = 'visible'
}
function closeMenu(){
    document.querySelector('.close__link').style.visibility = 'hidden'
    document.querySelector('.menu').style.width = '0'
    document.querySelector('.menu-but').style.visibility = 'visible'
}