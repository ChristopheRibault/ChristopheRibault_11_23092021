import { Dropdown } from '../components';
import {render, fireEvent, screen} from '@testing-library/react'

describe('Dropdown', () => {
  const [title, content] = ['Lorem ipsum', 'Lorem ipsum dolor sit amet'];
  beforeEach(() => {
    render(<Dropdown title={title} content={content} />)
  })

  describe('When a dropdown is rendered', () => {
    it('Should display a dropdown', async () => {
      expect(await screen.findByTestId('dropdown')).toBeTruthy()
      expect(await screen.findByTestId('dropdown-title')).toHaveTextContent(title)
    })
    it('Should be collapsed by default', async () => {
      expect(screen.queryByTestId('dropdown-content')).not.toBeInTheDocument()
    })
  })

  describe('When I click on the title', () => {
    it('should toggle to expanded the first time', () => {
      fireEvent.click(screen.getByTestId('dropdown-title'))
      expect(screen.queryByTestId('dropdown-content')).toHaveTextContent(content)
    })
    it('Should toggle to collapsed the second time', () => {
      fireEvent.click(screen.getByTestId('dropdown-title'))
      fireEvent.click(screen.getByTestId('dropdown-title'))
      expect(screen.queryByTestId('dropdown-content')).not.toBeInTheDocument()
    })
  })

  describe('When I press "Enter" on the title', () => {
    it('should toggle to expanded the first time', () => {
      fireEvent.keyDown(screen.getByTestId('dropdown-title'), {code: 'Enter'})
      expect(screen.queryByTestId('dropdown-content')).toHaveTextContent(content)
    })
    it('Should toggle to collapsed the second time', () => {
      fireEvent.keyDown(screen.getByTestId('dropdown-title'), {code: 'Enter'})
      fireEvent.keyDown(screen.getByTestId('dropdown-title'), {code: 'Enter'})
      expect(screen.queryByTestId('dropdown-content')).not.toBeInTheDocument()
    })
  })

  describe('When I press "ArrowDown" on the title', () => {
    it('should toggle to expanded the first time', () => {
      fireEvent.keyDown(screen.getByTestId('dropdown-title'), {code: 'ArrowDown'})
      expect(screen.queryByTestId('dropdown-content')).toHaveTextContent(content)
    })
    it('Should remain expanded the second time', () => {
      fireEvent.keyDown(screen.getByTestId('dropdown-title'), {code: 'ArrowDown'})
      fireEvent.keyDown(screen.getByTestId('dropdown-title'), {code: 'ArrowDown'})
      expect(screen.queryByTestId('dropdown-content')).toHaveTextContent(content)
    })
  })

  describe('When I press "ArrowUp" on the title', () => {
    it('should remain collapsed', () => {
      fireEvent.keyDown(screen.getByTestId('dropdown-title'), {code: 'ArrowUp'})
      expect(screen.queryByTestId('dropdown-content')).not.toBeInTheDocument()
    })
    it('Should collapse when expanded', () => {
      fireEvent.keyDown(screen.getByTestId('dropdown-title'), {code: 'ArrowDown'})
      expect(screen.queryByTestId('dropdown-content')).toHaveTextContent(content)
      fireEvent.keyDown(screen.getByTestId('dropdown-title'), {code: 'ArrowUp'})
      expect(screen.queryByTestId('dropdown-content')).not.toBeInTheDocument()
    })
  })
  
  
})
