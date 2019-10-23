import React, { Component } from 'react';
import Stock from '../components/Stock'
import { throws } from 'assert';

class StockContainer extends Component {

  generateStocks = () => {
    return this.props.stocks.map(stock => {
      return <Stock key={stock.id} stock={stock} addStockToPortfolio={this.props.addStockToPortfolio}/>
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.generateStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
