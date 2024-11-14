// html.js
import { Vars } from './vars.js';

export const Html = {
  set() {
    this.setRoundTitle();
    this.setContent();
  },
  setRoundTitle() {
    if (Vars.curRound > 1) {
      document.getElementById('roundTitle').innerText = `${Vars.curRound}강 선택`;
    } else {
      document.getElementById('roundTitle').innerText = `축하합니다. 최애 미넌이 선정되었습니다.`;
    }
  },
  setItem() {
    // 로직 구현
  },
  setContent() {
    // 로직 구현
  }
};