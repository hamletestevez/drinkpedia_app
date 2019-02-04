var helper = {
  animate: {
    itemListSelect: (element) => {
      TweenMax.to(".customItem img", 0.25, {
        height: 125
      })
      TweenMax.to(".customItem .itemDescriptionBlock", 0.25, {
        padding: 10
      })
      $(".customItem .itemSelectQuantity").hide();
      $(".customItem .shareItemBtn").show();

      var has = $("#" + element).hasClass('activeItem');
      console.log(has);
      if (has) {
        $("#" + element + " .itemSelectQuantity").hide();
        $("#" + element + " .shareItemBtn").show();
        TweenMax.to("#" + element + " img", 0.25, {
          height: 125
        })
        TweenMax.to("#" + element + " .itemDescriptionBlock", 0.25, {
          padding: 10
        })
        $("#" + element).removeClass('activeItem');
        $('.customItem').each(function (i, obj) {
          $(this).removeClass('activeItem');

          //   $("#" + element).addClass('activeItem');
        });


      } else {
        $("#" + element + " .itemSelectQuantity").show();
        $("#" + element + " .shareItemBtn").hide();
        TweenMax.to("#" + element + " img", 0.25, {
          height: 150
        })
        TweenMax.to("#" + element + " .itemDescriptionBlock", 0.25, {
          padding: 20
        })
        $('.customItem').each(function (i, obj) {
          $(this).removeClass('activeItem');
          $("#" + element).addClass('activeItem');
        });

      }



    }
  }
}