import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'

export const roleOptions = [
  {
    key: 'doctor',
    text: 'Doctor',
    value: 'doctor',
    image: { avatar: true, src: '/images/doctor.png' },
  },
  {
    key: 'admin',
    text: 'Admin',
    value: 'admin',
    image: { avatar: true, src: '/images/admin.png' },
  },
  {
    key: 'accountant',
    text: 'Accoutant',
    value: 'accountant',
    image: { avatar: true, src: '/images/accountant.png' },
  },
]

export default function RolesDropdown(props) {
  const { activeRole } = props

  return (
    <Dropdown
      placeholder="Select Role"
      fluid
      selection
      options={roleOptions}
      value={activeRole}
    />
  )
}

RolesDropdown.propTypes = {
  activeRole: PropTypes.oneOf(roleOptions.map(role => role.value)),
}
