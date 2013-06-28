"use strict";

jQuery(document).ready(function() {

  var canvasTextWrapper = $(".canvas-text-wrapper")
      , scratchTextEditor = $("#scratchText")[0]
      , context = scratchTextEditor.getContext("2d")
      , copyPaste = $(".canvas-text-wrapper textarea")
      , text = 'YATA!'
      ;

  canvasTextWrapper.focus(function() {
    $(this).blur().css('outline', '1px solid #09f');
    copyPaste.focus();
  });

  context.font = '20pt "Amadeus"';
  context.fillStyle = '#000';
  setTimeout( function() {
    context.fillText(text, 0, 20);
  }, 1000);

  copyPaste.focus( function() {
    $(this).blur();
  });
  // we don't want input to get focus by tabbing;
  copyPaste.tabIndex = -1;
});
