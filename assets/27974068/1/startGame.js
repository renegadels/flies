var StartGame = pc.createScript('startGame');

StartGame.attributes.add('StartEntity', {
    type: 'entity'
});

// initialize code called once per entity
StartGame.prototype.initialize = function() {
    this.entity.element.on('click', function (event) {
        this.app.root.findByName('Start').enabled = false;
        this.app.root.findByName("SpinningCenter").rigidbody.teleport(-0.268, 1.655, 0, [0], [0], [0]);
        this.app.root.findByName("SpinningCenter2").rigidbody.teleport(-0.268, 1.655, 0, [0], [0], [0]);
        this.app.fire('score:reset');
        this.app.root.findByName("Mobile_Controls").enabled = false;
        if (this.entity.name === "Buttonsaviour") {
            this.app.root.findByName("Score").enabled = true;
        }
        this.StartEntity.enabled = true;
    }, this);
};

// update code called every frame
StartGame.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// StartGame.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/