import type { Meta, StoryObj } from '@storybook/react-vite'
import { AppLink } from './AppLink'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'UI/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    to: {
      control: 'text',
      description: 'URL для перехода',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'Цвет ссылки',
    },
    underline: {
      control: 'select',
      options: ['none', 'hover', 'always'],
      description: 'Стиль подчеркивания',
    },
    variant: {
      control: 'select',
      options: ['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2'],
      description: 'Вариант типографики',
    },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    to: '/main',
    children: 'Ссылка на главную',
    color: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    to: '/about',
    children: 'Ссылка на страницу о нас',
    color: 'secondary',
  },
}

export const WithUnderline: Story = {
  args: {
    to: '/contact',
    children: 'Ссылка с подчеркиванием при наведении',
    underline: 'hover',
  },
}

export const WithAlwaysUnderline: Story = {
  args: {
    to: '/contact',
    children: 'Ссылка с постоянным подчеркиванием',
    underline: 'always',
  },
}

export const AsHeading: Story = {
  args: {
    to: '/features',
    children: 'Ссылка как заголовок',
    variant: 'h4',
    color: 'primary',
  },
}