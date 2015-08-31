var index = require('./index.js');
var ligle = index.ligle;

module.exports = ligle.model.ModelBase.extend({
  __className:'rf-session',
  __upDir:'rf-session',
  init:function(obj){
    this._super(obj);
  },
  coll:{name:'rf-session',fields:{}},
  rest:{}
});
