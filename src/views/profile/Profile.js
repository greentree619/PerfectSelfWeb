import React from 'react'

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
} from '@coreui/icons'

import WidgetsBrand from '../widgets/WidgetsBrand'

const Profile = () => {

  return (
    <>
    <CContainer lg>
      <CRow className='mt-3'>
        <CCol xs={8}>
          <div className='content-background'>Main part</div>
        </CCol>
        <CCol xs={4}>
          <CCol xs={12}>
            <div className='content-background'>Part 1</div>
          </CCol>
          <CCol className='mt-3' xs={12}>
            <div className='content-background'>Part 2</div>
          </CCol>
          <CCol className='mt-3' xs={12}>
            <div className='content-background'>Part 3</div>
          </CCol>
        </CCol>
      </CRow>
    </CContainer>
    </>
  )
}

export default Profile
