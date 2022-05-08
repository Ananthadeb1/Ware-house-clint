import { useEffect, useState } from "react";

const useSPices = () => {
    const [spices, setSpices] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/spices")
            .then(res => res.json())
            .then(data => setSpices(data))

    }, []);
    return [spices, setSpices];
}

export default useSPices;