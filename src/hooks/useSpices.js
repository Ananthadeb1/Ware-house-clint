import { useEffect, useState } from "react";

const useSPices = () => {
    const [spices, setSpices] = useState([])
    useEffect(() => {
        fetch("https://enigmatic-tundra-20476.herokuapp.com/perfumes")
            .then(res => res.json())
            .then(data => setSpices(data))

    });
    return [spices, setSpices];
}

export default useSPices;
// https://stackoverflow.com/questions/72172939/how-to-get-rid-of-missing-dependency-warning-of-useeffect-in-react