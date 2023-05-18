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
  CButton,
  CImage
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { cilTag, cilVideo, cilClock } from '@coreui/icons'
import { TimeSlot, TimeSlotShow } from 'src/components'

const WidgetAvailableReaders = () => {
   return (
        <CRow className='p-3 bg-body rounded-3'>
            <CCol >
                <CRow className='profile-Available-Time-Slot mb-2'>Other Readers Available</CRow>
                <CRow>
                    <CCol className='p-0 me-3'><CButton color='light' className='p-0'><CImage className='rounded-2' src="https://upcdn.io/W142hqB/raw/uploads/2023/05/05/2-4Ma7.png" fluid /></CButton></CCol>
                    <CCol className='p-0 me-3'><CButton color='light' className='p-0'><CImage className='rounded-2' src="https://upcdn.io/W142hqB/raw/uploads/2023/05/05/2-4Ma7.png" fluid /></CButton></CCol>
                    <CCol className='p-0 me-3'><CButton color='light' className='p-0'><CImage className='rounded-2' src="https://upcdn.io/W142hqB/raw/uploads/2023/05/05/2-4Ma7.png" fluid /></CButton></CCol>
                </CRow>
            </CCol>
        </CRow>
        
   )
}

export default WidgetAvailableReaders
