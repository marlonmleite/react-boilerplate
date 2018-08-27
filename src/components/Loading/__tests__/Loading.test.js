import React from 'react'
import { shallow } from 'enzyme'
import Loading from '../'
import LoadingStyled from '../styled'

describe('Loading', () => {
  it('should render', () => {
    const component = shallow(<Loading />)

    expect(component).toMatchSnapshot()
  })

  it('should color black', () => {
    const component = shallow(<LoadingStyled color="black" />)

    expect(component).toHaveStyleRule('color', 'black')
  })
})
