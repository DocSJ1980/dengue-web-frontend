import { useState } from "react";

const usePicture = () => {
    const [picture, setPicture] = useState(null);

    const getMyPicture = (event) => {
        const file = event.target.files[0];

        setPicture(URL.createObjectURL(file));
        console.log('%cMyProject%cline:9%csetPicture', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', setPicture)

        // navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        //     const video = document.createElement('video');
        //     video.srcObject = stream;
        //     video.play();
        //     video.addEventListener('click', () => {
        //         const canvas = document.createElement('canvas');
        //         canvas.width = video.videoWidth;
        //         canvas.height = video.videoHeight;
        //         canvas.getContext('2d').drawImage(video, 0, 0);
        //         const picture = canvas.toDataURL();
        //         setPicture(picture);
        //     });
        // });
    }

    return [picture, getMyPicture];
}
export default usePicture