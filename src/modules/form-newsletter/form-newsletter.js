export function formNewsletter() {

  $('#formSubscription').validator();

  // Event listener for the subscribe form.
  $('#sendForm').click(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    var dataEmail = $('#subscribeEmail').val();
    var dataName = $('#subscribeName').val();
    // console.log('dataEmail', dataEmail);
    // console.log('dataName', dataName);

    // If form has class disabled, it is not valid
    if ($('#sendForm').hasClass('disabled')) {
      console.log('This form is not valid')
    } else {
      // If the form is valid it will submit the form using AJAX.
      $.ajax({
        cache: false, // no cache
        url: 'https://api.punkapi.com/v2/beers',
        type: 'POST', // request method
        dataType: 'json', // the data type
        data: {
          email: dataEmail,
          name: dataName
        },
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
