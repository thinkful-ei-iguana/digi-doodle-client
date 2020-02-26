import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import SignUpForm from './SignUpForm'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { mount } from 'enzyme'

//Enzyme.configure({adapter: new Adapter()})

//const [title, setTitle] = React.useState('')


describe(`SignupForm component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <SignUpForm />
            , div);

        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders SignUp form', () => {
        const form = renderer.create(<SignUpForm />).toJSON();
        expect(form).toMatchSnapshot();
    })

})

it('renders text input with label', () => {
    const wrapper = mount(<SignUpForm /> )
    const label = wrapper.find('label')

    const input = wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text')
})


