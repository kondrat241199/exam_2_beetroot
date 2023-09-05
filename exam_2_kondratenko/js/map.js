window.initMap = initMap;

function initMap() {
  const uluru = { lat: 48.4599702871218, lng: 37.08044199420556 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.4599702871218, lng: 37.08044199420556 },
    zoom: 16,
  });
  const flag = "./img/svg/map_pin.svg";
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: flag,
  });
}
