$(document).ready(function() {
  $("button#hello").click(function(){
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
      $('li').css('background-color', 'green');
  });

  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
      $('li').css('background-color', 'green');
  });

  $("button#stop").click(function() {
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });
  $("button#before").click(function(){
    $("h1").before("<h4>Goodbye!</h4>");
    $("ul#webpage").before("<li>Goodbye, dear user!</li>");
      $('li').css('background-color', 'green');
  });
  $("button#after").click(function(){
    $("h1").after("<h4>After!</h4>");
    $("h4").click(function(){
      $("h4").remove();
    });
    $("ul#webpage").after("<li>After</li>");
      $('li').css('background-color', 'green');
  });


});
