import { useState, useEffect } from "react"

const usePersist = () => {
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false);
    const [lightMode, setLightMode] = useState(JSON.parse(localStorage.getItem("lightMode")) || true);

    useEffect(() => {
        localStorage.setItem("persist", JSON.stringify(persist))
    }, [persist])

    useEffect(() => {
        localStorage.setItem("lightMode", JSON.stringify(lightMode))
    }, [lightMode])

    return [persist, setPersist, lightMode, setLightMode]
}
export default usePersist