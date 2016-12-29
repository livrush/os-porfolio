/* global $ _ opspark */

$.getJSON('data/product.json', function (product) {

  /* VARIABLES VARIABLES VARIABLES */
  var $product = $('<div>').addClass('product')
  
  var $listing = $('<div>').addClass('listing')

  let dropdownList = $('<div>').attr('class','dropdown-content')

  let $searchTarget = $('#search-box').val();
  
  const cap = function(string) {
    return string.slice(0,1).toUpperCase() + string.slice(1);
  }
  
  const typeList = product.reduce(function(arrayOfTypes, item) {
    if(!arrayOfTypes.includes(item.type)) {
      arrayOfTypes.push(item.type);
      return arrayOfTypes;
    }
    return arrayOfTypes;
  }, []);
  
  let type = "";
  
  let listingsByType = function(array, type) {
    if(type === "") return array;
    let result = [];
    array.map(function(e, i, a) {
      if(e.type === type) result.push(e);
    })
    return result;
  }
  
  function makeList() {
    $('.content').empty().append(displayListFactory(listingsByType(product, type)))
  }
  
  let listingsByTypeShow = listingsByType(product, type);
  
  let searchList = function(target) {
    return listingsByType(product, type).reduce(function(searchListArray, product) {
      if(search(product, target)) searchListArray.push(product);
      return searchListArray;
    }, []);
  };
  
  // console.log(listingsByType(product,"case"));
  
  /* FUNCTIONS FUNCTIONS FUNCTIONS */
  
  $('#myDropdown[0]').hide()
  
  
  
  // LIST LIST LIST LIST LIST
  
  function lightBox(object) {
      let $colors = $('<ul>').attr('class', 'colorsList')
      let $specs = $('<ul>')
      let $listing = $('<div>').addClass('lightBox').attr('id','item'+object.id);
      let $content = $('<div>').attr('class', 'item-content');
      let $secondRow = $('<div>').attr('class', 'second-row');
      let $stock = object.stock.toString();
      let colorList = _.map(object.availableColors, function(color) {
        return $colors.append($('<li>').text(color));
      });
      let specsList = _.map(object.specs, function(spec) {
        return $specs.append($('<li>').text(spec));
      });
      
      $listing.append($('<h4>').addClass('closer').text('X').click(function() {
          $('.lightBox').remove()
        }));
      $listing.append($('<div>').addClass('imgContainer').append($('<img>').addClass('lightBox-img').attr('src','img/product/'+object.image)));
      
      $listing.append($content);
      
      $content.append($('<h3>').attr('class', 'desc').text(object.desc));
      $content.append($secondRow);
      $secondRow.append($('<div>').attr('class', 'color').text(object.color));
      $secondRow.append($('<div>').attr('class', 'price').text("$"+object.price));
      if(object.stock < 11) $secondRow.append($('<div>').attr('class', 'stock').text("Only " + object.stock + " left in stock!!").css('color','red'))
      else $secondRow.append($('<div>').attr('class', 'stock').text(object.stock + " left in stock!"));
      $content.append($('<h4>').text("Colors"));
      $content.append(colorList);
      $content.append($('<h4>').text("Specs"));
      $content.append(specsList);
      
      return $listing;
  }
  
  function displayListFactory(array) { 
    return array.map(function(item) {
      let $colors = $('<ul>')
      let $specs = $('<ul>')
      let $listing = $('<div>').addClass('listing').attr('id','item'+item.id);
      let $content = $('<div>').attr('class', 'item-content');
      let $secondRow = $('<div>').attr('class', 'second-row');
      let $stock = item.stock.toString();
      let $thirdRow = $('<div>').attr('class', 'third-row');
      var colors = _.map(item.availableColors, function(color) {
        return $colors.append($('<li>').text(color));
      });
      var specs = _.map(item.specs, function(spec) {
        return $specs.append($('<li>').text(spec));
      });
      $listing.append($('<img>').addClass('item-img').attr('src','img/product/thumbs/'+item.image)
        .click(function() {
          $('#lightBox').empty().append(lightBox(item))
        })
      );
      
      $listing.append($content);
      
      $content.append($('<a>').append($('<h4>').attr('class', 'desc').text(item.desc))
        .click(function() {
          $('#lightBox').append(lightBox(item))
        })
      );
      $content.append($secondRow);
      $secondRow.append($('<h4>').attr('class', 'price').text("$"+item.price));
      if(item.stock < 11) $secondRow.append($('<h4>').attr('class', 'stock').text("Only " + item.stock + " left in stock!!").css('color','red'))
      else $secondRow.append($('<h4>').attr('class', 'stock').text(item.stock + " left in stock!"));
      return $listing;
    });
  }

  // function listFactory(array) { 
  //   return array.map(function(item) {
  //     let $listing = $('<div>').attr('class', 'listing');
  //     let $content = $('<div>').attr('class', 'item-content');
  //     let $list = $('<ul>')
  //     var colors = _.map(item.availableColors, function(color) {
  //       return $list.append($('<li>').attr('class', 'colorLi').text(color));
  //     });
      
  //     var specs = _.map(item.specs, function(spec) {
  //       return $list.append($('<li>').attr('class', 'colorLi').text(spec));
  //     });
      
  //     $listing.append($('<img>').addClass('item-img').attr('src','img/product/thumbs/'+item.image)
  //       .click(function() {
  //         console.log("hi")
  //       })
  //     );
      
  //     $listing.append($content);
      
  //     $content.append($('<h4>').attr('class', 'desc').text(item.desc));
  //     $content.append($('<h4>').attr('class', 'price').text("$"+item.price));
  //     $content.append($('<h4>').attr('class', 'release').text(item.color));
  //     $content.append(colors)
  //     $content.append(specs)
  //     $content.append($('<div>').attr('class', 'year').text(item.stock));
  //     return $listing;
  //   });
  // }
  
  function search(data, target) {
      if(typeof data === "string") {
        return target.split(" ").every(function(e, i, a) {
          return data.toLowerCase().includes(e)
        }) 
        // return data.toLowerCase().includes(target.trim());
      }
      else if(typeof data === "object") {
        return _.some(data, function(e, i, a) {
          return search(e, target);
        });
      }
      return false;
    }
  
  
  typeList.map(function(item) {
    return $('.dropdown-content').append($('<div>').append($('<a>').text(cap(item))).addClass('type')
      .click(function() {
        $('.dropbtn').text("Sort by: " + item).attr('class','buttonNew').text(cap(item))
          .click(function() {
            $('.buttonNew').text("Sort by").attr('class','dropbtn')
          });
          type = item;
          $('.content').empty().append(displayListFactory(listingsByType(product, type)));
      })
    );
  });
  

  
  
  
  
  
  
  
  // $('.content').append(displayListFactory(product));
  // $('.content').append(displayListFactory(searchList($('#search-box').val().toLowerCase())));
  $('.content').append(displayListFactory(listingsByType(product, type)));
  
  /* CLICK FUNCTIONS */
  
  // $('body').click(function() {
  //     console.log(type);
  // })
  
  $('.dropbtn').click(function() {
    $('#myDropdown').toggle(0);
    type = "";
    // makeList()
  });

// Close the dropdown menu if the user clicks outside of it
  $('body').click(function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('#myDropdown')) {
      $('#myDropdown').hide();
    }
    else if (!event.target.matches('#lightBox') && !event.target.matches('a')) {
      $('#lightBox').empty();
    }
  });
  
  $('.lightBox').click(function() {
     $('.lightBox').remove()
  })
  
  $('.buttonNew').click(function() {
      $('.buttonNew').text("Sort by").attr('class','dropbtn')
  })
  
  $('#reset').click(function() {
      console.log(this)
      makeList();
  })
  
  $('#search-btn').click(function() {
    $('.content').empty().append(displayListFactory(searchList($('#search-box').val().toLowerCase())));
  })
  
  $('#search-box').keypress(function(event) {
    if(event.which === 13) $('#search-btn').click();
  });
})