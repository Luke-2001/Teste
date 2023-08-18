const video = document.getElementById('video');

video.addEventListener('canplaythrough', function () {
    video.play();
});
