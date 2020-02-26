import React from 'react'
import ReactDOM from 'react-dom'
import GuessingPage from './GuessingPage'
import Canvas from '../../Utils/Canvas/Canvas'
// import ErrorBoundary from '../ErrorBoundary/errorBoundary'
import { mount, shallow, render } from 'enzyme'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'



describe(`GuessingPage component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <GuessingPage />
      , div);

    ReactDOM.unmountComponentAtNode(div)
  })


  it('renders text input with label', () => {
    const wrapper = mount(<GuessingPage />)
    const label = wrapper.find('label')

    const input = wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(label).toHaveLength(1);
    expect(input.prop('type')).toEqual('text')
  })
})
