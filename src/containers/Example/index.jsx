import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Actions } from './state/actions'

export class Example extends Component {

  componentDidMount() {
    const { loadExample } = this.props

    loadExample()
  }

  render() {
    const { name, changeName } = this.props

    return (
      <Fragment>
        <h3>Current name: {name}</h3>
        <div>
          <label>Enter this name</label>
          <input
            type="text"
            value={name}
            onChange={({ target }) => changeName(target.value)}
          />
        </div>
      </Fragment>
    )
  }

}

const mapProps = ({ exampleReducer }) => exampleReducer

const mapActions = {
  loadExample: Actions.load,
  changeName: Actions.setName,
}

Example.propTypes = {
  name: PropTypes.string.isRequired,
  changeName: PropTypes.func.isRequired,
  loadExample: PropTypes.func.isRequired,
}

export default connect(mapProps, mapActions)(Example)
