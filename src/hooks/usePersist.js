import { useState, useEffect } from "react"

const usePersist = () => {
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false);
    const [lightMode, setLightMode] = useState(JSON.parse(localStorage.getItem("lightMode")) || true);
    const [myComp, setMyComp] = useState(JSON.parse(localStorage.getItem("myComp")) || "spots");

    useEffect(() => {
        localStorage.setItem("persist", JSON.stringify(persist))
    }, [persist])

    useEffect(() => {
        localStorage.setItem("lightMode", JSON.stringify(lightMode))
    }, [lightMode])

    useEffect(() => {
        localStorage.setItem("myComp", JSON.stringify(myComp))
    }, [myComp])

    return [persist, setPersist, lightMode, setLightMode, myComp, setMyComp]
}
export default usePersist