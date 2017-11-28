import React from 'react'
import PropTypes from 'prop-types'

import brandLogos from './helpers/brandLogos'

import './style.css'

const BrandLogo = ({
  brand,
}) => {
  if (!brandLogos[brand]) {
    return null
  }

  return (
    <img
      src={brandLogos[brand]}
      alt={brand}
      className="brandLogo"
    />
  )
}

BrandLogo.propTypes = {
  brand: PropTypes.string,
}

BrandLogo.defaultProps = {
  brand: '',
}

export default BrandLogo
