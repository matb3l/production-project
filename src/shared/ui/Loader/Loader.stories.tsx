import type { Meta, StoryObj } from '@storybook/react-vite'
import { Loader } from './Loader'

const meta = {
  title: 'UI/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InContainer: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
}

export const OnDarkBackground: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', background: '#333', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
}