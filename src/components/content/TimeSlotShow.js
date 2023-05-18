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

const TimeSlotShow = () => {
  return (
        <CButton className='me-2' color="light">2:30 PM</CButton>
  )
}

export default React.memo(TimeSlotShow)
