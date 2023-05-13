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

const LibFolder = () => {
  return (
      <>
          <CCard style={{ width: '100%' }}>
            <CCardBody>
              <CRow>
                  <CCol xs={1} md={1} xl={1}>
                    <CIcon icon={cilFolderOpen} size="md" />
                  </CCol>
                  <CCol xs={10} md={10} xl={10}>
                    <CCardText>2023-04-12</CCardText>
                  </CCol>
                  <CCol xs={1} md={1} xl={1}>
                    <CIcon icon={cilOptions} size="md" />
                  </CCol>
                </CRow>
            </CCardBody>
              
          </CCard>
      </>
  )
}

export default React.memo(LibFolder)
