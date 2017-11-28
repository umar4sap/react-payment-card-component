import React from 'react'
import { mount } from 'enzyme'
import BrandLogo from './'

describe('BrandLogo', () => {
  it('should not mount without brand', () => {
    const wrapper = mount(
      <BrandLogo />
    )

    expect(wrapper.find('.bankLogo').at(0)).toHaveLength(0)
  })

  it('should not mount with brand nonexistent', () => {
    const wrapper = mount(
      <BrandLogo
        brand="brand"
      />
    )

    expect(wrapper.find('.bankLogo').at(0)).toHaveLength(0)
  })


  it('should mount', () => {
    const wrapper = mount(
      <BrandLogo
        brand="mastercard"
      />
    )

    expect(wrapper.find('.brandLogo').at(0)).toHaveLength(1)
  })
})
