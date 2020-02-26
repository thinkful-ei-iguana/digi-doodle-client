import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Header from '../Header/Header'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { mount } from 'enzyme'
//Enzyme.configure({adapter: new Adapter()})
//const [title, setTitle] = React.useState('')

describe(`Header component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <Header />
            , div);

        ReactDOM.unmountComponentAtNode(div)
    })
})


