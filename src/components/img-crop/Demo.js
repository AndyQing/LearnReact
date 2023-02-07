import React, { useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import pic from '../../assets/images/child.jpg'

const Demo = () => {
    const cropperRef = useRef(null);
    const onCrop = () => {
        const imageElement = cropperRef.current;
        const cropper = imageElement.cropper;
        console.log(cropper.getCroppedCanvas().toDataURL());
    };

    return (
        <Cropper
            src={pic}//"https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
            style={{ height: 400, width: "100%" }}
            // Cropper.js options
            initialAspectRatio={16 / 9}
            aspectRatio={16/9}
            guides={false}
            crop={onCrop}
            ref={cropperRef}
        />
    );
};
export default Demo;