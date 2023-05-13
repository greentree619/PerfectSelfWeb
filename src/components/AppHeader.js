import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky">
      <CContainer fluid className='perfect-xpadding'>
        {process.env.REACT_APP_HIDE_LEFTMENU == "false" && (
          <CHeaderToggler
            className="ps-1"
            onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
        )}
        <CHeaderBrand to="/">
          <CIcon icon={logo} height={22} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem className="perfect-menu-text">
            <CNavLink to="/home" component={NavLink}>
            Home
            </CNavLink>
          </CNavItem>
          <CNavItem className="perfect-menu-text">
            <CNavLink to="/booking" component={NavLink}>Bookings</CNavLink>
          </CNavItem>
          <CNavItem className="perfect-menu-text">
            <CNavLink to="/message" component={NavLink}>Messages</CNavLink>
          </CNavItem>
          <CNavItem className="perfect-menu-text">
            <CNavLink to="/library" component={NavLink}>Library</CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      {/* <CHeaderDivider /> */}
      {/* <CContainer fluid>
        <AppBreadcrumb />
      </CContainer> */}
    </CHeader>
  )
}

export default AppHeader
