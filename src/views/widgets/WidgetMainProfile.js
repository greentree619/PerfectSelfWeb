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
  cilHeart,
} from '@coreui/icons'

import ActorSchool from 'src/assets/icons/actor-school.svg'
import Endorsement from 'src/assets/icons/endorsement.svg'
import Bell from 'src/assets/icons/bell.svg'
import avatar1 from './../../assets/images/avatars/1.jpg'

const WidgetMainProfile = () => {
  const [activeKey, setActiveKey] = useState(1)
  
  return (
    <>
      <div className='content-background container p-4'>
        <CRow className='pb-3'>
          <CCol className='col-sm-auto'>
            <CImage class="rounded float-start" src={avatar1} />
          </CCol>
          <CCol className='col-restfill d-flex align-content-between flex-wrap'>
            <CRow className='align-items-center width-full'>
              <CCol className='profile-reader-name col-sm-auto'>Reader Name</CCol>
              <CCol className='profile-online'><div className="avatar bg-success" style={{width:10, height:10}}></div>Online</CCol>
              <CCol className='text-end'><CIcon icon={cilHeart} size="md" /></CCol>
            </CRow>
            <CRow className='width-full'><CCol className='booking-title'>Headlines Headlines Headlines Headlines</CCol></CRow>
            <CRow className='width-full'>
              <CCol className='filter-subtitle col-sm-auto'>Skills and requirements matched:</CCol>
              <CCol>
                <CRow>
                  <CCol sm="auto" className='border border-info rounded-1 mx-2' >Skill1</CCol>
                  <CCol sm="auto" className='border border-info rounded-1 mx-2'>Skill2</CCol>
                  <CCol sm="auto" className='border border-info rounded-1 mx-2'>Skill3</CCol>
                  <CCol className='booking-title'>+2 more</CCol>
                </CRow>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
        <CRow className='pb-3'>
          <CNav variant="tabs" role="tablist" className='tab-text'>
            <CNavItem>
              <CNavLink
                href={void (0)}
                active={activeKey === 1}
                onClick={() => setActiveKey(1)}
              >
                Overview
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                href={void (0)}
                active={activeKey === 2}
                onClick={() => setActiveKey(2)}
              >
                Video Introduction
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                href={void (0)}
                active={activeKey === 3}
                onClick={() => setActiveKey(3)}
              >
                Reviews
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent className='border-bottom pb-2'>
            <CTabPane className='p-2' role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
              brief self introduction brief self introduction brief self introduction brief self introduction brief self introduction brief self introduction brief self introduction brief self introduction brief self introduction brief self introduction ...
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
              Pending
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
              Past
            </CTabPane>
          </CTabContent>
        </CRow>
        <CRow className='profile-title pb-2'>
          Experiences
        </CRow>
        <CRow className='filter-subtitle pb-2'>
          Certificated Coach
        </CRow>
        <CRow>
          <CCol>
            <CImage src={ActorSchool} width={26} height={20}/> Actor School, Issued Jul 2020
          </CCol>
        </CRow>
        <CRow className='pb-3'>
          <CCol>
            <CImage src={Endorsement} width={26} height={20}/> 2 endorsements
          </CCol>
        </CRow>
        <CRow className='filter-subtitle pb-2'>
          Skills
        </CRow>
        <CRow>
          <CCol sm="auto" className='border border-info rounded-4 mx-2' >Skill1</CCol>
          <CCol sm="auto" className='border border-info rounded-4 mx-2'>Skill2</CCol>
          <CCol sm="auto" className='border border-info rounded-4 mx-2'>Skill3</CCol>
        </CRow>
      </div>
    </>
  )
}

export default WidgetMainProfile
