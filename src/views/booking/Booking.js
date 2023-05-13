import React, { useState } from 'react'

import {
  CRow,
  CCol,
  CCard,
  CButton,
  CCardHeader,
  CCardBody,
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
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { Outlet, Link } from 'react-router-dom'

import WidgetsBrand from '../widgets/WidgetsBrand'

const Booking = () => {
  const [activeKey, setActiveKey] = useState(1)

  return (
    <>
    <CContainer fluid className='perfect-xpadding'>
      <CForm className="row g-3 content-background mt-3 px-2">
        <CCol xs={12}>
          <p className='title-text'>Welcome!</p>
        </CCol>
        <CCol xs={12}>
          <p className='comment-text'>The session timings are following your local timezone America/Detroit    Update</p>
        </CCol>
        <CCol xs={12}>
          <CNav variant="tabs" role="tablist" className='tab-text'>
            <CNavItem>
              <CNavLink
                href={void (0)}
                active={activeKey === 1}
                onClick={() => setActiveKey(1)}
              >
                Upcomming
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                href={void (0)}
                active={activeKey === 2}
                onClick={() => setActiveKey(2)}
              >
                Pending
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                href={void (0)}
                active={activeKey === 3}
                onClick={() => setActiveKey(3)}
              >
                Past
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent>
            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
              Upcomming
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
              Pending
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
              Past
            </CTabPane>
          </CTabContent>
        </CCol>
      </CForm>
      </CContainer>
    </>
  )
}

export default Booking
