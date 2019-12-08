export function flickity() {

  $.getJSON('https://api.punkapi.com/v2/beers', function (data) {
    // console.log('data', data);

    var items = [];
    $.each( data.slice(0,3), function( key, val ) {
      items.push( 
        "<div class='carousel-cell__product'><div class='carousel-cell__product__text'><h2>" + val.name + "</h2><p>" + val.tagline + "</p></div><div class='carousel-cell__product__image'><img src="+ val.image_url + " alt='beer image' ></div></div>" 
      );
    });

    // {console.log('3 items', items)}
    $(items[0]).appendTo( ".carousel-cell__0" );
    $(items[1]).appendTo( ".carousel-cell__1" );
    $(items[2]).appendTo( ".carousel-cell__2" );
  });
  
}

export default flickity;
