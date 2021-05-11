import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        carros: [],
    }

    async componentDidMount() {
        //  API USADA = https://deividfortuna.github.io/fipe/
        const response = await axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas');
        console.log(response.data);
        this.setState({ carros: response.data });
    }

    render() {
        const {carros} = this.state;
        return (
            <div>
                <h1 style={{textAlign:"center"}}>Carros</h1>
                {(carros.length === 0)
                ?
                    <p>Carregando...</p>
                :
                    <table style={{width:"50%", padding:"30px"}}>
                        <tbody>
                            <tr>
                                <th style={{padding:"10px"}}>Nome</th>
                                <th style={{padding:"10px"}}>Codigo</th>
                            </tr>
                            {carros.map(carro => (
                                <tr key={carro.nome}>
                                    <td style={{padding:"10px"}}>{carro.nome}</td>
                                    <td style={{padding:"10px"}}>{carro.codigo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
        );
    };
};

export default App;
