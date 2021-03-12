import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lluvia : false,
            celo: false,
            pensamiento: false,
            pastillas: false,
            morado: '#ff00ff',
        }
    }

    yaLoVes = () => {
        return (
            <div>
                <p id="lalluvia">🌧🌧🌧🌧🌧🌧🌧</p>
                <img alt="felina" id="michelle" src="/bajoLaLluvia.gif" onClick={this.miau} />
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
                    className="maryOliver"
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
        this.setState({maryOliver: !this.state.maryOliver})
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

    rand = () => Math.random() * 256

    atuncito = () => {
      const rojo = Math.round(this.rand()).toString(16);
      const azul = Math.round(this.rand()).toString(16);
      const propuesta = `#${rojo}00${azul}`;

      this.setState({morado: propuesta}, ()=>{console.log(this.state.morado)})
    };

    soloPienso = () => {
      this.setState({pensamiento: !this.state.pensamiento});
    };

    cualesPastillas = () => {
      this.setState({pastillas: !this.state.pastillas});
    };

    render () {
      if (this.state.pensamiento) {
        return (
            <div
              id="doItForHer"
              onClick={this.soloPienso}>
                &nbsp;
            </div>
        );
      } 
      else if (this.state.pastillas) {
        const ahora = Date.now()
        const jueves = [
          {
            nombre: 'Omeprazol',
            llevamos: 1,
            faltan: 0,
            a_que_hora: ahora,
          },
          {
            nombre: 'Amoxiclav',
            llevamos: 2,
            faltan: 0,
            a_que_hora: ahora,
          },
          {
            nombre: 'Mucosolvan (doble felina)',
            llevamos: 3,
            faltan: 0,
            a_que_hora: ahora,
          },
          {
            nombre: 'Nutribound',
            llevamos: 4,
            faltan: 0,
            a_que_hora: ahora,
          },
          {
            nombre: 'Guayaneumol (doble felina)',
            llevamos: 1,
            faltan: 0,
            a_que_hora: ahora,
          },
        ];
        const viernes = [
          {
            nombre: 'Omeprazol',
            llevamos: 1,
            faltan: 0,
            a_que_hora: ahora,
          },
          {
            nombre: 'Amoxiclav',
            llevamos: 1,
            faltan: 1,
            a_que_hora: ahora,
          },
          {
            nombre: 'Mucosolvan (doble felina)',
            llevamos: 1,
            faltan: 2,
            a_que_hora: ahora,
          },
          {
            nombre: 'Nutribound',
            llevamos: 2,
            faltan: 2,
            a_que_hora: ahora,
          },
          {
            nombre: 'Guayaneumol (doble felina)',
            llevamos: 0,
            faltan: 1,
            a_que_hora: ahora,
          },
        ];
        const renderizaDia = (medicina) => {
          return (
            <div className={"medicina"}>
              <div>{medicina.nombre}</div>
              <div className="dosis">
                <span>
                  {("✓").repeat(medicina.llevamos)}
                </span>
                <span>
                  {("❍").repeat(medicina.faltan)}
                </span>
              </div>
            </div>
          );
        }
        return (
          <div className="App" onClick={this.cualesPastillas} style={{backgroundColor: '#3E0940'}}>
            <div className="lasDelDia">
              <h1 style={{color:'#df1f89'}}>
                Viernes 12M
              </h1>
              {viernes.map(e=>renderizaDia(e))}
            </div>

            <div className="lasDeAyer">
              <h1>
                Jueves 11M
              </h1>
              {jueves.map(e=>renderizaDia(e))}
            </div>

            <div className="lasDeAyer">
              <h1>
                Miércoles 10M
              </h1>
              <div className={"medicina"}>
                <div>Omeprazol</div>
                <div className="dosis">
                  <span>✓</span>
                </div>
              </div>
              <div className={"medicina"}>
                <div>Amoxiclav</div>
                <div className="dosis">
                  <span>✓</span>
                  <span>✓</span>
                </div>
              </div>
              <div className={"medicina"}>
                <div>Mucosolvan (doble felina)</div>
                <div className="dosis">
                  <span>✓</span>
                  <span>❍</span>
                  <span>❍</span>
                </div>
              </div>
              <div className={"medicina"}>
                <div>Nutribound</div>
                <div className="dosis">
                  <span>✓</span>
                  <span>✓</span>
                  <span>❍</span>
                  <span>❍</span>
                </div>
              </div>
              <div className={"medicina"}>
                <div>Guayaneumol (doble felina)</div>
                <div className="dosis">
                  <span>✓</span>
                </div>
              </div>
            </div>

            <span
              role='img'
              className="emoji backButton" 
              onClick={this.cualesPastillas}
              aria-label=''>
                😌
            </span>
          </div>
        )
      }
      else {
        return (
            <div className="App" style={{backgroundColor: this.state.morado}}>
                  <header className="App-header">

                  {
                    !this.state.pensamiento && 
                      <span
                        role='img'
                        className="emoji" 
                        onClick={this.soloPienso}
                        aria-label='cerebro'>
                        🧠
                      </span>
                  }

                  {
                      this.state.maryOliver ? 
                          this.dimeloDeNuevo()
                          :
                          this.dimeQueMeQuieres()
                  }

                  {
                    
                    <span 
                      role='img'
                      className="emoji" 
                      onClick={this.atuncito}
                      aria-label='atuncito'>
                      🐟
                    </span>
                  }

                  {
                    !this.state.medicinas &&
                      <span
                        role='img'
                        className='emoji'
                        onClick={this.cualesPastillas}
                        aria-label='pastillas'>
                          💊
                      </span>
                  }
                 
              </header>
              <audio ref={ref => {this.rocioDurcal = ref}} src="./gata_lluvia.mp3" />
            </div>
        );
      };
    }
}
