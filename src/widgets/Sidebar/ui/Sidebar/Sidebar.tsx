import { useState } from 'react'
import styles from './Sidebat.module.scss'
import classNames from 'classnames'
import { Button } from '@ui/Button/Button.tsx'
import { LangSwitcher } from '@widgets/LangSwitcher'
import { AppLink } from '@ui/AppLink/AppLink.tsx'
import { RoutePath } from '@shared/config/routeConfig/routeConfig.tsx'
import { useTranslation } from 'react-i18next'
import HomeIconSvg from '@shared/assets/icons/home-icon.svg?react'
import SiteIconSvg from '@shared/assets/icons/site-icon.svg?react'

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }
  return (
    <div
      className={classNames(styles.Sidebar, {
        [styles.collapsed]: collapsed,
      })}
    >
      <div className={styles.LinksWrapper}>
        <AppLink to={RoutePath.main} className={styles.Link}>
          <HomeIconSvg className={styles.Icon} />
          {!collapsed && <span>{t('На главную')}</span>}
        </AppLink>
        <AppLink to={RoutePath.about} className={styles.Link}>
          <SiteIconSvg className={styles.Icon} />
          {!collapsed && <span>{t('О сайте')}</span>}
        </AppLink>
      </div>
      <div className={styles.collapseWrapper}>
        <Button onClick={onToggle} className={styles.collapseBtn}>
          {collapsed ? '>' : '<'}
        </Button>
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  )
}
