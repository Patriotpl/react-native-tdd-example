/**
 * @format
 */

import React from 'react';
import App from '../App';
import {render} from "@testing-library/react-native";

import renderer from 'react-test-renderer';

describe('App test', () => {
  test('render correctly', () => {
    const wrapper = render(<App />);
    const testText = wrapper.getByTestId('test-text');
  });
});
