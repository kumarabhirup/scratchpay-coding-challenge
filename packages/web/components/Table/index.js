import React, { useState } from 'react'
import { Button, Icon, Table as SemanticTable } from 'semantic-ui-react'

import './table.sass'
import SemanticTableBody from './SemanticTableBody'

const defaultUsers = [
  {
    id: 1,
    active: true,
    firstName: 'Kumar',
    lastName: 'Abhirup',
    email: 'kumarabhirup5@gmail.com',
    role: 'admin',
  },
  {
    id: 2,
    active: false,
    firstName: 'Yogita',
    lastName: 'Patil',
    email: 'yogita@iqubex.com',
    role: 'accountant',
  },
]

export default function Table() {
  const [users, setUsers] = useState(defaultUsers)

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

      <SemanticTableBody users={users} onDataChange={data => setUsers(data)} />

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
                    id: 3, // some random temporary number
                    active: false,
                    firstName: '',
                    lastName: '',
                    email: '',
                    role: 'admin',
                  },
                ]

                setUsers([...data])
              }}
            >
              <Icon name="user" /> Add User
            </Button>
            <p className="table-tip">
              Double-click a cell to edit, Hit enter to save.
            </p>
          </SemanticTable.HeaderCell>
        </SemanticTable.Row>
      </SemanticTable.Footer>
    </SemanticTable>
  )
}
