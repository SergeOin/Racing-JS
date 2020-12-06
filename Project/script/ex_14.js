$(document).ready(function() {

    //$str = $('div#input').html();
    $("#saisie").on("input", function() {
      let str = document.getElementById('saisie').value;
  
      // The array of regex patterns to look for
      $format_search = [
        /\[b\](.*?)\[\/b\]/g,
        /\[s\](.*?)\[\/s\]/g,
        /\[u\](.*?)\[\/u\]/g,
        /\[url=(.*?)\](.*?)\[\/url]/g,
        /\[color=(.*?)\](.*?)\[\/color]/g,
      ]; // NOTE: No comma after the last entry
  
      // The matching array of strings to replace matches with
      $format_replace = [
        '<strong>$1</strong>',
        '<strike>$1</strike>',
        '<span style="text-decoration: underline;">$1</span>',
        '<a href="$1">$2</a>',
        '<span style="color: $1">$2</span>',
      ];
  
      // Perform the actual conversion
      for (var i = 0; i < $format_search.length; i++) {
        str = str.replace($format_search[i], $format_replace[i]);
      }
      $("#button").html(str);
    });
  });
