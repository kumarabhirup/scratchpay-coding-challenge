import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Editor(props) {
  const { name, value, onChange } = props
  const [shouldShowTextarea, setShowTextarea] = useState(false)
  const [editorValue, setEditorValue] = useState(value)

  return (
    <div
      className="wrap-cell"
      onDoubleClickCapture={() => {
        setShowTextarea(prevState => !prevState)
      }}
    >
      {shouldShowTextarea ? (
        <textarea
          name={name}
          value={editorValue}
          onChange={e => {
            const valueToBe = e.target.value
            setEditorValue(valueToBe)
            if (onChange) onChange(e, valueToBe)
          }}
          onKeyPressCapture={e => {
            if (e.key === 'Enter') {
              setShowTextarea(prevState => !prevState)
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
  onChange: PropTypes.func,
}
