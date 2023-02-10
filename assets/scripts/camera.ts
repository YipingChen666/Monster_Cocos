// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    target: cc.Node = null;
    camera: cc.Camera = null;

    onLoad() {
        this.camera = this.getComponent(cc.Camera);
    }

    lateUpdate(dt) {
        let bg = this.node.parent.getChildByName('Bg');
        let bgCount = bg.childrenCount;
        let cameraEnd = (bgCount - 1) * bg.children[0].width;

        var x = this.target.x;
        if (x > 0) {
            this.node.x = x;
        }
        if (x > cameraEnd) {
            this.node.x = cameraEnd;
        }
    }
}
