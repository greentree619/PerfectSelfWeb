import React, { useEffect } from 'react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CContainer,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import WidgetTopReaders from '../widgets/WidgetTopReaders'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  dispatch({ type: 'set', bannerbarShow: true })
  useEffect(() => {
    return () => {
      dispatch({ type: 'set', bannerbarShow: false })
      console.log("leave home")
    }
  }, [])

  return (
    <>
    <CContainer fluid className='perfect-xpadding'>
      <div className="home-title">
        Sponsored Readers
      </div>
      <WidgetTopReaders />
      <div className="home-title">
        Available Soon
      </div>
      <WidgetTopReaders />
      <div className="home-title">
        Top Rated
      </div>
      <WidgetTopReaders />
    </CContainer>
    </>
  )
}

export default Home
