import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import CheckoutContainer from './CheckoutContainer';
import { quote } from '../containers/ClassifyContainer.data';

// configure enzyme
configure({ adapter: new Adapter() });

describe('CheckoutContainer', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  const initialState = {
    checkout: {
      quote,
    },
    home: {
      user: {
        id: 1,
        name: 'Matt Giampietro',
        occupation: 'Producer, Unilever',
        perks: [1],
        avatar: '/dist/images/matthew.png',
      },
    },
  };

  let store;
  let container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<CheckoutContainer store={store} />);
  });

  it('renders', () => {
    expect(container.length).toEqual(1);
  });

  it('maps state to props', () => {
    expect(container.prop('output')).toEqual(initialState.output);
  });

  it('renders as expected', () => {
    const tree = ReactTestRenderer.create(container).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
