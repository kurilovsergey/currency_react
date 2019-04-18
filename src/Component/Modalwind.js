import React from 'react'
import Modal from 'react-modal';
import ReactModal from 'react-modal';
import Apps from './Apps'

//компонента модального окна, взято из библиотеки react-modal
class Modalwind extends React.Component {
  
  render () {
    debugger;
    return (
      <div>
        <ReactModal 
           isOpen={this.props.modalwindow}
           contentLabel="Minimal Modal Example">
           <Apps
           handleModal={this.props.handleModal}
           />
        </ReactModal>
      </div>
    );
  }
}

export default Modalwind;