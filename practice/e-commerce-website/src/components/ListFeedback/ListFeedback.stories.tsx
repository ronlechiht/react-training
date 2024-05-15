import type { Meta, StoryObj } from '@storybook/react';

import ListFeedback from './ListFeedback';

const meta: Meta<typeof ListFeedback> = {
  component: ListFeedback
};

export default meta;
type Story = StoryObj<typeof ListFeedback>;

const feedbacks = [
  {
    customerId: '01',
    rating: 4.5,
    customerName: 'Samantha D.',
    customerComment:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: 'August 14, 2023'
  },
  {
    customerId: '02',
    rating: 4,
    customerName: 'Alex M.',
    customerComment:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: 'August 15, 2023'
  },
  {
    customerId: '03',
    rating: 3.5,
    customerName: 'Ethan R.',
    customerComment:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: 'August 16, 2023'
  },
  {
    customerId: '04',
    rating: 4,
    customerName: 'Olivia P.',
    customerComment:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    date: 'August 17, 2023'
  },
  {
    customerId: '05',
    rating: 4,
    customerName: 'Liam K.',
    customerComment:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    date: 'August 18, 2023'
  },
  {
    customerId: '06',
    rating: 4.5,
    customerName: 'Ava H.',
    customerComment:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    date: 'August 19, 2023'
  }
];

export const ListFeedbacks: Story = {
  args: {
    feedbacks: feedbacks
  }
};
