import React from 'react'
import PropTypes from 'prop-types'
import { Table as SemanticTable } from 'semantic-ui-react'

import RolesDropdown, { roleOptions } from './RolesDropdown'
import Checkbox from './Checkbox'

export default function SemanticTableBody(props) {
  const { users, onDataChange } = props

  return (
    <SemanticTable.Body>
      {users.map(user => (
        <SemanticTable.Row key={user.id}>
          <SemanticTable.Cell>{user.id}</SemanticTable.Cell>
          <SemanticTable.Cell>
            <Checkbox
              isChecked={user.active}
              onChange={isChecked => {
                const data = users
                data.find(node => node.id === user.id).active = isChecked
                onDataChange([...data])
              }}
            />
          </SemanticTable.Cell>
          <SemanticTable.Cell>{user.firstName}</SemanticTable.Cell>
          <SemanticTable.Cell>{user.lastName}</SemanticTable.Cell>
          <SemanticTable.Cell>{user.email}</SemanticTable.Cell>
          <SemanticTable.Cell>
            <RolesDropdown
              activeRole={user.role}
              onChange={role => {
                const data = users
                data.find(node => node.id === user.id).role = role
                onDataChange([...data])
              }}
            />
          </SemanticTable.Cell>
        </SemanticTable.Row>
      ))}
    </SemanticTable.Body>
  )
}

SemanticTableBody.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        active: PropTypes.bool.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        role: PropTypes.oneOf(roleOptions.map(role => role.value)),
      }.isRequired
    )
  ),
  onDataChange: PropTypes.func,
}
