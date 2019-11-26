import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'

import SemanticTableBody from '../SemanticTableBody'
import users from '../../../lib/__mocks__/users'

describe('<SemanticTableBody />', () => {
  it('renders', () => {
    shallow(<SemanticTableBody />)
  })

  it('matches snapshot', () => {
    const wrapper = mount(<SemanticTableBody users={users} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('updates via prop', () => {
    const wrapper = mount(
      <SemanticTableBody
        users={[...users, { ...users[0], id: 3, firstName: '' }]}
      />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()

    wrapper.setProps({ users })

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
