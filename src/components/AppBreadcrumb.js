import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import routes from '../routes'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CBreadcrumb,
  CBreadcrumbItem,
} from '@coreui/react'

const AppBreadcrumb = () => {
  return (
    <>
      <div className="perfect-toppart mb-4 d-flex justify-content-center">
        <p className="text-center">
          <CNavLink to="/search" component={NavLink}>Find the perfect reader for your self tape</CNavLink>
          <br/>
          <button type="button" className="btn btn-light">Become a reader</button>
        </p>
      </div>
    </>    
  )
}

export default React.memo(AppBreadcrumb)
