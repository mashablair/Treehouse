$(document).ready(function() {


 $('form').submit(function (e) {
   e.preventDefault();
   var $searchField = $('#search');
   var $submitBtn = $('#submit');
   $searchField.prop("disabled", true);
   $submitBtn.attr("disabled", true).val("searching...");

    // URL
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    
   // JSON options
   var flickrOptions = {
      tags: $searchField.val(),
      format: "json"
    };
   
   // callback
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      
      // re-enable the button 
      $searchField.prop("disabled", false);
      $submitBtn.attr("disabled", false).val("Search");
    }
   
   // AJAX
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready
