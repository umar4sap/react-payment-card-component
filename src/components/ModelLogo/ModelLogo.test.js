import React from 'react'
import { mount } from 'enzyme'
import ModelLogo from './'

describe('ModelLogo', () => {
  it('should not mount without bank, model and type', () => {
    const wrapper = mount(
      <ModelLogo />
    )

    expect(wrapper.find('.bankLogo').at(0)).toHaveLength(0)
  })

  it('should not mount without type', () => {
    const wrapper = mount(
      <ModelLogo
        bank="bradesco"
        model="normal"
      />
    )

    expect(wrapper.find('.bankLogo').at(0)).toHaveLength(0)
  })


  it('should mount', () => {
    const wrapper = mount(
      <ModelLogo
        bank="bradesco"
        model="prime"
        type="black"
      />
    )

    expect(wrapper.find('.modelLogo').at(0)).toHaveLength(1)
  })
})
