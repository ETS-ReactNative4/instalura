import React, { Component } from 'react';
import FotoItem from './Foto';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'
import TimelineApi from '../logicas/TimelineApi'
import { connect } from 'react-redux'

export class Timeline extends Component {

    carregaFotos(props) {
        let urlPerfil = '';
        if (props.login === undefined) {
            urlPerfil = `http://localhost:8080/api/fotos/?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`;
        } else {
            urlPerfil = `http://localhost:8080/api/public/fotos/${props.login}`;
        }
        this.props.lista(urlPerfil);
    }

    componentDidMount() {
        this.carregaFotos(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.login !== undefined) {
            this.carregaFotos(nextProps)
        }
    }

    add() {
        this.props.addd(this.props.num);
    }

    render() {
        return (
            <div className="fotos container">
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {
                        this.props.fotos.map(foto => <FotoItem like={this.props.like} comenta={this.props.comenta} key={foto.id} foto={foto} />)
                    }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fotos: state.timeline.list,
        num: state.timeline.num,
    }
}

const mapdispatchToProps = dispatch => {
    return {
        like: (fotoId) => {
            dispatch(TimelineApi.like(fotoId));
        },
        comenta: (fotoId, texto) => {
            dispatch(TimelineApi.comenta(fotoId, texto));
        },
        lista: (urlPerfil) => {
            dispatch(TimelineApi.lista(urlPerfil));
        },
        addd: (num) => {
            dispatch(TimelineApi.add(num));
        }
    }
}

const TimelineConatiner = connect(mapStateToProps, mapdispatchToProps)(Timeline);
export default TimelineConatiner;