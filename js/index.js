$(function(){

      var modal = $(".modal");
      var close = $(".close");
      var modalImg = (".modal-image");
      var img = $(".theimage");
      var imgSrc = img.attr("src");
      var caption = $("#caption");
      var totalImages = $(".image").length;


      var getCurrentSlide = $(".item-number");
      var fs = 1;
      var current_slide = 0;
      indexStart = [];
      indexStart.push(fs);


      $('.image').click(function(){
            var slideIndex = $(this).closest('.image').index('.image') + indexStart[0];
            var slideTotal = [totalImages * totalImages / totalImages];

            getCurrentSlide.html(slideIndex + "/" + slideTotal);
      });

      img.on({
        'click': function(){
          var getImgSRC = $(this).attr("src");
          var checkLink = getImgSRC.substring(0,4);
          /*  Below is Just for fun, not serious */
          for (x = 0; x < checkLink.length; x++){
              var firstChar = checkLink[0];
              var lastChar = checkLink[3];
                if (           firstChar == "h"
                            && lastChar  == "p"){
                if (           getImgSRC[0]
                    === "h" && getImgSRC[1]
                    === "t" && getImgSRC[2]
                    === "t" && getImgSRC[3]
                    === "p") {
                    $(".modal-image").attr('src' , getImgSRC);
                    caption.html($(this).attr("alt"));
                    }
                    else {
                        caption.html("This is a invalid link.");
                  }
              }
              else {
                  caption.html("This is a invalid link.");
            }
          }
              modal.css("display" , "block");
       }
    });
    /* ^ Above is Just for fun, not serious ^ */

      close.on({
        'click': function(){
          /*  Below is Just for fun, not serious */
          for (var x = 0; x < 1; x++){
              if (x < 1)
              modal.css("display", "none");
              x++;
         }
         /* ^ Above is Just for fun, not serious ^ */
       }
    });
});
