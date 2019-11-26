import React from 'react'
import { shallow } from 'enzyme'

import Table from '..'

describe('Table', () => {
  it('renders', () => {
    shallow(<Table />)
  })

  it('matches snapshot', () => {})
})
