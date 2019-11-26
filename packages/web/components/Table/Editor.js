import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { isEmailProper } from '../../lib/utils'

export default function Editor(props) {
  const { name, value, placeholder, onChange } = props
  const [shouldShowTextarea, setShowTextarea] = useState(false)
  const [editorValue, setEditorValue] = useState(value)

  const decideWhetherToggleTextarea = () => {
    if (editorValue.length !== 0) {
      setShowTextarea(prevState => !prevState)
    } else setShowTextarea(true)
  }

  // If the input is empty, show the textarea instead of text
  useEffect(() => {
    ;(() => {
      if (editorValue.length === 0) {
        setShowTextarea(true)
      }
    })()
  }, [editorValue])

  return (
    <div
      className="wrap-cell"
      onDoubleClickCapture={decideWhetherToggleTextarea}
    >
      {shouldShowTextarea ? (
        <input
          type={name === 'email' ? 'email' : 'text'}
          name={name}
          value={editorValue}
          placeholder={placeholder}
          onChange={e => {
            const valueToBe = e.target.value
            setEditorValue(valueToBe)
            if (onChange) onChange(e, valueToBe)
          }}
          onKeyDownCapture={e => {
            if (e.key === 'Enter' || e.key === 'Tab') {
              decideWhetherToggleTextarea()
            }
          }}
        />
      ) : (
        value
      )}

      {/* If it is an email field, and if it is not empty, and if email isn't proper, then show the error. */}
      {name === 'email' &&
        editorValue.length !== 0 &&
        !isEmailProper(editorValue) && (
          <p className="error">Please write a valid email.</p>
        )}
    </div>
  )
}

Editor.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}
