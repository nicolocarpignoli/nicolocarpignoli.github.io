AFRAME.registerComponent('markerhandler', {
    init: function() {
        this.el.sceneEl.addEventListener('markerFound', () => {
            // redirect to custom URL
            document.querySelector('#vid').play();
        });
        this.el.sceneEl.addEventListener('markerLost', () => {
            // redirect to custom URL
            document.querySelector('#vid').pause();
        });
}});
