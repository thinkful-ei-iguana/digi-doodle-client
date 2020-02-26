import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import PlayAgain from './PlayAgain'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Cookies from 'js-cookie'
import { mount, shallow } from 'enzyme'
import { spy } from 'sinon';
import { JPEGStream } from 'canvas'


//Enzyme.configure({adapter: new Adapter()})

//const [title, setTitle] = React.useState('')


describe(`PlayAgain component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <PlayAgain />
      , div);

    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders submits onClick', () => {
    const form = renderer.create(<PlayAgain />).toJSON();
    const wrapper = mount(
      <PlayAgain />
    );
    expect(wrapper.find('[href="/"]').length).toBe(1);
    
  })
})



