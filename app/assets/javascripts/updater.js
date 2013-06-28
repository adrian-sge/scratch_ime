//   $(document).ready( function() {
//   var textarea = $("#ime");
//    textarea.onkeypress = function(evt) {
//        var charCode = evt.which;
//        var charStr = String.fromCharCode(charCode);
//        console.log(charStr);
//    };

//   // numpad 7 key detect and remap to 1
//   $('#ime').onkeypress( function (e) {
//     var value = $(this).val(),
//         lastchar = value.substring(value.lenght -1, value.lenght);

//     console.log(lastchar);

//     if (e.which == 103) {
//       var output = lastchar.replace(/[7]/, "1");
//       $(this).val(output);
//     } else if (e.which == 104) {
//       var output = lastchar.replace(/[8]/, "2");
//       $(this).val(output);
//     } else if (e.which == 105) {
//       var output = lastchar.replace(/[9]/, "3");
//       $(this).val(output);
//     } else if (e.which == 97) {
//       var output = lastchar.replace(/[1]/, "7");
//       $(this).val(output);
//     } else if (e.which == 98) {
//       var output = lastchar.replace(/[2]/, "8");
//       $(this).val(output);
//     } else if (e.which == 99) {
//       var output = lastchar.replace(/[3]/, "0");
//       $(this).val(output);
//     }
//   }).keydown( function (e) {
//      // e.preventDefault();
//   });
// });