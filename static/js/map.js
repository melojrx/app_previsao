$(document).ready(function(){
    console.log("Map is initializing...");
    var map = L.map('map').setView([-23.55052, -46.633308], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    // Evento de clique no mapa
    map.on('click', function(e) {
        var lat = e.latlng.lat.toFixed(6); // Formata latitude com 6 casas decimais
        var lng = e.latlng.lng.toFixed(6); // Formata longitude com 6 casas decimais

        // Atualiza os campos de latitude e longitude no formulário
        $('#Latitude').val(lat);
        $('#Longitude').val(lng);

        // Remove o marcador anterior se existir
        if (marker) {
            map.removeLayer(marker);
        }

        // Adiciona um novo marcador no local clicado
        marker = L.marker([lat, lng]).addTo(map);

        // Adiciona um popup ao marcador
        marker.bindPopup("Coordenadas capturadas: " + lat.toFixed(6) + ", " + lng.toFixed(6)).openPopup();
    });
});
