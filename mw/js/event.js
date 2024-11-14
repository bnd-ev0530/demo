// event.js
import { Vars } from './vars.js';
import { Ctrl } from './ctrl.js';
import { Html } from './html.js';

export const Event = {
  clickItem(obj) {
    if (Vars.curRound === 1) return;
    const idx = obj.id.split('_')[1];
    Vars.gameHistory[Vars.curRound.toString()][idx].selected = true;
    if (Vars.curStage < Vars.curRound / 2) Vars.curStage++;
    if (Vars.curStage === Vars.curRound / 2) Ctrl.nextRound();
    Html.setItem();
    Ctrl.prevCancelOnOff();
  },
  // 나머지 이벤트 함수들도 동일한 구조로 분리
};