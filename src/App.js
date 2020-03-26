import React, {useState, useRef} from 'react';
import './App.css';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lluvia : false,
            celo: false,
        }
    }

    yaLoVes = () => {
        return (
            <div>
                <p id="lalluvia">🌧🌧🌧🌧🌧🌧🌧</p>
                <img id="michelle" src="/bajoLaLluvia.gif" onClick={this.miau} />
                {/* <video autoPlay="true" loop muted="true" id="michelle" onClick={this.miau}>
                    <source src="bajoLaLluvia.webm" ></source>
                </video> */}
            </div>
        )
    }

    laVidaEsAsi = () => {
        return (
            <div>
                    <span 
                        role='img'
                        className="emoji" 
                        onClick={this.miau}
                        aria-label='cloud emoji nube'>
                            ☁️
                    </span>
                    <span 
                        role='img'
                        className="emoji" 
                        onClick={this.miauTriste}
                        aria-label='luna moon emoji nueva new'>
                        🌑
                    </span>
                </div>
        )
    }

    ovulando = () => {
        return (
            <span 
                role='img'
                className="emoji" 
                onClick={this.miauTriste}
                aria-label='miau esta triste emoji'>
                😿
            </span>
        )
    }

    miauTriste = () => {
        this.setState({celo: !this.state.celo})
    }

    miau = () => {
        if (this.state.lluvia) {
            this.rocioDurcal.pause();
            this.rocioDurcal.currentTime = 0;
        }
        else {
            this.rocioDurcal.play()
        }
        this.setState({lluvia: !this.state.lluvia})
    }
    
    render () {
        return (
            <div className="App">
                <header className="App-header">

                    {
                        !this.state.lluvia && 
                        this.laVidaEsAsi()
                            //this.yaLoVes()
                    }
{/*                     
                                   
                    } */}
                    
                    {
                        this.state.celo && 
                            this.ovulando()
                    }
                   
                </header>

                <audio ref={ref => {this.rocioDurcal = ref}} src="./gata_lluvia.mp3" />
            </div>
        );
    }
}
