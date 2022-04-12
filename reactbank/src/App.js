import {Component} from 'react'
import './App.css';
import Clock from './components/ClockComponent'
import Form from './components/FormComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: "Guest",
      bgColor: "",
      txtColor: ""
    }
  }

  changeUser = (e) => {
    e.preventDefault();

    const currUser = e.target[0].value;
    const currBgColor = e.target[1].value;
    const currTxtColor = e.target[2].value;
    console.log(currUser);
    console.log(currBgColor);
    console.log(currTxtColor);
    this.setState({user: currUser})
    
  }

  render() {
    return (
      <div>
        <Clock user={this.state.user} />
        <h3>Customize Profile</h3>
        <Form changeUser={this.changeUser} />
      </div>
    );
  }

}

export default App;
