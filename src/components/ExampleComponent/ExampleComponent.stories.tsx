import React from 'react'
import { ExampleComponent, ExampleComponentProps } from '.'

export default {
  title: 'ExampleComponent',
  component: ExampleComponent,
}

const baseArgs = {}

export const Default = (args: ExampleComponentProps) => (
  <ExampleComponent {...args} />
)
Default.args = baseArgs
