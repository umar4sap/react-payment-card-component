import React from 'react'
import PropTypes from 'prop-types'

const Image = ({
  src,
  alt,
  className,
}) => {
  if (src) {
    return (<img src={src} alt={alt} className={className} />)
  }

  return null
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
}

Image.defaultProps = {
  src: '',
  alt: '',
  className: '',
}

export default Image
