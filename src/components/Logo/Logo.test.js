import React from 'react'
import { mount } from 'enzyme'
import PaymentCard from '../PaymentCard'

it('should mount with no logo', () => {
  const wrapper = mount(
    <PaymentCard />
  )

  expect(wrapper.find('img').at(0)).toHaveLength(0)
})

it('should mount with bank logo', () => {
  const wrapper = mount(
    <PaymentCard
      bank="nubank"
      model="normal"
      type="gold"
    />
  )

  expect(wrapper.find('.bankLogo').at(0)).toHaveLength(1)
})

it('should mount with brand logo', () => {
  const wrapper = mount(
    <PaymentCard
      brand="mastercard"
    />
  )

  expect(wrapper.find('.brandLogo').at(0)).toHaveLength(1)
})

it('should mount with bank logo and brand logo', () => {
  const wrapper = mount(
    <PaymentCard
      bank="nubank"
      brand="mastercard"
    />
  )

  expect(wrapper.find('.bankLogo').at(0)).toHaveLength(1)
  expect(wrapper.find('.brandLogo').at(0)).toHaveLength(1)
})

it('should mount with bank logo, brand logo and model logo', () => {
  const wrapper = mount(
    <PaymentCard
      bank="itau"
      model="personnalite"
      type="black"
      brand="mastercard"
    />
  )

  expect(wrapper.find('.bankLogo').at(0)).toHaveLength(1)
  expect(wrapper.find('.brandLogo').at(0)).toHaveLength(1)
  expect(wrapper.find('.modelLogo').at(0)).toHaveLength(1)
})
