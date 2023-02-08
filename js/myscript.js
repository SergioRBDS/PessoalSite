
function relogio(){
  var data=new Date();
  var hor=data.getHours();
  var min=data.getMinutes();
  var seg=data.getSeconds();
  
  document.getElementById("DateTime").value=data;
}

var timer=setInterval(relogio,1000);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {

  }
}

function showPosition(position) {
//  var MapIMG = document.getElementById("Map");
//  MapIMG.src="https://www.openstreetmap.org/#map=4/"+position.coords.latitude+"/"+position.coords.longitude
  document.getElementById("LAT").value=position.coords.latitude;
  document.getElementById("LON").value=position.coords.longitude;
  map = new OpenLayers.Map("Map");
        var mapnik         = new OpenLayers.Layer.OSM();
        var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
        var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
        var position       = new OpenLayers.LonLat(position.coords.longitude,position.coords.latitude).transform( fromProjection, toProjection);
        var zoom           = 14; 
  map.addLayer(mapnik);
  map.setCenter(position, zoom );

}

function showJP(){
  document.getElementById("LAT").value=0;
  document.getElementById("LON").value=0;
  map = new OpenLayers.Map("Map");
        var mapnik         = new OpenLayers.Layer.OSM();
        var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
        var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
        var position       = new OpenLayers.LonLat(0,0).transform( fromProjection, toProjection);
        var zoom           = 1; 
  map.addLayer(mapnik);
  map.setCenter(position, zoom );
}