/*
Copyright 2013, KISSY v1.50dev
MIT Licensed
build time: Dec 2 15:17
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 editor/plugin/indent/cmd
*/

KISSY.add("editor/plugin/indent/cmd", ["../dent-cmd"], function(S, require) {
  var dentUtils = require("../dent-cmd");
  var addCommand = dentUtils.addCommand;
  return{init:function(editor) {
    addCommand(editor, "indent")
  }}
});

