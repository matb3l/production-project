import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
      description: 'Вариант отображения кнопки',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
      description: 'Цвет кнопки',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер кнопки',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключена ли кнопка',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Кнопка на всю ширину контейнера',
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Основная кнопка',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Второстепенная кнопка',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Текстовая кнопка',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'contained',
    disabled: true,
    children: 'Отключенная кнопка',
  },
}

export const Small: Story = {
  args: {
    variant: 'contained',
    size: 'small',
    children: 'Маленькая кнопка',
  },
}

export const Large: Story = {
  args: {
    variant: 'contained',
    size: 'large',
    children: 'Большая кнопка',
  },
}

export const FullWidth: Story = {
  args: {
    variant: 'contained',
    fullWidth: true,
    children: 'Кнопка на всю ширину',
  },
}

export const WithCustomStyles: Story = {
  args: {
    variant: 'contained',
    style: { 
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
    },
    children: 'Кнопка с кастомными стилями',
  },
}