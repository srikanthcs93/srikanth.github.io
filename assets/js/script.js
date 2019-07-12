var map = new GMaps({
    el: '#map',
    lat: 17.544446,
    lng: 78.572484,
});

map.addMarker({
    lat: 17.544446,
    lng: 78.572484,
    title: 'bits',
    infoWindow: {
      content: 'bits'
    }
});

map.setZoom(8);
