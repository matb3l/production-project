import { ReactNode } from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material'

export type AppLinkProps = {
  children: ReactNode
} & RouterLinkProps &
  MuiLinkProps

export function AppLink({ children, ...rest }: AppLinkProps) {
  return (
    <MuiLink component={RouterLink} {...rest}>
      {children}
    </MuiLink>
  )
}
