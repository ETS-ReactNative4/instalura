import React, { Component } from 'react';
import TimelineApi from '../logicas/TimelineApi'
import { connect } from 'react-redux'

export class Header extends Component {

  pesquisa(event) {
    event.preventDefault();
    if (this.loginPesquisado.value) {
      this.props.search(this.loginPesquisado.value);
    }
  }

  render() {
    return (
      <header className="header container">
        <h1 className="header-logo">
          Instalura
          </h1>
        <form onSubmit={this.pesquisa.bind(this)} className="header-busca">
          <input ref={(input) => this.loginPesquisado = input} type="text" name="search" placeholder="Pesquisa" className="header-busca-campo" />
          <input type="submit" value="Buscar" className="header-busca-submit" />
        </form>
        <nav>
          <ul className="header-nav">
            <li className="header-nav-item">
              <span>{this.props.msg}</span>
              <a href="#">
                ♡
                  {/*                 ♥ */}
                {/* Quem deu like nas minhas fotos */}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    msg: state.header
  }
}

const mapdispatchToProps = dispatch => {
  return {
    search: (loginPesquisado) => {
      dispatch(TimelineApi.pesquisa(loginPesquisado));
    }
  }
}

const HeaderConatiner = connect(mapStateToProps, mapdispatchToProps)(Header);
export default HeaderConatiner;