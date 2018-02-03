import React, { Component } from 'react';
import FotoItem from './Foto';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'
import TimelineApi from '../logicas/TimelineApi'

export default class Timeline extends Component {

    constructor() {
        super();
        this.state = { fotos: [] };
    }

    componentWillMount() {
        this.props.store.subscribe(() => {
            this.setState({ fotos: this.props.store.getState() });
        })
    }

    carregaFotos(props) {
        let urlPerfil = '';
        if (props.login === undefined) {
            urlPerfil = `http://localhost:8080/api/fotos/?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`;
        } else {
            urlPerfil = `http://localhost:8080/api/public/fotos/${props.login}`;
        }
        this.props.store.dispatch(TimelineApi.lista(urlPerfil));
    }

    componentDidMount() {
        this.carregaFotos(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.login !== undefined) {
            this.carregaFotos(nextProps)
        }
    }

    like(fotoId) {
        this.props.store.dispatch(TimelineApi.like(fotoId));
    }

    comenta(fotoId, texto) {
        this.props.store.dispatch(TimelineApi.comenta(fotoId, texto));
    }

    render() {
        return (
            <div className="fotos container">
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {
                        this.state.fotos.map(foto => <FotoItem like={this.like.bind(this)} comenta={this.comenta.bind(this)} key={foto.id} foto={foto} />)
                    }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}