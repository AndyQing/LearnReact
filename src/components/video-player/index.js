import React from "react";
// import videoSrc from "../../assets/cat.mp4";//本地引用mp4格式文件可以
// import videoSrc from "../../assets/playlist_eof.m3u8";//但本地引用m3u8格式文件不行
import "cropperjs/dist/cropper.css";
import VideoPlayer from './video-player'
import { Button } from "antd";

// 官网链接：
// https://videojs.com/guides
// https://videojs.com/guides/react/

const Demo = () => {
    const videoJsOptions = {
        autoplay: true,
        controls: true,
        sources: [{
            src: 'http://1500006202.vod2.myqcloud.com/6c9ac392vodcq1500006202/a2e5c4c0243791579195775118/playlist_eof.m3u8'//videoSrc,
            // type: 'video/mp4'
        }]
    }
    const addPoint = () => {

    }
    return (
        <>
            <VideoPlayer  {...videoJsOptions} />
            <Button onClick={addPoint}>添加看点</Button>
        </>
    );
};
export default Demo;