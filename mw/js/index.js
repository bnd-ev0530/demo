// index.js
import { Vars } from './vars.js';
import { init } from './init.js';
import { Ctrl } from './ctrl.js';
import { Event } from './event.js';
import { Html } from './html.js';

const lezhin = {
    Vars: Vars,
    Ctrl: Ctrl,
    Event: Event,
    Html: Html,
    init: init,
    start: function() {
      this.init();
      this.Ctrl.gameNewStart();
    }
  };
  
  // 전역(window) 객체에 lezhin 할당
  window.lezhin = lezhin;