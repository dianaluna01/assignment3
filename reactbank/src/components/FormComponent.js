import { Component } from 'react'

class FormComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            showform: false,
            username: '',
            bgHex: '',
            txtHex: '',
            unameValue: '',
            bgValue: '',
            txtValue: ''
        }
    }

    save = () => {
        this.setState(state => {
            return {username: state.unameValue, bgHex: state.bgValue, txtHex: state.txtValue}
        });

        this.setState({showform: false});
    }

    edit = () => {
        this.setState({showform: true});
    }

    cancel = () => {
        this.setState({showform: false});
    }

    updateUsername = (event) => {
        this.setState({unameValue: event.target.value});
    }

    updateBg = (event) => {
        this.setState({bgValue: event.target.value});
    }

    updateTxt = (event) => {
        this.setState({txtValue: event.target.value});
    }

    render() {
        if(this.state.showform){
            return (
                <div className="edit-form-container">
                    <input className="edit-username" onChange={this.updateUsername} placeholder={this.state.username}/>
                    <input className="edit-bg" onChange={this.updateBg} placeholder={this.state.bgHex}/>
                    <input className="edit-txt" onChange={this.updateTxt} placeholder={this.state.txtHex}/>
                    <button className="save-button" onClick={this.save}>Save</button>
                    <button className="cancel-button" onClick={this.cancel}>Cancel</button>
                </div>
            );
        } else {
            return (
                <div className="form-container">
                    <div className="username">Username: {this.state.username}</div>
                    <button id="edit-button" onClick={this.edit}>Edit</button>
                </div>
            );
        }
    }
}

export default FormComponent;