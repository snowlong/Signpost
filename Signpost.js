'use strict';

window.Signpost = window.Signpost || {};
window.Signpost = {
  LEVEL: {
    RUN   : 0,
    ERROR : 1,
    WARN  : 2,
    LOG   : 3,
    INFO  : 4,
    DEBUG : 5,
    FULL  : 5,
  },
  level: null,
  init: function(level) {
    this.level = level || this.LEVEL.FULL;
  },
  debug: function(msg) {
    (this.level >= this.LEVEL.DEBUG) && console.debug(msg);
  },
  info: function(msg) {
    (this.level >= this.LEVEL.INFO) && console.debug(msg);
  },
  log: function(msg) {
    (this.level >= this.LEVEL.LOG) && console.debug(msg);
  },
  warn: function(msg) {
    (this.level >= this.LEVEL.WARN) && console.debug(msg);
  },
  error: function(msg) {
    (this.level >= this.LEVEL.ERROR) && console.debug(msg);
  }
};
