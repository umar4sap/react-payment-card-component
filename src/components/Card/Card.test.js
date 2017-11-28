import React from 'react'
import { mount } from 'enzyme'
import Card from './'

describe('Card', () => {
  it('should mount', () => {
    const wrapper = mount(
      <Card />
    )

    expect(wrapper.find('.card').at(0)).toHaveLength(1)
  })

  it('should mount card with specific card style', () => {
    const wrapper = mount(
      <Card
        bank="brandesco"
        model="prime"
        type="black"
      />
    )

    expect(wrapper.find('.brandesco-prime-black').at(0)).toHaveLength(1)
  })


  it('should mount card with children', () => {
    const wrapper = mount(
      <Card>
        <span className="children" />
      </Card>
    )

    expect(wrapper.find('.children').at(0)).toHaveLength(1)
  })
})
