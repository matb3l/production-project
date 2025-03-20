import { useState } from 'react'
import styles from './Sidebat.module.scss'
import classNames from 'classnames'
import { Button } from '@ui/Button/Button.tsx'
import { LangSwitcher } from '@widgets/LangSwitcher'

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
      <Button onClick={onToggle} className={styles.collapseBtn}>
        {collapsed ? '>' : '<'}
      </Button>
      <LangSwitcher />
    </div>
  )
}
