import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../../src/components/DashboardComponent';

// API
import axiosUser from '../../src/api/userApi';
import axiosToken from '../../src/api/tokenApi';

// Context handle
const changeInputReduxMock = jest.fn();

function shallowSetup() {
  const props = {
    userActions: jest.fn(),
    loginActions: jest.fn(),
    contextActions: jest.fn(),
    userName: '',
    token: '',
    context: '',
  };

  /* eslint-disable react/jsx-props-no-spreading */
  const wrapper = shallow(
    <Dashboard {...props} changeInputRedux={changeInputReduxMock} />,
  );
  return {
    props,
    wrapper,
  };
}

// eslint-disable-next-line no-global-assign
beforeEach = () => {
  axiosUser();
  axiosToken();
};

describe('<Dashboard /> rendering', () => {
  const flushPromises = () => new Promise(setImmediate);
  const { wrapper } = shallowSetup();

  it('should render <Dashboard />', async () => {
    const event = {
      target: {
        name: 'custom',
        value: 'abcde',
      },
    };

    // Wait axios async
    await flushPromises();
    wrapper.update();

    wrapper.find('button#user').simulate('click');
    wrapper.find('button#token').simulate('click');
    wrapper.find('input#context').simulate('change', event);

    // Simulate click button
    expect(wrapper.find('button#user')).toHaveLength(1);
    expect(wrapper.find('button#token')).toHaveLength(1);
    expect(wrapper.find('input#context')).toHaveLength(1);

    // Check element p with id exist
    expect(wrapper.find('p#user')).toHaveLength(1);
    expect(wrapper.find('p#token')).toHaveLength(1);
    expect(wrapper.find('p#context')).toHaveLength(1);
  });
});
