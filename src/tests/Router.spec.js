import { App } from '../components';
import {render, fireEvent, screen} from '@testing-library/react'

describe('Router', () => {

  beforeEach(() => {
    render(<App />)
  })

  describe('When App is loaded', () => {
    it('Should display the Home page', async () => {
      expect(await screen.findByTestId('home-page')).toBeTruthy()
    })
  })

  describe('When I click on About link', () => {
    it('Should redirect to about page', async () => {
      fireEvent.click(await screen.findByTitle('about'))
      expect(await screen.findByTestId('about-page')).toBeTruthy()
    })
  })

  describe('When I click on Home link', () => {
    it('Should redirect to home page', async () => {
      fireEvent.click(await screen.findByTitle('home'))
      expect(await screen.findByTestId('home-page')).toBeTruthy()
    })
  })

  describe('When I click on accomodation thumb', () => {
    it('Should redirect to accomodation page', async () => {
      const thumbs = await screen.findAllByTestId('accomodation-thumb')
      fireEvent.click(thumbs[0])
      expect(await screen.findByTestId('accomodation-page')).toBeTruthy()
    })
  })

  describe('When I click on page logo', () => {
    it('Should redirect to home page', async () => {
      fireEvent.click(await screen.findByTitle('logo'))
      expect(await screen.findByTestId('home-page')).toBeTruthy()
    })
  }) 


})
