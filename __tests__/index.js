import React from 'react';
import {Actions, LinkActions} from '../';
import {render} from '@testing-library/react';

describe('actions', () => {
  test('Actions: basic', async () => {
    const result = render(<Actions>
      <a>first</a>
      <a>second</a>
      <a>third</a>
    </Actions>);

    // Have space between element
    expect(result.container.innerHTML).toMatchSnapshot();

    expect(result.queryByText('first')).not.toBeNull();
  });

  test('Actions: ignore null', async () => {
    const exists = false;
    const result = render(<Actions>
      {exists && <a>test</a>}
    </Actions>);

    expect(result.queryByText('test')).toBeNull();

    expect(result.container.innerText).toBeUndefined();
  });

  test('LinkActions: basic', async () => {
    const result = render(<LinkActions>
      <a>first</a>
      <a>second</a>
      <a>third</a>
    </LinkActions>);

    expect(result.queryByText('first')).not.toBeNull();
    expect(result.queryAllByRole('separator')).toHaveLength(2);
  });

  test('LinkActions: ignore null', async () => {
    const exists = false;
    const result = render(<LinkActions>
      {exists && <a>test</a>}
    </LinkActions>);

    expect(result.queryByText('test')).toBeNull();

    expect(result.container.innerText).toBeUndefined();
  });
});
