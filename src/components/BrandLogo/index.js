import React from 'react'
import PropTypes from 'prop-types'

import brandLogos from './helpers/brandLogos'

import styles from './style.css'

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
      className={styles.brandLogo}
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
