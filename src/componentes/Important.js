import React, { Component } from 'react';
import ImportantApi from '../logicas/ImportantApi'
import { connect } from 'react-redux'

export class Important extends Component {

    add(event) {
        event.preventDefault();
        this.props.add(this.props.num);
    }

    render() {
        return (
            <div>
                <button onClick={this.add.bind(this)}>Aqui</button>
                <span>{this.props.num}</span>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        num: state.addImportant
    }
}

const mapdispatchToProps = dispatch => {
    return {
        add: (num) => {
            dispatch(ImportantApi.add(num));
        }
    }
}

const ImportantConatiner = connect(mapStateToProps, mapdispatchToProps)(Important);
export default ImportantConatiner;