import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Table from '..'

describe('<Table />', () => {
  it('renders', () => {
    shallow(<Table />)
  })

  it('matches snapshot', () => {
    const wrapper = shallow(<Table />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
