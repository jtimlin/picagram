import React from 'react';
import { render, screen } from '@testing-library/react';
import ShareModal from '../ShareModal';

test('renders ShareModal', () => {

  render(
    <ShareModal isOpen={true} onClose={() => {}} />
  );

  // https://testing-library.com/docs/queries/bytestid/
  const facebookShareButton = screen.getByTestId('share-modal-facebook');
  expect(facebookShareButton).toBeInTheDocument();

  const twitterShareButton = screen.getByTestId('share-modal-x');
  expect(twitterShareButton).toBeInTheDocument();

  const whatsappShareButton = screen.getByTestId('share-modal-whatsapp');
  expect(whatsappShareButton).toBeInTheDocument();

});