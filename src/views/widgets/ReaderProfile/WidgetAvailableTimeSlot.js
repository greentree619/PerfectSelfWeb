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
  CCardText,
  CWidgetDivider, 
  CButton
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { cilTag, cilVideo, cilClock } from '@coreui/icons'
import { TimeSlot, TimeSlotShow } from 'src/components'

const WidgetAvailableTimeSlot = () => {
   return (
        <CRow className='p-3 bg-body rounded-3'>
            <CCol >
                <CRow className='profile-Available-Time-Slot'>Available time slots</CRow>
                <CRow className='profile-Available-Time-Zone'>In your local timezone (America/ Detroit)</CRow>
                <CRow className='mt-3'><hr /></CRow>
                <CRow>
                    <CCol className='p-0 me-3'><TimeSlot /></CCol>
                    <CCol className='p-0 me-3'><TimeSlot /></CCol>
                    <CCol className='p-0 me-3'><TimeSlot /></CCol>
                    <CCol className='profile-Available-Time-Slot-ViewAll p-0'>View All{'>'}</CCol>
                </CRow>
                <CRow className='mt-3'><hr /></CRow>
                <CRow className="d-flex justify-content-start">
                    <CCol className='p-0'>
                        <TimeSlotShow />
                        <TimeSlotShow />
                    </CCol>
                </CRow>
                <CRow className='mt-3'><CButton>Book an Appointment</CButton></CRow>
            </CCol>
        </CRow>
        
   )
}

export default WidgetAvailableTimeSlot
