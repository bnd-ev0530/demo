// ctrl.js
import { Vars } from './vars.js';
import { Html } from './html.js';

export const Ctrl = {
  getLists() {
    return [ /* 같은 목록 */ ];
  },
  rndLists(arr) {
    return arr.map((n) => [Math.random(), n]).sort().map((n) => n[1]);
  },
  selectedLists(arr) {
    return arr.filter((n) => n.selected === true);
  },
  gameNewStart() {
    Vars.gameHistory[Vars.curRound.toString()] = this.rndLists(Vars.lists);
    Html.set(); // Html 모듈에서 set 함수 호출
  },
  copyObj(obj) {
    let copy = {};
    for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = obj[attr];
      }
    }
    copy.selected = false;
    return copy;
  },
  nextRound() {
    if (Vars.curRound <= 1) return;
    Vars.lists = this.selectedLists(Vars.gameHistory[Vars.curRound.toString()]).map(n => this.copyObj(n));
    if (Vars.curRound > 1) Vars.curRound /= 2;
    Vars.curStage = 0;
    Vars.gameHistory[Vars.curRound.toString()] = this.rndLists(Vars.lists);
    Html.setRoundTitle(); // Html 모듈에서 setRoundTitle 함수 호출
  },
  prevCancelOnOff() {
    const footerObj = document.getElementById('footer');
    if (Vars.curRound === Vars.maxRound) {
      footerObj.className = Vars.curRound > 1 && Vars.curStage > 0 ? 'footer' : 'footer soff';
    } else {
      footerObj.className = Vars.curRound > 1 ? 'footer' : 'footer soff';
    }
  }
};