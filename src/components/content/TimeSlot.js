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
import { cilFolderOpen, cilOptions } from '@coreui/icons'

const TimeSlot = () => {
  return (
        <CButton className="border p-1 me-3 rounded-2 w-100" color="light">
            <CCol className='profile-timeslot-week d-flex justify-content-center'>Fri</CCol>
            <CCol className='profile-timeslot-month  d-flex justify-content-center'>17 Feb</CCol>
            <CCol className='profile-timeslot-number  d-flex justify-content-center'>2 slots</CCol>
        </CButton>
  )
}

export default React.memo(TimeSlot)
