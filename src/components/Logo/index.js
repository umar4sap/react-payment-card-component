import React from 'react'
import PropTypes from 'prop-types'

import bankLogos from './helpers/bankLogos'
import brandLogos from './helpers/brandLogos'
import modelLogos from './helpers/modelLogos'
import './style.css'

const Logo = ({
  bank,
  model,
  type,
  brand,
  className,
}) => {
  if (className === 'brandLogo' && brandLogos[brand]) {
    return (
      <img
        src={brandLogos[brand]}
        alt={brand}
        className={className}
      />
    )
  }

  const bankLogosObj = bankLogos[bank]
  if (className === 'bankLogo' && bankLogosObj) {
    const modelObj = bankLogosObj[model]
    if (modelObj && modelObj[type]) {
      return (
        <img
          src={modelObj[type]}
          alt={bank}
          className={className}
        />
      )
    }
  }

  const modelLogosObj = modelLogos[bank]
  if (className === 'modelLogo' && modelLogosObj) {
    const logoObj = modelLogosObj[model]
    if (logoObj && logoObj[type]) {
      return (
        <img
          src={logoObj[type]}
          alt={bank}
          className={className}
        />
      )
    }
  }

  return null
}

Logo.propTypes = {
  bank: PropTypes.string,
  model: PropTypes.string,
  type: PropTypes.string,
  brand: PropTypes.string,
  className: PropTypes.string,
}

Logo.defaultProps = {
  bank: '',
  model: '',
  type: '',
  brand: '',
  className: '',
}

export default Logo
