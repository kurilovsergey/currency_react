import React, { Component } from 'react';
import Currencyin from './Currencyin'
import Currencyout from './Currencyout'
import s from './Currency.module.css'
import './Apps.css';
import converter from './img/converter.png';
import Modalwindow from './Modalwindow'

class App extends Component {
	constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSelectCurrencyin = this.onSelectCurrencyin.bind(this);
    this.onSelectCurrencyout = this.onSelectCurrencyout.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.onExchange = this.onExchange.bind(this);
    this.state = {
      inputin: 0,
      inputout: 0,
      currencyin: 'DOL',
      currencyout: 'EUR',
      USDEUR: 0,
      USDRUB: 0,
      modalwindow: false
    }
  }

   //Метод жизненного цикла, чтобы вызывать функцию запроса API курса валют при первом запускеи каждые 15 сек
   componentDidMount() {
    if (this.state.USDEUR==0) {this.getCurrency()};
    setInterval(()=>this.getCurrency(), 15000);
  }

  //запрос курса валют с API /apilayer.net
  getCurrency = async () => {
   const api_url = await
   fetch(`http://apilayer.net/api/live?access_key=f094e3ecc5470ea3d08ecbd1f5c0b4bb&currencies=USD,EUR,RUB,MXN&format=1`);
   const data = await api_url.json();

   this.setState({USDEUR: data.quotes.USDEUR, USDRUB: data.quotes.USDRUB});

 }

 onChangeHandler(event){
    //проверка введенных данных в инпут, в случае не соответвия условий состаяние меняется на true и отрисовываеться модальне окно
    if (isNaN(event.target.value)) {this.setState({modalwindow: true})};
    //удаление некорекные данных
    let ch = event.target.value.replace(/[^\d.]/g, '').replace( /^([^\.]*\.)|\./g, '$1' ); 

    event.target.value = ch; 

    this.setState({
      inputin: event.target.value 
    });
    
  }
  //метод меняет состояние в зависимости от выбранной валюты
  onSelectCurrencyin(event){
    this.setState({currencyin: event.target.innerHTML});

  }
  //метод меняет состояние в зависимости от выбранной валюты
  onSelectCurrencyout(event){
    this.setState({currencyout: event.target.innerHTML});

  }
  //отвечает за кнопку сменит между собой курсы валют
  onExchange(){
    let curr = this.state.currencyin;
    this.setState({currencyin: this.state.currencyout, currencyout: curr});

  }

  //функция закрывает модальное окно  
  handleCloseModal () {
    this.setState({ modalwindow: false });
  }


  render() {


    return (
      <div className="Apps">

      <button className="closeviget" onClick={this.props.handleModal}>X</button>
      
      <div className="gridwind">
        <Currencyin
          value={this.state.inputin}
          onChangeHandler={this.onChangeHandler}
          input={this.state.inputin}
          currencyin={this.state.currencyin}
          onSelectCurrencyin={this.onSelectCurrencyin}
        />
    
      <div onClick={this.onExchange} className={s.converter}><img src={converter} alt="magic" /></div>
      
        <Currencyout
          value={this.state.inputout}
          inputin={this.state.inputin}
          onChangeHandler={this.onChangeHandler}
          inputout={this.state.inputout}
          currencyin={this.state.currencyin}
          currencyout={this.state.currencyout}
          onSelectCurrencyout={this.onSelectCurrencyout}
          USDRUB={this.state.USDRUB}
          USDEUR={this.state.USDEUR}
        />
        </div>
        <Modalwindow
         modalwindow={this.state.modalwindow}
         handleCloseModal={this.handleCloseModal}
        />
    
      </div>
      );
    }
  }

  export default App;
