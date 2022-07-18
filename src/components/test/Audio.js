import React, { Component } from 'react'

const sounds = [
    { letter: 'Q', mp: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
    { letter: 'W', mp: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' }]
export default class App extends Component {
    state = {
        musicSrc: ''
    }
    myMusic = React.createRef()
    playSound = (musicSrc) => {
        console.log(this.myMusic.current);
        this.setState({ musicSrc: musicSrc }, () => {
            this.myMusic.current.play();
        })
    }
    render() {
        return (
            <div id="drum-machine">
                <div id="display">
                    {sounds.map((k, i) => {
                        return <div className='drum-pad' onClick={() => this.playSound(k.mp)} key={i}>
                            {k.letter}
                        </div>
                    })}
                    <audio className='clip' src={this.state.musicSrc} ref={this.myMusic} ></audio>
                </div>
            </div>
        )
    }
}