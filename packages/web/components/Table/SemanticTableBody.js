import React from 'react'
import PropTypes from 'prop-types'
import { Table as SemanticTable } from 'semantic-ui-react'

import RolesDropdown, { roleOptions } from './RolesDropdown'
import Checkbox from './Checkbox'
import Editor from './Editor'

/**
 * @name SemanticTableBody
 *
 * @prop {Array<Object>} users
 * @prop {Function} onDataChange
 */
export default function SemanticTableBody(props) {
  const { users, onDataChange } = props

  // Called when text in the input field is changed.
  const handleEditorChange = (e, value, userIndex) => {
    const data = users // Modify `users` without mutating the original variable.
    data[userIndex][e.target.name] = value

    // Everytime there is a change, report to the parent component.
    onDataChange([...data])
  }

  const emails = users.map(user => user.email)

  return (
    <SemanticTable.Body>
      {users && // To avoid 'Cannot read property 'map' of undefined'.
        users.map(
          (user, userIndex) =>
            user && (
              <SemanticTable.Row key={user.id}>
                <SemanticTable.Cell>
                  <button
                    type="button"
                    onClick={() => {
                      const data = users

                      // Delete the user from the array
                      data.splice(userIndex, 1)

                      // Report to the parent component
                      onDataChange([...data])
                    }}
                  >
                    ❌
                  </button>
                </SemanticTable.Cell>
                <SemanticTable.Cell>{user.id}</SemanticTable.Cell>
                <SemanticTable.Cell>
                  <Checkbox
                    isChecked={user.active}
                    onChange={isChecked => {
                      const data = users

                      // Report the change to the parent component everytime the Checkbox is toggled.
                      data[userIndex].active = isChecked
                      onDataChange([...data])
                    }}
                  />
                </SemanticTable.Cell>
                <SemanticTable.Cell>
                  <Editor
                    name="firstName"
                    value={user.firstName}
                    placeholder="First Name"
                    onChange={(e, value) =>
                      handleEditorChange(e, value, userIndex)
                    }
                    emailsOfAllUsers={emails}
                  />
                </SemanticTable.Cell>
                <SemanticTable.Cell>
                  <Editor
                    name="lastName"
                    value={user.lastName}
                    placeholder="Last Name"
                    onChange={(e, value) =>
                      handleEditorChange(e, value, userIndex)
                    }
                    emailsOfAllUsers={emails}
                  />
                </SemanticTable.Cell>
                <SemanticTable.Cell>
                  <Editor
                    name="email"
                    value={user.email}
                    placeholder="E-mail"
                    onChange={(e, value) =>
                      handleEditorChange(e, value, userIndex)
                    }
                    emailsOfAllUsers={emails}
                  />
                </SemanticTable.Cell>
                <SemanticTable.Cell>
                  <RolesDropdown
                    activeRole={user.role}
                    onChange={role => {
                      const data = users

                      // Report the change to the parent component everytime the Role is changed.
                      data[userIndex].role = role
                      onDataChange([...data])
                    }}
                  />
                </SemanticTable.Cell>
              </SemanticTable.Row>
            )
        )}
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
