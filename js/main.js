function myFunction() {
    var x = document.getElementById("show");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 70) {
          $(".fixed-top").css("background" , "#2e2e2e");
          $('.logo').css('display', 'none');
          $('.logo-text').css('display', 'inline');
        }
  
        else{
            $(".fixed-top").css("background" , "transparent");
            $('.logo').css('display', 'inline');
            $('.logo-text').css('display', 'none');
        }
    });
  });


