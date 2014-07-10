"use strict";

function TextEditor(options) {
  var defaults = {
    lineHeight : 10,
    font : '20pt Amadeus',
    fillStyle : 'blue'
  };

  this.$canvasWrapper   = $(".canvas-text-wrapper");
  this.$canvas          = $("#scratchText");
  this.canvas           = this.$canvas[0];
  this.context          = this.canvas.getContext('2d');
  this.$textarea        = $(".canvas-text-wrapper textarea");

  this.options          = $.extend( true, {}, defaults, options );

  this.init();
};

TextEditor.prototype.init = function () {
  var self = this;

  this.countLines = function () {
    var newIndex
    , index   = 0
    , lines   = []
    , text    = this.$textarea.val()
    ;

    do {
      newIndex = text.indexOf('\n', index);
      lines.push( text.substr( index, newIndex !== -1 ? newIndex - index + 1 : void 0 ) );
      index = newIndex + 1;
    } while ( newIndex !== -1 );

    this.renderCanvas(lines);
  };

  this.renderCanvas = function (lines) {
    this.clearCanvas();
    this.setupCanas();
    for ( var i = 0; i < lines.length; i++ ) {
      this.context.fillText( lines[i], 4, this.options.lineHeight + (this.options.lineHeight * i) );
    };
  };

  this.bindCanvasWrapperFocus = function () {
    this.$canvasWrapper.focus( function (e) {
      self.$textarea.focus();
    });
  };

  this.bindKeyUp = function () {
    this.$textarea.keyup( function (e) {
      self.countLines();
    });
  };

  this.clearCanvas = function () {
    this.canvas.width = this.canvas.width;
  };

  this.setupCanvas = function () {
    this.context.font = '20pt Amadeus';
    this.context.fillStyle = 'blue';
  };

  this.focusTextarea = function () {
    this.$textarea.focus();
  };

  this.exec = function () {
    this.bindCanvasWrapperFocus();
    this.bindKeyUp();
    this.setupCanvas();
    this.focusTextarea();
  };

  this.exec();
};

jQuery(document).ready( function () {
  var textEditor = new TextEditor({
    lineHeight : 25
  });
});
