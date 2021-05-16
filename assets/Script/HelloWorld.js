const Emitter = require("Emitter");
cc.Class({
    extends: cc.Component,

    properties: {
        mainScreen: cc.Node,
        playScreen: cc.Node,
        leaderBoardScene: cc.Node,
    },

    // use this for initialization
    onLoad: function() {
        Emitter.instance = new Emitter();
        // this.playScreen.active = false;
        // this.leaderBoardScene.active = false
        Emitter.instance.registerEvent("changeScreen", this.changeRoute.bind(this));
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },
    onKeyDown(evt) {
        Emitter.instance.emit("onMove", evt.keyCode);
    },
    onKeyUp(evt) {
        Emitter.instance.emit("stopMove", evt.keyCode);
    },
    changeRoute(arg) {
        cc.log(arg);
        switch (arg) {
            case "mainScreen":
                {
                    cc.log('main')
                    this.mainScreen.active = true;
                    this.playScreen.active = false;
                    this.leaderBoardScene.active = false
                    break;
                }
            case "playScreen":
                {
                    cc.log('play')
                    this.mainScreen.active = false;
                    this.playScreen.active = true;
                    break;
                }
            case "leaderBoardScreen":
                {
                    this.playScreen.active = false;
                    this.mainScreen.active = false;
                    this.leaderBoardScene.active = true
                    break;
                }
                // default:
                //     {
                //         cc.log('default')
                //         this.mainScreen.active = true;
                //         this.playScreen.active = false;
                //     }
        }
    },
    update: function(dt) {},
});