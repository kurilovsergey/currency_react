import React from 'react'
import Modal from 'react-modal';
import ReactModal from 'react-modal';

//компонента модального окна, взято из библиотеке react-modal
class ExampleApp extends React.Component {

  
  render () {
    return (
      <div>
        <ReactModal 
           isOpen={this.props.modalwindow}
           contentLabel="Minimal Modal Example">
           <div>Введенные данные не корректны!</div>
           <div>Возможно вы ввели:</div>
           <ul>
             <li>Символ</li>
             <li>Дробную часть числа через ","</li>
             <li>Два символа "."</li>
           </ul>
           <div>Некорекные данные будут удалены!</div>
          <button onClick={this.props.handleCloseModal}>Принять</button>
        </ReactModal>
      </div>
    );
  }
}

export default ExampleApp;