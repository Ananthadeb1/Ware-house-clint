import { useEffect, useState } from "react";

const usePerfumes = () => {
    const [Perfumes, setPerfumes] = useState([])
    useEffect(() => {
        fetch("https://enigmatic-tundra-20476.herokuapp.com/perfumes")
            .then(res => res.json())
            .then(data => setPerfumes(data))

    });
    return [Perfumes, setPerfumes];
}

export default usePerfumes;
// https://stackoverflow.com/questions/72172939/how-to-get-rid-of-missing-dependency-warning-of-useeffect-in-react