import React from 'react'
import PropTypes from 'prop-types'

import brandLogos from './helpers/brandLogos'

const BrandLogo = ({
  brand,
}) => {
  if (brandLogos[brand]) {
    return (<img
      src={brandLogos[brand]}
      alt={brand}
      className="brandLogo"
    />)
  }

  return null
}

BrandLogo.propTypes = {
  brand: PropTypes.string,
}

BrandLogo.defaultProps = {
  brand: '',
}

export default BrandLogo
