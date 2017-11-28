import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

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

const Card = ({
  bank,
  model,
  type,
  flipped,
  children,
}) => (
  <div className={cardClasses(bank, model, type, flipped)}>
    {children}
  </div>
)

Card.propTypes = {
  bank: PropTypes.string,
  model: PropTypes.string,
  type: PropTypes.string,
  flipped: PropTypes.bool,
  children: PropTypes.node,
}

Card.defaultProps = {
  bank: '',
  model: '',
  type: '',
  flipped: false,
  children: null,
}

export default Card
