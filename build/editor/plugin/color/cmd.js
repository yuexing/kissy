/*
Copyright 2013, KISSY v1.50dev
MIT Licensed
build time: Dec 2 15:15
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 editor/plugin/color/cmd
*/

KISSY.add("editor/plugin/color/cmd", ["editor"], function(S, require) {
  var Editor = require("editor");
  function applyColor(editor, c, styles) {
    var doc = editor.get("document")[0];
    editor.execCommand("save");
    if(c) {
      (new Editor.Style(styles, {color:c})).apply(doc)
    }else {
      (new Editor.Style(styles, {color:"inherit"})).remove(doc)
    }
    editor.execCommand("save")
  }
  return{applyColor:applyColor}
});

