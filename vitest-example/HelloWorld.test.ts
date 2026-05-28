import '@testing-library/jest-dom/vitest';

import { getByText } from '@testing-library/dom';
import { expect, test } from 'vitest';

import HelloWorld from './HelloWorld.js';

test('renders name', () => {
  const parent = HelloWorld({ name: 'Vitest' });
  document.body.appendChild(parent);

  const element = getByText(parent, 'Hello Vitest!');
  expect(element).toBeInTheDocument();
});
