import React from 'react'
import {
  CContainer,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CLink,
  CRow,
  CCardText
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { cilTag, cilVideo, cilClock } from '@coreui/icons'

const WidgetHourlySessionTotalhour = () => {
   return (
        <CRow className='p-3 bg-body rounded-3'>
            <CCol>
                <CRow className='h-100'>
                    <CCol xs={3} className='profile-hourly-icon-container justify-content-center mt-2 mb-2 p-1 rounded-2'>
                        <CIcon className='profile-hourly-icon w-100 h-100' icon={cilTag} />
                    </CCol>
                    <CCol xs={9} className="justify-content-start">
                        <CCol className='profile-hourly-rate'>$35</CCol>
                        <CCol className='profile-hourly-per'>per 15 mins</CCol>
                    </CCol>
                </CRow>
            </CCol>
            <CCol>
                <CRow className='h-100'>
                    <CCol xs={3} className='profile-hourly-icon-container justify-content-center mt-2 mb-2 p-1 rounded-2'>
                        <CIcon className='profile-hourly-icon w-100 h-100' icon={cilVideo} />
                    </CCol>
                    <CCol xs={9} className="justify-content-start">
                        <CCol className='profile-hourly-rate'>5</CCol>
                        <CCol className='profile-hourly-per'>sessions</CCol>
                    </CCol>
                </CRow>
            </CCol>
            <CCol>
                <CRow className='h-100'>
                    <CCol xs={3} className='profile-hourly-icon-container justify-content-center mt-2 mb-2 p-1 rounded-2'>
                        <CIcon className='profile-hourly-icon w-100 h-100' icon={cilClock} />
                    </CCol>
                    <CCol xs={9} className="justify-content-start">
                        <CCol className='profile-hourly-rate'>15</CCol>
                        <CCol className='profile-hourly-per'>total hours</CCol>
                    </CCol>
                </CRow>
            </CCol>
        </CRow>
   )
}

export default WidgetHourlySessionTotalhour
