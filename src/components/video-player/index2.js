import React from 'react';
import videojs from 'video.js';
// This imports the functional component from the previous sample.
import VideoJS from './video-player2'
import { Button } from "antd";

const App = () => {
    const playerRef = React.useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: 'http://1500006202.vod2.myqcloud.com/6c9ac392vodcq1500006202/a2e5c4c0243791579195775118/playlist_eof.m3u8',
            //   type: 'video/mp4'
        }]
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    const addPoint = () => {
        console.log('playerRef.current---', playerRef.current.currentTime())
    }

    return (
        <>
            <div>Rest of app here</div>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            <Button onClick={addPoint}>添加看点</Button>
        </>
    );
}

export default App;