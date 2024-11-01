import { useState } from 'react'
import { Button } from '@/shared/ui/Button/Button.tsx'
import styles from './Sidebat.module.scss'
import classNames from 'classnames'

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }
  return (
    <div
      className={classNames(styles.Sidebar, {
        [styles.collapsed]: collapsed,
      })}
    >
      <Button onClick={onToggle}>toggle</Button>
    </div>
  )
}
