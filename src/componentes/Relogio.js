import React, { Component } from 'react';

export default class Relogio extends Component {

    constructor() {
        super();
        this.state = {
            dataAtual: new Date()
        }
        setInterval(() => {
            this.setState({
                dataAtual: new Date()
            })
        }, 1000)
    }

    render() {
        return (
            <div>{this.formataData()}</div>
        )
    }

    //da internet nao levar em consideracao
    formataData() {
        let date = this.state.dataAtual;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours %= 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes+ ':' + seconds + ' ' + ampm;
        return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    }
}