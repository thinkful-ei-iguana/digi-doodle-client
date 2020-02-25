import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import SignUpForm from './SignUpForm'


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