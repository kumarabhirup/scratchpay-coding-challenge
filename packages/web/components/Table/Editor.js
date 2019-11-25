import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

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
          type="text"
          name={name}
          value={editorValue}
          placeholder={placeholder}
          onChange={e => {
            const valueToBe = e.target.value
            setEditorValue(valueToBe)
            if (onChange) onChange(e, valueToBe)
          }}
          onKeyPressCapture={e => {
            if (e.key === 'Enter') {
              decideWhetherToggleTextarea()
            }
          }}
        />
      ) : (
        value
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
