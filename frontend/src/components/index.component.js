import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {registros: []};
      this.atualizaDados = this.atualizaDados.bind(this)
    }

    atualizaDados(data) {
      this.setState({ registros: data });
    }

    componentDidMount(){
      axios.get('http://localhost:3333/registros')
        .then(res => this.atualizaDados(res.data))
        .catch(function (error) {
          console.log(error);
        });
    }

    tabRow(){
      var atDados = this.atualizaDados;
      return this.state.registros.map(function(object, i){
          return <TableRow obj={object} key={i} atualizaDados={atDados}/>;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Lista de Registros:</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Nome:</th>
                <th>E-mail:</th>
                <th colSpan="2">Ações:</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }