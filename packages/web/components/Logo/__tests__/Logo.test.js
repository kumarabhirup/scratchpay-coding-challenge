import React from 'react'
import { shallow } from 'enzyme'

import Logo from '..'

describe('Logo', () => {
  it('renders', () => {
    shallow(
      <Logo
        symbol="https://storage.googleapis.com/scratchpay-com-assets/challenges/paw_symbol.png"
        logo="https://storage.googleapis.com/scratchpay-com-assets/challenges/logo.png"
      />
    )
  })
})
