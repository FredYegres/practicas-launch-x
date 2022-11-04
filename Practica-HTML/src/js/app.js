document.addEventListener('DOMContentLoaded', () => runApp());

function runApp() {
    scrollNav();
    createMap();
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion__enlace');

    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth"});
        });
    });
}

function createMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZnJlZHllZ3JlcyIsImEiOiJjbDl5amRoanQwNWN0M3Bxb25ldmJ1N2M0In0.M9jIXg0Cyf9vWOjzNq2IyQ';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-67.96514872731296, 10.223162339289853], // starting position [lng, lat]
        zoom: 13, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });

    // Create a new marker.
    const marker = new mapboxgl.Marker()
    .setLngLat([-67.96514872731296, 10.223162339289853])
    .addTo(map);

    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });
}