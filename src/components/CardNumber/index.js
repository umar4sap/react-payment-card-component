import React from 'react'
import PropTypes from 'prop-types'

const formatCardNumber = cardNumber =>
  cardNumber.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ')

const CardNumber = ({
  number,
}) => (
  <div className="number">
    {formatCardNumber(number)}
  </div>
)

CardNumber.propTypes = {
  number: PropTypes.string,
}

CardNumber.defaultProps = {
  number: '',
}

export default CardNumber
