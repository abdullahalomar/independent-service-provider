import { useEffect, useState } from "react"

const useServices = (count) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(response => response.json())
        .then(json => setServices(json.slice(3,count)))
    }, []);

    return [services, setServices];
}

export default useServices;