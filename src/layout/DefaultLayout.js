import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader, AppBreadcrumb } from '../components/index'
import { useSelector, useDispatch } from 'react-redux'

const DefaultLayout = () => {
  const bannerbarShow = useSelector((state) => state.bannerbarShow)
  const messageLayout = useSelector((state) => state.messageLayout)

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1">
          {bannerbarShow && (<AppBreadcrumb />)}
          <AppContent />
        </div>
        {messageLayout == false && (<AppFooter />)}
      </div>
    </div>
  )
}

export default DefaultLayout
