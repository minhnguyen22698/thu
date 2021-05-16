const Emitter = require('Emitter')
cc.Class({
    extends: cc.Component,
    properties: {
        play: cc.Button,
        setting: cc.Button,
        qa: cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.qa.node.on('click', this.onQa.bind(this))
        this.play.node.on('click', this.onPlay.bind(this))
    },

    start() {},
    onPlay() {
        Emitter.instance.emit('changeScreen', 'playScreen')
    },
    onQa() {

    },

    // update (dt) {},
});