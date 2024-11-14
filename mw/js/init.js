// init.js
import { Vars } from './vars.js';
import { Ctrl } from './ctrl.js';

export const init = () => {
  Vars.curRound = 16;
  Vars.curStage = 0;
  Vars.gameHistory = {
    '16': [], '8': [], '4': [], '2': [], '1': []
  };
  Vars.lists = Ctrl.getLists();
  Ctrl.prevCancelOnOff();
};