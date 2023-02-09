import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default class VideoPlayer extends React.Component {

    // Instantiate a Video.js player when the component mounts
    componentDidMount() {
        // this.player = videojs(this.videoNode, this.props, () => {
        //     videojs.log('onPlayerReady', this);
        // });

        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            videojs.log('onPlayerReady', this);
            var time1;
            var t1 = 0;
            function aa() {
                t1 += 1;
                // document.getElementById('aa').value = t1;
                console.log('aa-' + t1);
                var currentTime = document.getElementById("demo-video").firstChild.currentTime;
                console.log('currentTime-' + currentTime);
                // document.getElementById('bb').value = currentTime;
                // console.log('当前播放时间' + currentTime);
            }
            this.on('playing', function () {
                videojs.log('开始播放');
                time1 = setInterval(function () {
                    aa();
                }, 1000);
            })
            this.on('pause', function () {
                console.log('暂停播放');
                window.clearInterval(time1);
                // countTime();  //向后台发数据
            });
            this.on('ended', function () {//播放结束
                console.log("播放结束");
                window.clearInterval(time1);
            });
        });
    }

    // Dispose the player when the component will unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    // Wrap the player in a `div` with a `data-vjs-player` attribute, so Video.js
    // won't create additional wrapper in the DOM.
    //
    // See: https://github.com/videojs/video.js/pull/3856
    render() {
        return (
            <div data-vjs-player>
                <video ref={node => this.videoNode = node} id="demo-video" className="video-js"></video>
            </div>
        );
    }
}