import { Carusel } from '../components';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Carusel', () => {
  const pictures = [
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg',
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg',
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg',
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg',
  ];
  beforeEach(() => {
    render(<Carusel pictures={pictures} />);
  });

  describe('When a carusel is rendered', () => {
    it('Should display a carusel with first image', async () => {
      expect(await screen.findByTestId('carusel')).toBeTruthy();
      expect(await screen.findAllByTestId('carusel-control')).toHaveLength(2);
      const img = await screen.findByTestId('carusel-img');
      expect(img).toBeTruthy();
      expect(img).toHaveAttribute('src', pictures[0]);
    });
  });

  describe('When I click next button', () => {
    it('Should show the second image', async () => {
      fireEvent.click(screen.getAllByTestId('carusel-control')[1]);
      expect(await screen.findByTestId('carusel-img')).toHaveAttribute('src', pictures[1]);
    });
  });

  describe('When I click previous button', () => {
    it('Should show the last image', async () => {
      fireEvent.click(screen.getAllByTestId('carusel-control')[0]);
      expect(await screen.findByTestId('carusel-img')).toHaveAttribute('src', pictures[pictures.length - 1]);
    });
  });

  describe('When I click next button whilst on last image', () => {
    it('Shoult show first image', async () => {
      fireEvent.click(screen.getAllByTestId('carusel-control')[0]);
      fireEvent.click(screen.getAllByTestId('carusel-control')[1]);
      expect(await screen.findByTestId('carusel-img')).toHaveAttribute('src', pictures[0]);
    });
  });

  describe('When focus is on carusel and I use keyboard', () => {
    it('Should go to next picture when I press "Enter"', async () => {
      fireEvent.keyDown(screen.getByTestId('carusel'), { code: 'Enter' });
      expect(await screen.findByTestId('carusel-img')).toHaveAttribute('src', pictures[1]);
    });

    it('Should go to next picture when I press "ArrowRight"', async () => {
      fireEvent.keyDown(screen.getByTestId('carusel'), { code: 'ArrowRight' });
      expect(await screen.findByTestId('carusel-img')).toHaveAttribute('src', pictures[1]);
    });

    it('Should go to previous picture when I press "ArrowLeft"', async () => {
      fireEvent.keyDown(screen.getByTestId('carusel'), { code: 'ArrowLeft' });
      expect(await screen.findByTestId('carusel-img')).toHaveAttribute('src', pictures[pictures.length-1]);
    });
  });

});
