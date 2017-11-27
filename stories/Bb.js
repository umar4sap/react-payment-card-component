import React from 'react'
import { storiesOf } from '@storybook/react'
import PaymentCardContainer from './PaymentCardContainer'

storiesOf('Banco do Brasil/Black', module)
  .add('Ourocard', () => (
    <PaymentCardContainer
      bank="bb"
      model="ourocard"
      type="black"
      brand="mastercard"
      number="4242424242424242"
      cvv="201"
      holderName="Ada Lovelace"
      expiration="12/19"
    />
  ))
