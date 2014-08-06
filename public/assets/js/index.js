var map;
var latitude = 40.4336599;
var longitude = -3.6819766;
var default_zoom = 17;

$(document).ready(function(ev) {
  var menu = $('#navigation-menu');
  var menuToggle = $('#js-mobile-menu');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });
});

function initialize() {
  var myLatlng = new google.maps.LatLng(latitude, longitude);
  var myOptions = {
      scrollwheel: false,
      zoom: default_zoom,
      center: myLatlng,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  map = new google.maps.Map(document.getElementById("map"), myOptions);

  var contentString = '<div id="infoWindow">' + '<div id="siteNotice">' + '</div>' + '<h4 id="title_infowindow" class="title_infowindow">Armería Viaji</h4>' + '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Armería Viaji'
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
}
