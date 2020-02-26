import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import errorBoundary from '../ErrorBoundary/errorBoundary'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { mount } from 'enzyme'

//Enzyme.configure({adapter: new Adapter()})

//const [title, setTitle] = React.useState('')


describe(`errorBoundary component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <errorBoundary />
            , div);

        ReactDOM.unmountComponentAtNode(div)
    })
})


