import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Startup extends Component {
	render() {
		return this.props.children
	}
}

export default withRouter(Startup)
