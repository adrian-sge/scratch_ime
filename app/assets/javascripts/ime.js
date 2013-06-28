// var lines = [],
//     index = 0,
//     newIndex;

// do {
//   newIndex = text().indexof('\n', index);
//   lines.push(text().substr(index, newIndex !== -1 ? newIndex - index + 1 : void 0));
//   index = newIndex + 1;
// } while (newIndex !== -1);

// return lines;

// (function ($, window, document) {

//   var

//     // Set some defaults
//     defaults = {
//       debug : false,
//       debugTarget : false,
//       event : 'keyup'
//     },

//     // Set the name of the plugin
//     pluginName = 'inputMethodEditor';

//   /**
//    * Constructor
//    */

//   function InputMethodEditor (element, options) {

//     // Set the current DOM node being acted upon
//     this.element = element;

//     // Set the current jQuery object being acted upon
//     this.$element = $(element);

//     // Set the current DOM node tag name being acted upon (e.g. "select" or "a")
//     if ( this.$element.prop('tagName') && typeof( this.$element.prop('tagName') ) == 'string' ) {
//       this.htmlTag = this.$element.prop('tagName').toLowerCase();
//     } else {
//       this.htmlTag = false;
//     }

//     // Set allowed events
//     this.allowedEvents = [
//       'keydown', 'keypress', 'keyup'
//     ];

//     // Set allowed keys
//     this.allowedKeyCodes = [
//       12, // clear
//       13, // enter
//       96, // Numpad 0
//       97, // Numpad 1
//       98, // Numpad 2
//       99, // Numpad 3
//       100, // Numpad 4
//       101, // Numpad 5
//       102, // Numpad 6
//       103, // Numpad 7
//       104, // Numpad 8
//       105, // Numpad 9
//       106, // Numpad *
//       107, // Numpad +
//       108, // Numpad 9
//       109, // Numpad -
//       110, // Numpad .
//       111, // Numpad /
//       187 // Numpad =
//     ];

//     // Merge the options into the defaults
//     this.options = $.extend( true, {}, defaults, options );

//     // Set a reference to the original, un-merged defaults
//     this._defaults = defaults;

//     // Set a reference to the name of the plugin
//     this._name = pluginName;

//     // Away we go!
//     this.init();

//   };

//   InputMethodEditor.prototype.init = function () {
//     var self = this;

//     this.exec = function () {
//       this.checkValidBindEvents();
//     };

//     this.checkValidBindEvents = function () {
//       if ( $.isArray( this.options.event ) ) {
//         var validEvents = [];
//         for ( var e in this.options.event ) {
//           if ( $.inArray( e, self.allowedEvents ) > -1 ) {
//             validEvents.push(e);
//           };
//         };
//         this.options.event = validEvents.join(' ');
//         this.bindEvents();
//       } else if ( $.inArray( this.options.event, this.allowedEvents ) > -1 ) {
//         this.bindEvents();
//       };
//     };

//     this.log = function (message) {
//       if ( this.options.debug && typeof( this.options.debugTarget ) == 'string' && this.options.debugTarget != '' ) {
//         $( this.options.debugTarget ).append( message );
//         $( this.options.debugTarget ).scrollTop( $( this.options.debugTarget ).prop('scrollHeight') );
//         $( this.options.debugTarget ).append("<hr />")
//       };
//     };

//     this.bindEvents = function () {
//       $(document).on( this.options.event, '#' + this.$element[0].id, function (event) {
//         self.log('Keycode = ' + event.which);
//         self.val = self.$element.val();
//         if ( $.inArray( event.which, self.allowedKeyCodes ) > -1 ) {
//           self.allowKey();
//         } else {
//           self.disallowKey();
//         };
//       });
//     };

//     this.disallowKey = function () {
//       this.log('Disallowed key');
//       this.val = this.val.substring(0, this.val.length - 1);
//       this.$element.val( this.val );
//     };

//     this.allowKey = function () {
//       this.log('Allowed key');
//     };

//     this.exec();

//   };

//   /*
//    * Plugin wrapper
//    */

// $.fn[pluginName] = function (options) {

//     // For every matched selector found...
//     return this.each( function () {

//       // Set some jQuery data if it doesn't already exist
//       if ( !$.data( this, 'plugin_' + pluginName ) ) {
//         $.data( this, 'plugin_' + pluginName, new InputMethodEditor( this, options ) );
//       };

//     });

//   };

// })(jQuery, window, document);
