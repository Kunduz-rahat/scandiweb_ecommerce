import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CartPage extends Component {
  render() {
	 return (
		<div>CartPage</div>
	 )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)