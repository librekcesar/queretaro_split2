var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_QER1_v63_copiaQER1_v63_1 = new ol.format.GeoJSON();
var features_QER1_v63_copiaQER1_v63_1 = format_QER1_v63_copiaQER1_v63_1.readFeatures(json_QER1_v63_copiaQER1_v63_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QER1_v63_copiaQER1_v63_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QER1_v63_copiaQER1_v63_1.addFeatures(features_QER1_v63_copiaQER1_v63_1);
var lyr_QER1_v63_copiaQER1_v63_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QER1_v63_copiaQER1_v63_1, 
                style: style_QER1_v63_copiaQER1_v63_1,
                interactive: true,
    title: 'QER1_v63_copia — QER1_v63<br />\
    <img src="styles/legend/QER1_v63_copiaQER1_v63_1_0.png" /> peregrina<br />\
    <img src="styles/legend/QER1_v63_copiaQER1_v63_1_1.png" /> trujillo<br />\
    <img src="styles/legend/QER1_v63_copiaQER1_v63_1_2.png" /> yarto<br />\
    <img src="styles/legend/QER1_v63_copiaQER1_v63_1_3.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_QER1_v63_copiaQER1_v63_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_QER1_v63_copiaQER1_v63_1];
lyr_QER1_v63_copiaQER1_v63_1.set('fieldAliases', {'zonificacion': 'zonificacion', 'total_asignados': 'total_asignados', 'proveedor': 'proveedor', });
lyr_QER1_v63_copiaQER1_v63_1.set('fieldImages', {'zonificacion': 'TextEdit', 'total_asignados': 'Range', 'proveedor': 'TextEdit', });
lyr_QER1_v63_copiaQER1_v63_1.set('fieldLabels', {'zonificacion': 'header label', 'total_asignados': 'header label', 'proveedor': 'header label', });
lyr_QER1_v63_copiaQER1_v63_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});