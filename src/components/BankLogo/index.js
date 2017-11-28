import React from 'react'
import PropTypes from 'prop-types'

import bankLogos from './helpers/bankLogos'

const BankLogo = ({
  bank,
  model,
  type,
}) => {
  if (
    !bankLogos[bank] ||
    !bankLogos[bank][model] ||
    !bankLogos[bank][model][type]
  ) {
    return null
  }

  return (
    <img
      src={bankLogos[bank][model][type]}
      alt={bank}
      className="bankLogo"
    />
  )
}

BankLogo.propTypes = {
  bank: PropTypes.string,
  model: PropTypes.string,
  type: PropTypes.string,
}

BankLogo.defaultProps = {
  bank: '',
  model: '',
  type: '',
}

export default BankLogo
