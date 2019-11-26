import React from 'react'
import { Button, Icon, Table as SemanticTable } from 'semantic-ui-react'

import './table.sass'
import SemanticTableBody from './SemanticTableBody'
import useLocalStorage from '../../lib/hooks/useLocalStorage'

/**
 * @name Table
 * @description This component handles the `users` state...
 */
export default function Table() {
  const [users, setUsers] = useLocalStorage('usersState', []) // useLocalStorage Hook syncs React State with the LocalStorage memory.

  return (
    <SemanticTable compact definition color="blue">
      <SemanticTable.Header fullWidth>
        <SemanticTable.Row>
          <SemanticTable.HeaderCell />
          <SemanticTable.HeaderCell>ID</SemanticTable.HeaderCell>
          <SemanticTable.HeaderCell>Status</SemanticTable.HeaderCell>
          <SemanticTable.HeaderCell>First Name</SemanticTable.HeaderCell>
          <SemanticTable.HeaderCell>Last Name</SemanticTable.HeaderCell>
          <SemanticTable.HeaderCell>E-mail address</SemanticTable.HeaderCell>
          <SemanticTable.HeaderCell>Role</SemanticTable.HeaderCell>
        </SemanticTable.Row>
      </SemanticTable.Header>

      <SemanticTableBody
        users={users}
        onDataChange={data => setUsers(data)} // Triggers everytime `users` data is changed in `SemanticTableBody` component.
      />

      <SemanticTable.Footer fullWidth>
        <SemanticTable.Row>
          <SemanticTable.HeaderCell />
          <SemanticTable.HeaderCell colSpan="6">
            <Button
              floated="right"
              icon
              labelPosition="left"
              primary
              size="small"
              onClick={() => {
                const data = [
                  ...users,
                  {
                    id: users.length > 0 ? users[users.length - 1].id + 1 : 1, // Explanation: If there are users available, then keep incrementing the `id` of the user, else just start from 1.
                    active: false,
                    firstName: '', // Empty fields will appear as textboxes.
                    lastName: '',
                    email: '',
                    role: 'admin',
                  },
                ]

                setUsers([...data]) // setUsers(data) doesn't work because React won't be able to distinguish b/w Array that way. So, use `setUsers([...data])` instead.
              }}
            >
              <Icon name="user" /> Add User
            </Button>
            <p className="table-tip">
              Double-click a cell to toggle the editor. Hit enter to save.
            </p>
          </SemanticTable.HeaderCell>
        </SemanticTable.Row>
      </SemanticTable.Footer>
    </SemanticTable>
  )
}
