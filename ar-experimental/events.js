AFRAME.registerComponent('markerhandler', {
    init: function() {
        // start video at click anywhere
        document.body.addEventListener('click', function(){
            const video = document.querySelector('a-video');
            video.play();
        });
}});
