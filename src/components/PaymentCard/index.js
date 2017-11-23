import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.css'
import Logo from '../Logo'

const formatCardNumber = cardNumber =>
  cardNumber.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ')

const cardClasses = (bank, model, type, flipped) => {
  const cardClassName = `${bank}-${model}-${type}`

  return classNames(
    'card',
    bank,
    {
      flipped,
      [cardClassName]: (bank && model && type),
    },
  )
}

const PaymentCard = ({
  bank,
  model,
  type,
  number,
  cvv,
  expiration,
  holderName,
  brand,
  flipped,
}) => (
  <div className="wrapper">
    <div className={cardClasses(bank, model, type, flipped)}>
      <div className="front">
        <Logo
          bank={bank}
          model={model}
          type={type}
          className="bankLogo"
        />
        <Logo
          bank={bank}
          model={model}
          type={type}
          className="modelLogo"
        />
        <div className="chip">
          <div className="horizontalLine" />
          <div className="verticalLine" />
        </div>
        <div className="number">
          {formatCardNumber(number)}
        </div>
        <div className="expiration">
          {expiration}
        </div>
        <div className="holderName">
          {holderName}
        </div>
        <Logo
          brand={brand}
          className="brandLogo"
        />
      </div>
      <div className="back">
        <div className="cvv">
          {cvv}
        </div>
      </div>
    </div>
  </div>
)

PaymentCard.propTypes = {
  bank: PropTypes.string,
  model: PropTypes.string,
  type: PropTypes.string,
  brand: PropTypes.string,
  number: PropTypes.string,
  cvv: PropTypes.string,
  holderName: PropTypes.string,
  expiration: PropTypes.string,
  flipped: PropTypes.bool,
}

PaymentCard.defaultProps = {
  bank: '',
  model: '',
  type: '',
  brand: '',
  number: '•••• •••• •••• ••••',
  cvv: '•••',
  holderName: 'Nome Completo',
  expiration: 'MM/AA',
  flipped: false,
}

export default PaymentCard
