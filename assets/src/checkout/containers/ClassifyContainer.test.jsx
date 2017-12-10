import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import ClassifyContainer from './ClassifyContainer';

// configure enzyme
configure({ adapter: new Adapter() });

describe('ClassifyContainer', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  const initialState = {
    checkout: {
      quote: {
        products: [],
        jobs: [],
      },
      job: null,
    },
  };

  let store;
  let container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ClassifyContainer store={store} />);
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
