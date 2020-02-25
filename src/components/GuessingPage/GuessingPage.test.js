import React from 'react'
import ReactDOM from 'react-dom'
import GuessingPage from './GuessingPage'
import Canvas from '../../Utils/Canvas/Canvas'
// import ErrorBoundary from '../ErrorBoundary/errorBoundary'
import { mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

describe.only(`Guessing component`, () => {
    it('renders without crashing', () => {


        const wrapper = shallow(<GuessingPage />).toJSON();
        expect(wrapper).toBeDefined();
    })


})