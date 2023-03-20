var map,marker1,marker2,marker3;
function initMap1() {
    map = new mappls.Map('map', {
      center: [26.8416163,75.5612288],
      zoomControl: true,
      location: true,
      geolocation:true
    });


    
    map.addListener('load', function() {
        var all_data = [];
        for (let i = 0; i < 45000; i++) {
            let lt = randomNumber(26.805813,26.908404 );
            let ln = randomNumber( 75.519512,  75.592997);
            obj = {
                "type": "Feature",
                "properties": {
                    "htmlPopup": "MapmyIndia "+i+"", "icon-size1": 0.55
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [lt, ln]
                }
            }
            all_data.push(obj);
        }
    marker1 = new mappls.Marker({
        map: map,
        position: {
            "id": "ravi",
            "type": "FeatureCollection",
            "features": all_data
        },
        fitbounds: true,
        icon: 'images/green.png',
        offset: [0, -40],
        draggable: false,
        clustersOptions: {
            background: [
                [2, 'green'],
                [5, 'red'],
                [10, 'yellow'],
                [20, 'orange'],
                [35, 'blue']
            ], // steps in background color (in pixels)
            maxZoom: 17, // that zoom for split cluster circle 
            radius: [
                [2, 15],
                [5, 20],
                [10, 30],
                [20, 40],
                [35, 50],
            ] // steps in cluster radius (in pixels)
        }
    });
});
    map.addListener('load', function() {
        var all_data2 = [];
        for (let i = 0; i < 7500; i++) {
            let lt = randomNumber(26.805813,26.908404 );
            let ln = randomNumber( 75.519512,  75.592997);
            obj = {
                "type": "Feature",
                "properties": {
                    "htmlPopup": "MapmyIndia "+i+"", "icon-size1": 0.55
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [lt, ln]
                }
            }
            all_data2.push(obj);
        }
    marker2 = new mappls.Marker({
        map: map,
        position: {
            "id": "ravi",
            "type": "FeatureCollection",
            "features": all_data2
        },
        fitbounds: true,
        icon: 'images/red.png',
        offset: [0, -40],
        draggable: false,
        clustersOptions: {
            background: [
                [2, 'green'],
                [5, 'red'],
                [10, 'yellow'],
                [20, 'orange'],
                [35, 'blue']
            ], // steps in background color (in pixels)
            maxZoom: 17, // that zoom for split cluster circle 
            radius: [
                [2, 15],
                [5, 20],
                [10, 30],
                [20, 40],
                [35, 50],
            ] // steps in cluster radius (in pixels)
        }
    });
});
    map.addListener('load', function() {
        var all_data3 = [];
        for (let i = 0; i < 15000; i++) {
            let lt = randomNumber(26.805813,26.908404 );
            let ln = randomNumber( 75.519512,  75.592997);
            obj = {
                "type": "Feature",
                "properties": {
                    "htmlPopup": "MapmyIndia "+i+"", "icon-size1": 0.55
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [lt, ln]
                }
            }
            all_data3.push(obj);
        }
    marker3 = new mappls.Marker({
        map: map,
        position: {
            "id": "ravi",
            "type": "FeatureCollection",
            "features": all_data3
        },
        fitbounds: true,
        icon: 'images/yellow.png',
        offset: [0, -40],
        draggable: false,
        clustersOptions: {
            background: [
                [2, 'green'],
                [5, 'red'],
                [10, 'yellow'],
                [20, 'orange'],
                [35, 'blue']
            ], // steps in background color (in pixels)
            maxZoom: 17, // that zoom for split cluster circle 
            radius: [
                [2, 15],
                [5, 20],
                [10, 30],
                [20, 40],
                [35, 50],
            ] // steps in cluster radius (in pixels)
        }
    });
});
}

// generate random lat lng    
function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}
