import React from 'react'
import { storiesOf } from '@storybook/react'
import PaymentCardContainer from './PaymentCardContainer'

storiesOf('Itaú/Black', module)
  .add('Normal', () => (
    <PaymentCardContainer
      bank="itau"
      model="normal"
      type="black"
      brand="mastercard"
      number="4111111111111111"
      cvv="123"
      holderName="Fulano de Tal"
      expiration="12/19"
    />
  ))
  .add('Personnalité', () => (
    <PaymentCardContainer
      bank="itau"
      model="personnalite"
      type="black"
      brand="mastercard"
      number="4111111111111111"
      cvv="123"
      holderName="Fulano de Tal"
      expiration="12/19"
    />
  ))
