import React, { Component } from 'react'

const sounds = [{ letter: 'Q', mp: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
{ letter: 'W', mp: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' }]
export default class App extends Component {
    myMusic = React.createRef()
    playSound = (id) => {
        console.log(id)
        // console.log(this.myMusic.current);
        // this.myMusic.current.play();

        document.getElementById(id).play();
    }
    render() {
        return (
            <div id="drum-machine">
                <div id="display">
                    {sounds.map((k, i) => {
                        return <div className='drum-pad' onClick={this.playSound.bind(this, k.letter)} key={i}>
                            {k.letter}
                            <audio className='clip' id={k.letter} src={k.mp} ref={this.myMusic} ></audio>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}