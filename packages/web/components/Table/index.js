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

  console.log(users)

  return (
    <SemanticTable celled compact definition>
      <SemanticTable.Header fullWidth>
        <SemanticTable.Row>
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
          <SemanticTable.HeaderCell colSpan="5">
            <Button
              floated="right"
              icon
              labelPosition="left"
              primary
              size="small"
            >
              <Icon name="user" /> Add User
            </Button>
          </SemanticTable.HeaderCell>
        </SemanticTable.Row>
      </SemanticTable.Footer>
    </SemanticTable>
  )
}
