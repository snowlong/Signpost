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
    this.avoidError();
  },
  avoidError: function() {
    // For IE9, NOT defined console.
    // So avoid error, define console methods.
    if(typeof console === "undefined") {
      var console = {
        debug: function(msg) {
          ;
        },
        info: function(msg) {
          ;
        },
        log: function(msg) {
          ;
        },
        warn: function(msg) {
          ;
        },
        error: function(msg) {
          ;
        }
      };
    }
  },
  debug: function(msg) {
    (this.level >= this.LEVEL.DEBUG) && console.debug(msg);
  },
  info: function(msg) {
    (this.level >= this.LEVEL.INFO) && console.info(msg);
  },
  log: function(msg) {
    (this.level >= this.LEVEL.LOG) && console.log(msg);
  },
  warn: function(msg) {
    (this.level >= this.LEVEL.WARN) && console.warn(msg);
  },
  error: function(msg) {
    (this.level >= this.LEVEL.ERROR) && console.error(msg);
  }
};
