var mymap = L.map('winMap').setView([37.172, -89.494], 3.40);

L.tileLayer('https://api.mapbox.com/styles/v1/madisonhindo/cjp9wng9444ah2ssga0mkkq04/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFkaXNvbmhpbmRvIiwiYSI6ImNqcDFnMGNhOTNmMDAzcWt3ZzE1N25sNWoifQ.y96dGGE5ySq9C-maEeI9tg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

for ( let i = 0; i < places.length; i++) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' +
      places[i].descrip + '</p>')
  .addTo(mymap);
}

$(document).ready(() => {
    function hideAll() {
    $('#ocasioText').hide();
    $('#omarText').hide();
    $('#pressleyText').hide();
    $('#sinemaText').hide();
    
}
  hideAll();

    $('#ocasiocortez').on('click', () => {
      $('#ocasioText').toggle();
    });
    $('#omar').on('click', () => {
      $('#omarText').toggle();
    });
    $('#pressley').on('click', () => {
      $('#pressleyText').toggle();
    });
    $('#sinema').on('click', () => {
      $('#sinemaText').toggle();
    });
});
