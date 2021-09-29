import { App } from '../components';
import Promise from 'bluebird';
import {render, fireEvent, screen} from '@testing-library/react'

describe('Footer', () => {
  describe('When the page is loaded', () => {
    it('Should display a footer', async () => {
      render(<App />)
      expect(await screen.findByTestId('footer')).toBeTruthy()
    })
  })
  describe('When I change page', () => {
    it('Should still display the footer', async () => {
      render(<App />)
      const navLinks = await screen.findAllByTestId('navLink');
      await Promise.each(navLinks, async link => {
        fireEvent.click(link)
        expect(await screen.findByTestId('footer')).toBeTruthy()
      })
    })
  })
})
