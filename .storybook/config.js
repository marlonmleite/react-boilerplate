import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo, setDefaults } from '@storybook/addon-info'

addDecorator((story, context) => (
  <div>
    {withInfo()(story)(context)}
  </div>
))

setDefaults({
  header: false,
  inline: true,
})

const req = require.context('../src/components', true, /\.stories\.js$/)

const loadStories = () => req.keys().forEach(filename => req(filename))

configure(loadStories, module)
