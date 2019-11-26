import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'

export const roleOptions = [
  {
    key: 'doctor',
    text: 'Doctor',
    value: 'doctor',
    // image: { avatar: false, src: '/images/doctor.png' },
  },
  {
    key: 'admin',
    text: 'Admin',
    value: 'admin',
    // image: { avatar: false, src: '/images/admin.png' },
  },
  {
    key: 'accountant',
    text: 'Accoutant',
    value: 'accountant',
    // image: { avatar: false, src: '/images/accountant.png' },
  },
]

export default function RolesDropdown(props) {
  const { activeRole, onChange } = props
  const [role, setRole] = useState(activeRole)

  return (
    <Dropdown
      placeholder="Select Role"
      fluid
      selection
      options={roleOptions}
      value={role}
      onChange={(e, { value }) => {
        const roleToBe = value
        setRole(roleToBe)
        if (onChange) onChange(roleToBe)
      }}
    />
  )
}

RolesDropdown.propTypes = {
  activeRole: PropTypes.oneOf(roleOptions.map(role => role.value)).isRequired,
  onChange: PropTypes.func,
}
