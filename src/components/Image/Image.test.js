import React from 'react'
import { mount } from 'enzyme'
import Image from '../Image'

it('should mount image', () => {
  const source = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
  const wrapper = mount(
    <Image
      src={source}
      alt="image"
      className="imageClass"
    />
  )

  expect(wrapper.find('.imageClass').at(0)).toHaveLength(1)
})

it('should not mount image without source', () => {
  const wrapper = mount(
    <Image
      src=""
      alt="image"
      className="imageClass"
    />
  )

  expect(wrapper.isEmptyRender()).toEqual(true)
})
