import React, { Component } from 'react';
import s from './Currency.module.css'

class Currencyout extends Component {

  render() {
    //вычисления значении для второго инпута в зависимости от выбранных курсов валют
    let val;
      if (this.props.currencyin==='DOL' && this.props.currencyout==='EUR') {val = this.props.inputin*this.props.USDEUR};
      if (this.props.currencyin==='EUR' && this.props.currencyout==='DOL') {val = this.props.inputin/this.props.USDEUR};
      if (this.props.currencyin==='RUR' && this.props.currencyout==='DOL') {val = this.props.inputin/this.props.USDRUB};
      if (this.props.currencyin==='DOL' && this.props.currencyout==='RUR') {val =this.props.inputin*this.props.USDRUB};
      if (this.props.currencyin==='RUR' && this.props.currencyout==='EUR') {val = this.props.inputin*(this.props.USDEUR/this.props.USDRUB)};
      if (this.props.currencyin==='EUR' && this.props.currencyout==='RUR') {val = this.props.inputin/(this.props.USDEUR/this.props.USDRUB)};
      if (this.props.currencyin===this.props.currencyout) {val = this.props.inputin
        } else {val = val.toFixed(4)};
    return (

        <div className={s.tab_content}>
          <div className={s.currencylist}>
            <div className={this.props.currencyout==='RUR' ? s.active : s.nonactive} onClick={this.props.onSelectCurrencyout}>RUR</div>
            <div className={this.props.currencyout==='DOL' ? s.active : s.nonactive} onClick={this.props.onSelectCurrencyout}>DOL</div>
            <div className={this.props.currencyout==='EUR' ? s.active : s.nonactive} onClick={this.props.onSelectCurrencyout}>EUR</div>
          </div>
          <input value={val} type="text" disabled onChange={this.props.onChangeHandler}/>
        </div>
    );
  }
}

export default Currencyout;
