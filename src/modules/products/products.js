export function products() {

  $.getJSON('https://api.punkapi.com/v2/beers', function (data) {
    console.log('data', data);

    var items = [];
    $.each( data.splice(3), function( key, val ) {
      items.push( 
        "<div class='col-md-4 col-lg-3'><a href='/' class='card-product'><div class='card-product__image'><div class='card-product__image__overlay'></div><img src="+ val.image_url + " alt='beer image' ></div><h3>" + val.name + "</h3><p>" + val.tagline + "</p></a></div>" 
      );
    });

    $( "<div/>", {
      "class": "row",
      html: items.join( "" )
    }).appendTo( ".product-container" );

  });
}

export default products;
