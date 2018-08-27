import React from 'react'
import PropTypes from 'prop-types'
import LoadingStyled from './styled'

const Loading = ({ color }) => <LoadingStyled color={color}>Loading...</LoadingStyled>

Loading.defaultProps = {
  color: 'black',
}

Loading.propTypes = {
  color: PropTypes.string,
}

export default Loading
