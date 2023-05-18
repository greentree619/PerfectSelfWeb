import React, { useState } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CContainer,
  CNav,
  CNavLink,
  CNavItem,
  CTabContent,
  CTabPane,
  CImage,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilBell,
  cilCalendar,
  cilClock,
} from '@coreui/icons'

import WidgetMainProfile from '../widgets/WidgetMainProfile'
import WidgetHourlySessionTotalhour from '../widgets/ReaderProfile/WidgetHourlySessionTotalhour'
import WidgetAvailableTimeSlot from '../widgets/ReaderProfile/WidgetAvailableTimeSlot'

const Profile = () => {
  return (
    <>
      <CContainer fluid className='perfect-xpadding'>
        <CRow className='mt-3'>
          <CCol xs={8}>
            <WidgetMainProfile/>
          </CCol>
          <CCol xs={4}>
            <CCol xs={12}>
              <WidgetHourlySessionTotalhour />
            </CCol>
            <CCol className='mt-3' xs={12}>
              <WidgetAvailableTimeSlot />
            </CCol>
            <CCol className='mt-3' xs={12}>
              <WidgetHourlySessionTotalhour/>
            </CCol>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default Profile
