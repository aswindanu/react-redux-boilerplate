import React from 'react';
import { shallow } from 'enzyme';
import { DashboardPage } from '../../src/pages/DashboardPage';

function shallowSetup() {
  const props = {
    userActions: jest.fn(),
    loginActions: jest.fn(),
    contextActions: jest.fn(),
    userName: '',
    token: '',
    context: '',
  };
    // eslint-disable-next-line react/jsx-props-no-spreading
  const wrapper = shallow(<DashboardPage {...props} />);
  return {
    props,
    wrapper,
  };
}

describe('Rendering DashboardPage', () => {
  it('should rendering DashboardPage', () => {
    const { wrapper } = shallowSetup();
    expect(wrapper.find('div#dashboard-page')).toHaveLength(1);
  });
});
