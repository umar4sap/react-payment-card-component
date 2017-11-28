import React from 'react'
import { mount } from 'enzyme'
import BankLogo from './'

describe('BankLogo', () => {
  it('should not mount without bank, model and type', () => {
    const wrapper = mount(
      <BankLogo />
    )

    expect(wrapper.find('.bankLogo').at(0)).toHaveLength(0)
  })

  it('should not mount without type', () => {
    const wrapper = mount(
      <BankLogo
        bank="bradesco"
        model="normal"
      />
    )

    expect(wrapper.find('.bankLogo').at(0)).toHaveLength(0)
  })


  it('should mount', () => {
    const wrapper = mount(
      <BankLogo
        bank="bradesco"
        model="normal"
        type="black"
      />
    )

    expect(wrapper.find('.bankLogo').at(0)).toHaveLength(1)
  })
})
