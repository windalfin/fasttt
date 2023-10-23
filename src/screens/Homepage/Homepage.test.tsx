import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders the header correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    expect(getByText('Fasttt')).toBeDefined();
  });

  it('renders the progress circle correctly', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <HomePage />
        </Provider>,
            );
    expect(getByTestId('progress-circle')).toBeDefined();
  });

  it('starts and stops fasting correctly', () => {
    const { getByText, rerender } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    const button = getByText('Start Fasting');
    fireEvent.press(button);
    rerender(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    expect(getByText('Stop Fasting')).toBeDefined();
    fireEvent.press(button);
    rerender(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    expect(getByText('Start Fasting')).toBeDefined();
  });

  it('calculates progress correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    const button = getByText('Start Fasting');
    fireEvent.press(button);
    act(() => jest.advanceTimersByTime(60000));
    expect(getByText('0:01:00')).toBeDefined();
  });

  it('formats time correctly', () => {
    const { getByText } = render(
        <Provider store={store}>
            <HomePage />
        </Provider>,
    );
    expect(getByText('00:00:00')).toBeDefined();
    expect(getByText('01:00:00')).toBeDefined();
    expect(getByText('01:01:01')).toBeDefined();
  });
});