import React, { Component } from 'react';
import ConfigApi from '../logicas/ConfigApi'
import Relogio from './Relogio'
import { connect } from 'react-redux'

export class ConfiguracaoPadrao extends Component {

    save(event) {
        event.preventDefault();
        this.props.saveMapeado({
            size: this.inputSize.value,
            time: this.inputTime.value
        });
    }

    componentDidMount() {
        this.inputSize.value = this.props.size;
        this.inputTime.value = this.props.time;
    }

    componentDidUpdate() {
        this.inputSize.value = this.props.size;
        this.inputTime.value = this.props.time;
    }

    render() {
        return (
            <div id="root">
                <Relogio></Relogio>
                <br />
                SIZE = {this.props.size}
                <br />
                TIME = {this.props.time}
                <form onSubmit={this.save.bind(this)}>
                    <fieldset>
                        <legend>Settings:</legend>
                        SIZE: <input defaultValue={this.props.size} ref={(input) => this.inputSize = input} type="number" /><br />
                        TIME: <input defaultValue={this.props.time} ref={(input) => this.inputTime = input} type="number" /><br />
                        <button>Save</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log(state);
    return {
        time: state.configuracao_state.time,
        size: state.configuracao_state.size
    }
}

const mapdispatchToProps = dispatch => {
    return {
        saveMapeado: (time) => {
            dispatch(ConfigApi.duplica(time));
        }
    }
}


ConfiguracaoPadrao.contextTypes = {
    store: React.PropTypes.object.isRequired
}

//para nao manipular o state diretamente
//o unico que pode mexer no state é o reducer(this.state, this.setState)
console.log("Connect", connect)
//conecta o reducer com o 
const ConfiguracaoConatiner = connect(mapStateToProps, mapdispatchToProps)(ConfiguracaoPadrao);

export default ConfiguracaoConatiner;