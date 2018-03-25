import React, { Component } from 'react';
import RelogioApi from '../logicas/RelogioApi'
import { connect } from 'react-redux'

export class Relogio extends Component {

    constructor() {
        super();
        setInterval(() => {
           this.props.atuailizaMapeado();
        }, 1000)
    }

    render() {
        return (
            <div>{this.formataData()}</div>
        )
    }

    //da internet nao levar em consideracao
    formataData() {
        let date = this.props.dataAtual;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours %= 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    }
}

const mapStateToProps = state => {
    return {
        dataAtual: state.relogioReducer.dataAtual
    }
}

const mapdispatchToProps = dispatch => {
    return {
        atuailizaMapeado: () => {
            dispatch(RelogioApi.atualizaRelogio());
        }
    }
}

const RelogioConatiner = connect(mapStateToProps, mapdispatchToProps)(Relogio);
export default RelogioConatiner;