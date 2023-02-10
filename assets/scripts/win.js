cc.Class({
    extends: cc.Component,

    properties: {
        openDoorSprite: { type: cc.SpriteFrame, default: null }
    },

    onBeginContact: function (contact, selfCollider, otherCollider) {
        this.getComponent(cc.Sprite).spriteFrame = this.openDoorSprite;
        console.log("win");
        if (otherCollider.node.name == 'Player') {
            // var nodeWin = selfCollider.node.parent.parent.getChildByName('Animation').getChildByName('Win');
            var nodeWin = cc.find("Canvas/Camera/Win");
            var animWin = nodeWin.getComponent(cc.Animation);

            animWin.play();
            this.scheduleOnce(function () {
                cc.director.loadScene("StartMenu")
            },2)
        }

        contact.disabled = true;
    },

    start() {

    },

    // update (dt) {},
});
