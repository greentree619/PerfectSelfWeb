import React from 'react'
import {
    CRow,
    CCol,
    CCard,
    CButton,
    CCardHeader,
    CCardBody,
    CCardImage,
    CCardTitle,
    CCardText,
    CForm,
    CFormInput,
    CFormLabel,
    CAlert,
    CFormTextarea,
    CDropdown,
    CDropdownItem,
    CDropdownToggle,
    CDropdownMenu,
    CContainer,
    CSpinner,
    CTabs,
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCalendar, cilClock } from '@coreui/icons'

const BookingItem = () => {
  return (
      <>
          <CCard style={{ width: '100%' }}>
              {/* <CCardImage orientation="top" src={ReactImg} /> */}
              <CCardBody>
                  <CCardTitle className='booking-title'>Reading session with Jonathan Walker</CCardTitle>
                  <CCardText className='booking-content'>
                    <CIcon icon={cilCalendar} size="md" />&nbsp;16 Mar, 2023
                    &nbsp;&nbsp;<CIcon icon={cilClock} size="md" />&nbsp;06:30 PM - 7:30PM
                  </CCardText>
                  <CCardText className='booking-content'>
                    <CButton color="link" variant="ghost">View Script {">"}</CButton>
                  </CCardText>
                  <CButton color="primary" href="#">Join meeting</CButton>
                  &nbsp; <CButton color="dark" variant="outline" href="#">Send message</CButton>
                  &nbsp; <CButton  color="danger" variant="ghost" href="#">Cancel</CButton>
              </CCardBody>
          </CCard>
      </>
  )
}

export default React.memo(BookingItem)
