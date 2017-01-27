function initMap() {
                var mapDiv = document.getElementById('map');
                var map = new google.maps.Map(mapDiv, {
                    center: {lat: 4.503788, lng: -74.114812},
                    zoom: 17,
                    scrollwheel:false
                });
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(4.503788, -74.114812),
                    title: 'Soportic',
                    map: map,
                    icon: "img/marcador.png"
                });
            }
//            var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';