import React from 'react'
import { storiesOf } from '@storybook/react'
import PaymentCardContainer from './PaymentCardContainer'

storiesOf('Santander/Black', module)
  .add('Normal', () => (
    <PaymentCardContainer
      bank="santander"
      model="normal"
      type="black"
      brand="mastercard"
      number="4111111111111111"
      cvv="123"
      holderName="Fulano de Tal"
      expiration="12/19"
    />
  ))
