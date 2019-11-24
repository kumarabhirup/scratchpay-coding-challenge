import React from 'react'
import PropTypes from 'prop-types'

import './logo.sass'

export default function Logo(props) {
  const { symbol, logo } = props

  return (
    <div className="logo">
      <img width={120} src={symbol} alt="Scratchpay Paw Symbol" />
      <img width={200} src={logo} alt="Scratchpay Logo" />
    </div>
  )
}

Logo.propTypes = {
  symbol: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
}
