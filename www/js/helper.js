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
  },

  saveLocal: {
    saveToCart: (item) => {
      //   console.log(item);
      return new Promise((resolve, reject) => {
        var l = JSON.parse(localStorage.getItem('drinkpedia_cart'));
        var obj = {
          name: item.name,
          id: item.id,
          description: item.desription,
          price: item.price
        }
        if (item.selectedQuantity) {
          obj.selectedQuantity = parseInt(item.selectedQuantity);
          obj.itemTotal = parseInt(item.selectedQuantity) * item.price;
        }
        //   console.log(obj);
        if (l) {
          l.push(obj);
          localStorage.setItem('drinkpedia_cart', JSON.stringify(l));
          resolve(l)
        } else {
          var e = [];
          e.push(obj)
          localStorage.setItem('drinkpedia_cart', JSON.stringify(e));
          resolve(e)
        }

      })

    }
  }
}