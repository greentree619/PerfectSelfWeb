import React from 'react'
import { useLocation } from 'react-router-dom'

import routes from '../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

const AppBreadcrumb = () => {
  return (
    <>
      <div className="perfect-toppart mb-4 d-flex justify-content-center">
        <p className="text-center">Find the perfect reader for your self tape</p>        
      </div>
    </>    
  )
}

export default React.memo(AppBreadcrumb)
