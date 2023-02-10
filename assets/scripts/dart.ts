// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    onBeginContact(contact, selfCollider, otherCollider) {
        if (otherCollider.node.name == 'Player') {
            var player = otherCollider.node.getComponent('player');
            player.hurt = true;
            if (selfCollider.node.x > otherCollider.node.x) {
                player.flag = true; // 往左弹
            } else {
                player.flag = false; // 往右弹
            }
        }

        contact.disabled = true;
    }
}
