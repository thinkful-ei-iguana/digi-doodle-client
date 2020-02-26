import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Timer from '../Timer/Timer'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { mount } from 'enzyme'
//Enzyme.configure({adapter: new Adapter()})
//const [title, setTitle] = React.useState('')

describe(`Timer component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <Timer />
            , div);

        ReactDOM.unmountComponentAtNode(div)
    })
})


//