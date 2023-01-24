import { useState } from "react";

const usePicture = () => {
    const [picture, setPicture] = useState(null);

    const getMyPicture = (event) => {
        const file = event.target.files[0];

        setPicture(URL.createObjectURL(file));
    }

    return [picture, getMyPicture];
}
export default usePicture