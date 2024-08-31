import { render, screen } from '@testing-library/react';
import ReviewsInfo from './components/ReviewsInfo/ReviewsInfo.component';

test('ReviewsInfo component displays reviews string', () => {
  const reviewsString: string = '4.9 (83 Reviews)';
  render(<ReviewsInfo reviewsString={reviewsString} />);
  const linkElement = screen.getByText(/4.9 \(83 Reviews\)/i);
  expect(linkElement).toBeInTheDocument();
});
