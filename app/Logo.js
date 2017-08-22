import React from 'react'
import { render } from 'react-dom' // eslint-disable-line no-unused-vars

class Logo extends React.Component {
  render () {
    return (
      <img src="{{ baseUrl }}/css/logo.jpg">
    )
  }
}

export default Logo
