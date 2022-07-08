import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import App from './App.js';

describe('Start Countdown button', () => {

  beforeEach(() => {
    render(<App />);
  })

  test('should render Start Countdown button', () => {
    const countdownButton = screen.getByTestId('countdown-button');

    expect(countdownButton.textContent).toBe('Start Countdown');
  })
  
  test('should render Cancel and countdown on click', async () => {
    const countdownButton = screen.getByTestId('countdown-button');
    act(()=> countdownButton.click())

    await expect(countdownButton.textContent).toBe('Cancel');
    await expect(screen.queryByTestId('countdown-count')).toBeTruthy();
  })

  test('should cancel countdown', async () => {
    const countdownButton = screen.getByTestId('countdown-button');
    act(()=> countdownButton.click())
    
    await expect(countdownButton.textContent).toBe('Cancel');
    await expect(screen.queryByTestId('countdown-count')).toBeTruthy();
    
    act(()=> countdownButton.click())

    await expect(countdownButton.textContent).toBe('Start Countdown');
    await expect(screen.queryByTestId('countdown-count')).toBeNull();
  })
})