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
                </div>
        )
    }

    dimeQueMeQuieres = () => {
        return (
            <span 
                role='img'
                className="emoji" 
                onClick={this.miauTriste}
                aria-label='luna moon emoji nueva new'>
                😿
            </span>
        )
    }

    dimeloDeNuevo = () => {
        
        return (
            <div>
                <pre
                    className="clariceLispector"
                >       
{`
pone su cachete junto al mío
y hace ruiditos suaves 
y expresivos
y cuando me desvelo 
o estoy muy despierta
se tira boca abajo 
con sus patitas al aire
y me mira 
con sus fervientes ojos negros

dime que me quieres, dice
dímelo de nuevo
¿podría haber
un arreglo más dulce?
una y otra vez
él me preguntará
y yo le contestaré`}
                </pre>
                <span 
                    role='img'
                    className="emoji" 
                    onClick={this.miauTriste}
                    aria-label='pone su cachete junto al mio'>
                    😻
                </span>
            </div>
            )
        }

    miauTriste = () => {
        this.setState({clariceLispector: !this.state.clariceLispector})
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
                        this.state.clariceLispector ? 
                            this.dimeloDeNuevo()
                            :
                            this.dimeQueMeQuieres()
                    }
                   
                </header>

                <audio ref={ref => {this.rocioDurcal = ref}} src="./gata_lluvia.mp3" />
            </div>
        );
    }
}
