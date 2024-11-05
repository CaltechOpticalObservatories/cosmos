import type { Meta, StoryObj } from '@storybook/react';

import { Guider } from './Guider';

const meta = {
  title: 'COO/Guider',
  component: Guider,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Guider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const GuiderStandard: Story = {};
