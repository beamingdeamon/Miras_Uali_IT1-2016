var map;
DG.then(function () {
    map = DG.map('map', {
        center: [43.23516740170195, 76.90964199205078],
        zoom: 20
    });
    
    DG.marker([43.23516740170195, 76.90964199205078]).addTo(map).bindPopup('Наш филиал');
});