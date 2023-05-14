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
  CFormCheck,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CContainer,
  CForm,
  CFormInput,
  CFormSwitch,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CDatePicker,
  CFormSelect,
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
  cilSearch,
} from '@coreui/icons'

import WidgetReaderList from '../widgets/WidgetReaderList'
import { FilterSetting } from 'src/components'

const SearchReader = () => {

  return (
    <>
      <CContainer fluid className='perfect-xpadding'>
        <CRow className='content-background mt-3 p-2'>
          <CCol md={3}>
            <FilterSetting/>            
          </CCol>
          <CCol xs={9}>
            <CRow className='my-2'>
              <CCol className='text-start d-flex align-items-center filter-comment'>123 Readers listed </CCol>
              <CCol className=''></CCol>
              <CCol className='d-flex align-items-center justify-content-end filter-comment'>Sort by</CCol>
              <CCol className=''>
                <div className="align-self-center">
                  <CFormSelect size="sm" aria-label="Small select example">
                    <option>Recommended</option>
                    <option value="1">Availability</option>
                    <option value="2">Experience</option>
                    <option value="3">Rating</option>
                  </CFormSelect>
                </div>
              </CCol>
            </CRow>
            <WidgetReaderList />
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default SearchReader
