import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { isEmailProper, isDuplicate } from '../../lib/utils'

/**
 * @name Editor
 *
 * @prop {String} name
 * @prop {String} value
 * @prop {String} placeholder
 * @prop {Function} onChange
 */
export default function Editor(props) {
  const { name, value, placeholder, onChange, emailsOfAllUsers } = props

  const [shouldShowTextarea, setShowTextarea] = useState(false) // State that decides whether the input field to edit should be shown or not.
  const [editorValue, setEditorValue] = useState(value) // Value of the controlled input component.

  // If the value is empty, then show the textarea. Else, allow the toggle.
  const decideWhetherToggleTextarea = () => {
    if (editorValue.length !== 0) {
      setShowTextarea(prevState => !prevState)
    } else setShowTextarea(true)
  }

  // If the input is empty, show the textarea instead of text.
  useEffect(() => {
    // Self invoking function.
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

            // Report the change to parent component.
            if (onChange) onChange(e, valueToBe)
          }}
          onKeyDownCapture={e => {
            // Save the input when Enter or Tab key is pressed.
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

      {/* If it is an email field, and if it is not empty, and if email is duplicate, then show the error. */}
      {name === 'email' &&
        editorValue.length !== 0 &&
        isDuplicate(emailsOfAllUsers, editorValue) && (
          <p className="error">Duplicate email.</p>
        )}
    </div>
  )
}

Editor.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  emailsOfAllUsers: PropTypes.array.isRequired,
}
