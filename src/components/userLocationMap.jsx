import React, { useState } from 'react'
// import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {
    Marker,
    NavigationControl,
    Popup,
    FullscreenControl,
    GeolocateControl,
} from "react-map-gl";
const UserLocationMap = ({ location }) => {
    console.log(location.lat, location.lng)
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '400px',
        latitude: location.lat,
        longitude: location.lng,
        zoom: 15
    });
    return (
        <React.Fragment>
            <Map
                mapboxAccessToken="pk.eyJ1Ijoic2p0cmFkZXIxNyIsImEiOiJjbGQ0eWxrMW4wMDJxM25xaDd0aGEyaGZtIn0.41DAcvQQr9LODTMqMY8Kjg"
                initialViewState={{
                    longitude: location.lng,
                    latitude: location.lat,
                    zoom: 14
                }}
                style={{ width: "100%", height: "300px", borderRadius: "15px", border: "2px solid green" }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                <Marker
                    latitude={location.lat}
                    longitude={location.lng}
                />
                <NavigationControl position="bottom-right" />
                <FullscreenControl />
                <GeolocateControl />
            </Map>
        </React.Fragment>
    )
}

export default UserLocationMap