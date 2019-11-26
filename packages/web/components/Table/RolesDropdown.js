import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'

export const roleOptions = [
  {
    key: 'doctor',
    text: 'Doctor',
    value: 'doctor',
  },
  {
    key: 'admin',
    text: 'Admin',
    value: 'admin',
  },
  {
    key: 'accountant',
    text: 'Accoutant',
    value: 'accountant',
  },
]

/**
 * @name RolesDropdown
 *
 * @prop {String} activeRole
 * @prop {Function} onChange
 */
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

        // Report parent component about the change in the Checkbox.
        if (onChange) onChange(roleToBe)
      }}
    />
  )
}

RolesDropdown.propTypes = {
  activeRole: PropTypes.oneOf(roleOptions.map(role => role.value)).isRequired,
  onChange: PropTypes.func,
}
