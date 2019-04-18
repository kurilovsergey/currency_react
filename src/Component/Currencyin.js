import React, { Component } from 'react';
import s from './Currency.module.css'

class Currencyin extends Component {

  render() {

    return (
      <div className={s.tab_content}>
        <div className={s.currencylist}>
          <div className={this.props.currencyin==='RUR' ? s.active : s.nonactive} onClick={this.props.onSelectCurrencyin}>RUR</div>
          <div className={this.props.currencyin==='DOL' ? s.active : s.nonactive} onClick={this.props.onSelectCurrencyin}>DOL</div>
          <div className={this.props.currencyin==='EUR' ? s.active : s.nonactive} onClick={this.props.onSelectCurrencyin}>EUR</div>
        </div>
        <input step="any" value={this.props.input} onChange={this.props.onChangeHandler}/>
      </div>
      );
    }
  }

  export default Currencyin;
