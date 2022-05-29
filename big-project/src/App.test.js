import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


/*
test('Test Title Debug & Test h1', () => {
  render(<App />);

  const titleEl = screen.getByText(/Debug & Test/i);
  expect(titleEl).toHaveTextContent(/Debug & Test/i);
});

test('Test Example test p tag', () => {
  render(<App />);

  const titleEl = screen.getByText(/Example test p tag/i);
  expect(titleEl).toBeInTheDocument();
});

test("Test counter button handleCountAdd", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Current counter/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/counter/i);
});

test("Test counter button handleCountSub", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Current counte/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/counter/i);
});

test("Test theme button toggle btn-1", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Current theme/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/dark/i);
});

test("Test button toggle btn-2", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Truc qui merde : /i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/greetings/i);
});

test("Test button toggle handleTest btn-3", () => {
  render(<App />);
  const buttonEl = screen.getByText(/test_1/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/test_2/i);
});

test('Test p tag style', () => {
  render(<App />);

  const pElem = screen.getByText(/My special div to change id/i);
  expect(pElem).toBeInTheDocument();
});
*/