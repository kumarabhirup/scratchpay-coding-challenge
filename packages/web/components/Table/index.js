import React from 'react'
import {
  Button,
  Checkbox,
  Icon,
  Table as SemanticTable,
  Dropdown,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

import './table.sass'

const roleOptions = [
  {
    key: 'doctor',
    text: 'Doctor',
    value: 'Doctor',
    image: { avatar: true, src: '/images/doctor.png' },
  },
  {
    key: 'admin',
    text: 'Admin',
    value: 'Admin',
    image: { avatar: true, src: '/images/admin.png' },
  },
  {
    key: 'accountant',
    text: 'Accoutant',
    value: 'Accountant',
    image: { avatar: true, src: '/images/accountant.png' },
  },
]

export default function Table(props) {
  // const { symbol, logo } = props

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

      <SemanticTable.Body>
        <SemanticTable.Row>
          <SemanticTable.Cell>1</SemanticTable.Cell>
          <SemanticTable.Cell>
            <Checkbox slider />
          </SemanticTable.Cell>
          <SemanticTable.Cell>John</SemanticTable.Cell>
          <SemanticTable.Cell>Lilki</SemanticTable.Cell>
          <SemanticTable.Cell>jhlilk22@yahoo.com</SemanticTable.Cell>
          <SemanticTable.Cell>
            <Dropdown
              placeholder="Select Role"
              fluid
              selection
              options={roleOptions}
            />
          </SemanticTable.Cell>
        </SemanticTable.Row>
      </SemanticTable.Body>

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

Table.propTypes = {}
