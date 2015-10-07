var map;

var GEOSERVERBASE = "http://localhost:8080";
var SERVER='/geoserver/tiger/wms';
var Roads='tiger:tiger_roads';

function mapinitialize() {

    map = new OpenLayers.Map('map', {});
            


    var mhdRoads = new OpenLayers.Layer.WMS(
        Roads, GEOSERVERBASE+SERVER,
        {
            layers:Roads
        }
    );
    var mhdPoi =new OpenLayers.Layer.WMS(
        'Poi',GEOSERVERBASE+SERVER,
        {
            layers:'poly_landmarks',
            transparent:true
        },{isBaseLayer:false}
    );

    map.addLayer(mhdRoads);
    map.addLayer(mhdPoi);
    map.zoomTo(13);
    map.panTo(new OpenLayers.LonLat(-73.9534, 40.77));

}
