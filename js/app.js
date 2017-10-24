(function () {
    //Options to be used to style the features        
    var cityLimitsOptions = {
        color: 'grey',
        fillColor: 'grey',
        fillOpacity: .2,
        opacity: 1,
        weight: 3,
    };
    var urbanTrailsOptions = {
        color: '#F8AA5D',
        weight: 1.5,
        opacity: 1
    };
    var offLeashAreasOptions = {
        radius: 6,
        fillOpacity: .8,
        fillColor: '#ff0056',
        color: '#151f2b',
        weight: 1.5,
        opacity: 1
    };
    var parksOptions = {
        fillOpacity: .5,
        fillColor: '#5BB106',
        color: '#5BB106',
        weight: 1.5,
        opacity: 1
    };
    //map options.
    var options = {
        zoomSnap: 0.25,
    };
    //create the map!
    var map = L.map('map', options);
    //Use carto layer as a basemap
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);
    //wait until all the GeoJSON loads, then draw the map.
    $.when($.getJSON('data/Austin-City-Outline.json'), 
           $.getJSON('data/austin-parks-filtered-ms.json'), 
           $.getJSON('data/off-leash-areas.json'), 
           $.getJSON('data/urban-trails-filtered.json')
    )
    .done(function (cityLimits, parks, offLeashAreas, urbanTrails) {
        //we finished, lets draw our map!
        drawMap(cityLimits, parks, offLeashAreas, urbanTrails);
        //and our legend!
        drawLegend();
    });
    //funtion to handle drawing the map.
    function drawMap(cityLimitsData, parksData, offLeashAreasData, urbanTrailsData) {
        //create a variable so we can get the bounds to zoom to the
        var citylim = L.geoJson(cityLimitsData, {
            style: cityLimitsOptions
        }).addTo(map);
        L.geoJson(parksData, {
            style: parksOptions, //parse through the features to set styles and events
            onEachFeature: function (feature, layer) {
                // create the tooltip for identification
                var tooltip = feature.properties.park_name;
                // bind the tooltip to the layer
                layer.bindTooltip(tooltip, {
                    sticky: true,
                    className: 'tooltip'
                });
                // visual affordance on mouseover
                layer.on('mouseover', function (e) {
                    this.setStyle({
                        fillOpacity: .1
                    });
                });
                // use existing option to reset the styles on mouseout
                layer.on('mouseout', function (e) {
                    this.setStyle(parksOptions);
                });
            }
        }).addTo(map);
        L.geoJson(urbanTrailsData, {
            style: urbanTrailsOptions, //parse through the features to set styles and events
            onEachFeature: function (feature, layer) {
                // create the tooltip for identification
                var tooltip = feature.properties.urban_tr_3;
                // bind the tooltip to the layer
                layer.bindTooltip(tooltip, {
                    sticky: true,
                    className: 'tooltip'
                });
                // visual affordance on mouseover
                layer.on('mouseover', function (e) {
                    this.setStyle({
                        opacity: .6,
                        color: 'yellow',
                        weight: 3
                    });
                });
                // use existing option to reset the styles on mouseout
                layer.on('mouseout', function (e) {
                    this.setStyle(urbanTrailsOptions);
                });
            }
        }).addTo(map);
        L.geoJson(offLeashAreasData, {
            //parse through the features to set styles and events.  
            //Points are handled differently so let us make them into Circles instead of Markers.
            pointToLayer: function (feature, latlng) {
                var layer = L.circleMarker(latlng, offLeashAreasOptions);
                // create the tooltip for identification
                var tooltip = feature.properties.name;
                // bind the tooltip to the layer
                layer.bindTooltip(tooltip, {
                    sticky: true,
                    className: 'tooltip'
                });
                // visual affordance on mouseover
                layer.on('mouseover', function (e) {
                    this.setStyle({
                        fillOpacity: .5
                    });
                });
                // use existing option to reset the styles on mouseout
                layer.on('mouseout', function (e) {
                    this.setStyle(offLeashAreasOptions);
                });
                return layer;
            }
        }).addTo(map);
        //zoom the map to fit the city boundary
        map.fitBounds(citylim.getBounds()).zoomOut(.5);
    }
    //function to draw our legend on the map
    function drawLegend() {
        //create a variable to hold our legend leaflet control object and set it to position in the bottom left of the map.
        var legendControl = L.control({
            position: 'bottomleft'
        });
        //build the html for our legend.
        legendControl.onAdd = function (map) {
            //we want our legend to be a div element with the "legend" class
            var legend = L.DomUtil.create('div', 'legend');
            //This could have all been done in one step, but this makes it easier to read/edit
            var legendHTML = "<h3>Parks and Recreation</h3><ul>";
            legendHTML += '<li><img src="icons/OffLeash.png" alt="Off Leash">Off Leash Areas</li>';
            legendHTML += '<li><img src="icons/trails.png" alt="Off Leash">Urban Trails</li>';
            legendHTML += '<li><img src="icons/Park.png" alt="City Parks">City Parks</li>'; // updated the icon source -- image was not showing up bc P wasn't capitalized -- and updated feature title
            legendHTML += "</ul>";
            //return the slab.. err legend
            legend.innerHTML = legendHTML
            return legend;
        };

        //add our legend to the map!
        legendControl.addTo(map);
    }
})();