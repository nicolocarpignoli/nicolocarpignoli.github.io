AFRAME.registerComponent('markerhandler', {
    init: function() {
        const vid = document.querySelector('#vid');
        this.el.sceneEl.addEventListener('markerFound', () => {
            // redirect to custom URL
            vid.play();
        });
        this.el.sceneEl.addEventListener('markerLost', () => {
            // redirect to custom URL
            vid.pause();
        });
}});
