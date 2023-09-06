import type { Meta, StoryObj } from '@storybook/react';

import ExtraSmallNewsCard from './ExtraSmallNewsCard';

const meta = {
  title: 'Pickleball/ExtraSmallNewsCard',
  component: ExtraSmallNewsCard,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof ExtraSmallNewsCard>;

export default meta;
type Story = StoryObj<typeof ExtraSmallNewsCard>;

export const Primary: Story = {
  args: {
    image: "https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897",
    title: "Pablo Tellez Fined for 'Obscene Gesture' Toward Fans",
    description: "PPA's OGIO Newport Beach Doubles Shootout, including the first-ever...",
    time: "12h - The PPA informer"
  }
};

export const Secondary: Story = {
  args: {
    image: "https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897",
    title: "Pablo Tellez Fined for 'Obscene Gesture' Toward Fans",
    time: "12h - The PPA informer"
  }
};

export const Tertiary: Story = {
  args: {
    image: "https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897",
    title: "Pablo Tellez Fined for 'Obscene Gesture' Toward Fans",
    description: "PPA's OGIO Newport Beach Doubles Shootout, including the first-ever..."
  }
};

export const Quaternary: Story = {
  args: {
    image: "https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897",
    title: "Pablo Tellez Fined for 'Obscene Gesture' Toward Fans"
  }
};
