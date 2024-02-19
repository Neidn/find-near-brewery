import React, {useRef, useEffect, useState} from 'react';
import * as maptilerSdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import maplibregl from 'maplibre-gl';
import {useSelector} from "react-redux";

import module from './Map.module.css';
import BreweryList from "../breweryList/BreweryList";

const breweryPopupBody = (brewery) => {
    return `<strong>${brewery.name}</strong>
    <p>${brewery.street}</p>
    <p>${brewery.city}, ${brewery.state} ${brewery.postal_code}</p>
    <p>${brewery.phone}</p>
    <p><a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>`;
}

const setMarker = (map, location, color = "", bodyFlag = false) => {

    const marker = new maplibregl.Marker({
        color: color
    }).setLngLat([location.longitude, location.latitude]).addTo(map.current);

    if (bodyFlag) {

        const popup = new maplibregl.Popup({
            offset: 25,
            closeOnClick: false,
        }).setHTML(breweryPopupBody(location));

        marker.setPopup(popup);
    }

}


const Map = ({location}) => {
    maptilerSdk.config.apiKey = process.env.REACT_APP_MAPTILER_API_KEY;
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom] = useState(10);
    const breweries = useSelector(state => state.brewery.brewery);

    useEffect(() => {
        if (map.current) return; // stops the map from initializing more than once

        map.current = new maptilerSdk.Map({
            container: mapContainer.current,
            style: maptilerSdk.MapStyle.STREETS,
            center: [location.longitude, location.latitude],
            zoom: zoom
        });

        new maplibregl.Marker()
            .setLngLat([location.longitude, location.latitude])
            .setPopup(new maplibregl.Popup().setHTML('You are here'))
            .addTo(map.current);
    }, [zoom, location.latitude, location.longitude]);

    useEffect(() => {
        if (breweries.length > 0) {
            breweries.forEach((brewery) => {
                setMarker(map, brewery, "red", true);
            });
        }


    }, [breweries]);


    return (
        <>
            <div className={module.mapWrap}>
                <div ref={mapContainer} className={module.map}/>
            </div>
            <BreweryList location={location} map={map}/>
        </>
    );

}

export default Map;
