
var defaultCfg={
  route:{
    getCode:'/getCode',
  },
  loggerName:'ligle-addon-captcha',
  loggerLevel:'TRACE',
};

function checkDependencies(){
  // check dependencies here
  // example
  // if(!ligle.model.Member) throw Error('xxx-addon need ligle.model.Member');
}

module.exports = function(ligle,cfg){//jshint ignore:line
  ligle.addon = ligle.addon || {};

  if(ligle.addon.captcha) {
    return;
  }
  checkDependencies();
  var exportObj = {};

  var config = ligle.util.configure(cfg,defaultCfg);
  var engineLogLevel = ligle.cfg.loggerLevel;
  if(engineLogLevel) { // use loggerLevel of engine.
    config = ligle.util.configure({loggerLevel:engineLogLevel},config);
  }

  var logger = ligle.util.logger(config.loggerName,config.loggerLevel);

  // used for other files to get logger, cfg and ligle
  module.exports.logger = logger;
  module.exports.cfg = config;
  module.exports.ligle = ligle;

  logger.trace('verifyCode addon:',config);

  // exported
  exportObj.route = require('./get-code.js');
  exportObj.midware = {};
  exportObj.midware.checkCode = require('./verify-code.js').checkCode;
  exportObj.midware.getCode = require('./verify-code.js').getCode;

  ligle.addon.captcha = exportObj;

  return exportObj;
};
