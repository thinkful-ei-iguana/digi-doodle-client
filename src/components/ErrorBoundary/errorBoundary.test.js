import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ErrorBoundary from './ErrorBoundary'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { mount } from 'enzyme'

describe(`ErrorBoundary component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <ErrorBoundary />
            , div);

        ReactDOM.unmountComponentAtNode(div)
    })
})


