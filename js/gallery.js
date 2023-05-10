
const images = document.querySelectorAll('img');
const fullpage = document.getElementById('fullpage');

// Show images in fullscreen when clicked
images.forEach(image => {
    image.addEventListener('click', function () {
        fullpage.style.backgroundImage = 'url(' + image.src + ')';
        fullpage.style.display = 'block';
    })
});