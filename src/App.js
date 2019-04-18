import React, { Component } from 'react';
import Modalwind from './Component/Modalwind'
import './App.css';
import Modalwindow from './Component/Modalwindow'

class App extends Component {
	constructor(props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);
    this.state = {
      modalwindow: false
    }
  }

  //появление/закрытие модального окна
  handleModal () {
    this.setState({ modalwindow: !this.state.modalwindow });
  }

  render() {
    
    return (
      <div className="App">
        <button className="buttviget" onClick={this.handleModal}>Показать виджет курса валют</button>
        <Modalwind
        modalwindow={this.state.modalwindow}
        handleModal={this.handleModal}
        />
      </div>
      );
    }
  }

  export default App;
