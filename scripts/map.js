function initMap() {
    var element = document.getElementById('map');
    var location = {lat: 50.082178, lng: 14.425751};
    var options = {
        zoom: 15,
        center: location,
        gestureHandling: 'greedy'
    }
    var map = new google.maps.Map(element, options);
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });

    var content = "<h3><p>Vodičkova 791/41</p><p>Praha-Nové Město 110 00</p><p>Czech Republic</p></h3>";
    var infoWindow = new google.maps.InfoWindow({
        content: content
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
        map.setZoom(17);   
        map.setCenter(marker.getPosition());   
    });
}

initMap();