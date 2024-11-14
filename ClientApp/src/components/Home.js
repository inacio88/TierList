import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 offset-md-3 text-center">
            <h1 className="display-4">Bem-vindo ao seu Tier List!</h1>
            <p className="lead">
              Crie e compartilhe suas listas de rankings com seus amigos.
            </p>
            <Link to="/rank-movies" className="btn btn-primary me-2">Ranking de Filmes</Link>
            <Link to="/rank-albums" className="btn btn-secondary">Ranking de Álbuns</Link>
          </div>
        </div>
      </div>
    );
  }
}