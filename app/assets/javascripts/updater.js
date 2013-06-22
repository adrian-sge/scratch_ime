  $(document).ready( function() {
  // numpad 7 key detect and remap to 1
  $('#ime').keyup( function (e) {
    console.log("boink!");

    if (e.which == 103) {
      var value = $(this).val(),
          lastchar = value.substring(value.lenght -1, value.lenght),
          output = lastchar.replace(/[7]/g, "1");

      $(this).val(output);
    }
  }).keydown( function (e) {
     // e.preventDefault();
  });
});