import React, {useState} from "react";
import {Button} from "@material-tailwind/react";

import Map from "../../components/map/Map";


const report = state => {
    console.log(`Permission ${state}`);
};

const HomePage = () => {
    const [location, setLocation] = useState({
        longitude: null,
        latitude: null
    });

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log('latitude', latitude);
        console.log('longitude', longitude);

        setLocation({
            longitude: longitude,
            latitude: latitude
        });
    };

    const error = () => {
        alert('Unable to retrieve your location');
    };


    const getLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            return;
        }

        navigator.geolocation.getCurrentPosition(success, error);
    }

    const handlePermission = () => {
        navigator.permissions
            .query({name: "geolocation"})
            .then((permissionStatus) => {
                report(permissionStatus.state);
                if (permissionStatus.state === "prompt") {
                    navigator.geolocation.getCurrentPosition(success, error);
                } else if (permissionStatus.state === "denied") {
                    alert('You have denied the location permission');
                    report(permissionStatus.state);
                } else if (permissionStatus.state === "granted") {
                    getLocation();
                }
            });
    };

    if (location.longitude !== null && location.latitude !== null) {
        return (
            <>
                <Map location={location}/>
            </>
        );
    } else {
        return (
            <div className="flex justify-center items-center h-96">
                <Button
                    type={"button"}
                    size={"lg"}
                    onClick={handlePermission}
                >
                    Find Brewery
                </Button>
            </div>
        );
    }
}

export default HomePage;
