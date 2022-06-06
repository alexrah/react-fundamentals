import * as React from 'react'
import {render, screen, within} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import App from '../final/07'
import App from '../exercise/07.extra-1'

test('renders', async () => {
  const {container} = render(<App />)

  const plus = screen.getByText(/add item/i)
  await userEvent.click(plus)
  await userEvent.click(plus)
  await userEvent.click(plus)
  await userEvent.click(plus)


  const orangeInput = screen.getByLabelText(/orange/i)
  const orangeContainer = screen.getByText(/orange/i).closest('li')
  const inOrange = within(orangeContainer)
  await userEvent.type(orangeInput, 'sup dawg')
  await userEvent.click(inOrange.getByText('remove'))

  screen.debug();

  const allLis = container.querySelectorAll('li')
  Array.from(allLis).forEach(li => {
    const label = li.querySelector('label')
    const input = li.querySelector('input')
    expect(label.textContent).toBe(input.value)
  })


  await userEvent.click(plus)
  const pearInput = screen.getByLabelText(/pear/i);
  const pearLabel = screen.getByText(/pear/i);
  /**
   * put element pear in focus
   * */
  await userEvent.click(pearLabel);

  screen.debug();

  const removeButtons = screen.getAllByText(/remove/i);
  for(const [index,remButton] of removeButtons.entries()){
    if (index < 2) {
      await userEvent.click(remButton).catch(e => console.error(e))
    }
    /**
     * Check if pear has still focus after removing 2 elements
    * */
    expect( document.activeElement ).toBe(pearInput)
  }

  screen.debug();

})
