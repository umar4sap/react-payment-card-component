import React from 'react'
import { mount } from 'enzyme'
import Logo from '../Logo'

it('should mount with no logo', () => {
  const wrapper = mount(
    <Logo />
  )

  expect(wrapper.find('img').at(0)).toHaveLength(0)
})

it('should mount bank logo', () => {
  const wrapper = mount(
    <Logo
      bank="nubank"
      model="normal"
      type="gold"
      className="bankLogo"
    />
  )

  expect(wrapper.find('.bankLogo').at(0)).toHaveLength(1)
})

it('should mount brand logo', () => {
  const wrapper = mount(
    <Logo
      brand="mastercard"
      className="brandLogo"
    />
  )

  expect(wrapper.find('.brandLogo').at(0)).toHaveLength(1)
})

it('should mount model logo', () => {
  const wrapper = mount(
    <Logo
      bank="itau"
      model="personnalite"
      type="black"
      className="modelLogo"
    />
  )

  expect(wrapper.find('.modelLogo').at(0)).toHaveLength(1)
})
