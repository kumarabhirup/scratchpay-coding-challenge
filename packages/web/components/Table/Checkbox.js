import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Checkbox as SemanticCheckbox } from 'semantic-ui-react'

export default function Checkbox(props) {
  const { isChecked, onChange } = props
  const [status, setStatus] = useState(isChecked)

  return (
    <SemanticCheckbox
      toggle
      checked={status}
      onChange={() => {
        setStatus(prevStatus => !prevStatus)

        /**
         * States in React are one-step-behind when passed to Parent Components.
         * So, we use `!status` instead of `status`
         * @see https://stackoverflow.com/questions/28773839/react-form-onchange-setstate-one-step-behind
         */
        if (onChange) onChange(!status)
      }}
    />
  )
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
}
