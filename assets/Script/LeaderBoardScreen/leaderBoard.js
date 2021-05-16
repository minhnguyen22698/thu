// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        leaderItem: {
            default: null,
            type: cc.Prefab,
        },
        leaderBoard: {
            default: null,
            type: cc.ScrollView
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.loadItem();
        cc.log(this.leaderBoard.content)
    },

    start() {},

    loadItem() {
        let itemData = JSON.parse(cc.sys.localStorage.getItem("leaderboard"));
        cc.log(itemData);
        if (itemData !== null) {
            itemData.sort((a, b) => {
                if (a.score > b.score) return -1;
                if (b.score > a.score) return 1;
                return 0;
            })
            itemData.map((item, index) => {
                let itemTemp = cc.instantiate(this.leaderItem)
                let itemDetail = itemTemp.getComponent('item')
                itemDetail.setItem(item, index + 1)
                cc.log(this.leaderBoard.content)
                cc.log(itemTemp)
                this.leaderBoard.content.addChild(itemTemp, 0)
                cc.log(itemDetail)
                cc.log(index)
            });
        }
    },


    // update (dt) {},
});