export function formNewsletter() {

  $('#formSubscription').validator();

  // Get the form.
  var form = $('#formSubscription');

  // Event listener for the subscribe form.
  $('#sendForm').click(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // If form has class disabled, it is not valid
    if ($('#sendForm').hasClass('disabled')) {
      console.log('This form is not valid')
    } else {
      // If the form is valid it will submit the form using AJAX.
      $.ajax({
        type: 'POST',
        url: 'https://api.punkapi.com/v2/beers',
        data: form,
        error: function (data) {
          console.log("Error: ", data);
          showMessage(data);
        },
        success: function (data) {
          console.log("Succes: ", data);
          showMessage(data);
        }
      });
    }
  });

  // Show message function
  function showMessage(response) {
    console.log('hello',response);

    if (response) {
      $(".form-container").hide();
      $(".message-container").show();
    } else {
      $(".form-container").show();
      $(".message-container").hide();
    }

    animate();
  }

  // - Animate modal slide
  function animate() {
    $('.form-newsletter__content').animate({
      height: $('.form-newsletter__content').outerHeight()
    }, 600);

    $('.message-body').removeClass("form-body__hidden");
      $('.subscription-body').animate({
      "margin-top": "-" + $('.subscription-body').outerHeight() + "px"
    }, 600, function () {
      $('.subscription-body').addClass("form-body__hidden");
    });
  }

}

export default formNewsletter;
