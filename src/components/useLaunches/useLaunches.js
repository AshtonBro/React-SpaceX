import React, { useEffect, useState } from 'react';
import FetchData from '../../service/FetchData';

const fetchData = new FetchData();

const useLaunches = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
		fetchData.getLaunches()
		.then((launches) => setData((state) => [...launches]))	
    }, []);
    

    return { data };
};

export default useLaunches;
