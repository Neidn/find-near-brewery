import axios from 'axios';
import {useEffect} from 'react';
import {useDispatch} from "react-redux";

import {BREWERY_API_URL} from "../../lib/config";
import {breweryActions} from "../../stores/slices/brewerySlice";


const BreweryList = ({location}) => {
    const dispatch = useDispatch();
    const url = BREWERY_API_URL.replace('{LATITUDE}', location.latitude).replace('{LONGITUDE}', location.longitude);

    useEffect(() => {
        dispatch(breweryActions.resetBreweries());

        axios.get(url)
            .then((response) => {
                dispatch(breweryActions.setBreweries(response.data));
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, [dispatch, url]);

    return null;
}

export default BreweryList;
