import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  generatePortfolio = () => {
    return this.props.portfolio.map(stock => {
      return <Stock key={stock.id} stock={stock}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.generatePortfolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
