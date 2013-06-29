"use strict";

jQuery(document).ready(function() {

  var canvasTextWrapper = $(".canvas-text-wrapper")
    , scratchTextEditor = $("#scratchText")[0]
    , context = scratchTextEditor.getContext("2d")
    , copyPaste = $(".canvas-text-wrapper textarea")
    , text = copyPaste.val()
    , LINE_HEIGHT = 25
    , lines = []
    , index = 0
    , newIndex
    , line
    ;

  // setTimeout( function() {
  //   context.fillText(text, 0, 20);
  // }, 1000);
  function countLines() {
    do {
      newIndex = text.indexOf('\n', index);
      console.log('newIndex =', newIndex)
      // if (newIndex !== -1) {
        lines.push(text.substr(index, newIndex !== -1 ? newIndex - index +1 : void 0));
      // };
      console.log('lines =', lines)
      index = newIndex +1;
      console.log('index =', index)
    } while (newIndex !== -1);
    renderCanvas();
  };


  copyPaste.keyup(function() {
    line = LINE_HEIGHT * (lines.length +1);
    text = copyPaste.val();
    scratchTextEditor.width = scratchTextEditor.width;
    context.font = '20pt "Amadeus"';
    context.fillStyle = 'red';
    countLines();
  });
  function renderCanvas() {
    context.fillText(text, 4, line);
  };


  canvasTextWrapper.focus(function() {
    $(this).blur().css('outline', '1px solid #09f');
    copyPaste.focus();
  });

  copyPaste.focus( function() {
    // $(this).blur();
  });
  // we don't want input to get focus by tabbing;
  copyPaste.tabIndex = -1;
});
