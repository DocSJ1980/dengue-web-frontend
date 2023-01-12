import { useState, useEffect } from "react";

let geoId;
let timeout;

const useGeoLocation = (enabled, accuracyThreshold, accuracyThresholdWaitTime, options) => {
    const [accuracy, setAccuracy] = useState();
    const [location, setLocation] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        if (!enabled) {
            setAccuracy(undefined);
            setError(undefined);
            setLocation(undefined);
            return;
        }
        if (navigator.geolocation) {
            geoId = navigator.geolocation.watchPosition(
                (position) => {
                    const lat = position.coords?.latitude
                    const lng = position.coords?.longitude
                    setAccuracy(position.coords.accuracy);

                    if (
                        accuracyThreshold == null ||
                        position.coords.accuracy < accuracyThreshold
                    ) {
                        setLocation({ lat, lng });
                    }
                },
                (e) => {
                    setError(e.message);
                },
                options || {
                    enableHighAccuracy: true,
                    maximumAge: 2000,
                    timeout: 5000,
                }
            );
            if (accuracyThreshold && accuracyThresholdWaitTime) {
                timeout = setTimeout(() => {
                    if (!accuracy || accuracy < accuracyThreshold) {
                        setError("Failed to reach desired accuracy");
                    }
                }, accuracyThresholdWaitTime * 1000);
            }
            return () => {
                if (geoId) {
                    window.navigator.geolocation.clearWatch(geoId);
                    geoId = undefined;
                }
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = undefined;
                }
            };
        }

        setError("Geolocation API not available");
    })
    return [location, accuracy, error];
}

export default useGeoLocation;
