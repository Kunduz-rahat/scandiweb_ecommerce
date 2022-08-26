import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ProductDescriptionPage extends Component {
  render() {
	 return (
		<div>ProductDescriptonPage</div>
	 )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescriptionPage)