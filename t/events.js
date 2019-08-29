AFRAME.registerComponent('markerhandler', {
    init: function() {
        const entity = document.getElementById('entity');
        if (entity) {
            entity.addEventListener('model-loaded', function(){
                alert('loaded')
            });
        }
}});
