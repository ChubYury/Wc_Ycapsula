export function initMap() {
  const mapContainer = document.getElementById('map')
  const coordinates = { lat: 46.760992, lng: 36.80197 }
  const correctZoom = 14
  const map = new google.maps.Map(mapContainer, {
    center: coordinates,
    zoom: correctZoom,
  });
  const marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: '../static/img/svg/pin.svg'
  });
  const infowindow = new google.maps.InfoWindow({
    content: '<p class="title"> WEBCASE </p>',
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}

window.initMap = initMap