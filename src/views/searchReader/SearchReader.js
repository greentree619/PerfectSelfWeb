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

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetReaderList from '../widgets/WidgetReaderList'

const SearchReader = () => {

  return (
    <>
      <CContainer fluid className='perfect-xpadding'>
        <CRow className='content-background mt-3 p-2'>
          <CCol md={3}>
            <CForm className="row g-3 content-background mt-3 px-2">
              <CRow className='filter-subtitle pt-2'>Filter</CRow>
              <CRow className='filter-subtitle pt-2'>Availability</CRow>
              <CRow>
                <CCol className='filter-comment pt-1 col-10'><CFormLabel htmlFor="switchAsap">Available ASAP</CFormLabel></CCol>
                <CCol className='col-2'><CFormSwitch reverse id="switchAsap"/></CCol>
              </CRow>
              <CRow className='border-bottom pb-2'>
                <CCol className='filter-comment pt-1 col-10'><CFormLabel htmlFor="switchNow">Online Now</CFormLabel></CCol>
                <CCol className='col-2'><CFormSwitch reverse id="switchNow"/></CCol>
              </CRow>
              <CRow className='filter-subtitle pt-2'>Available date(s)</CRow>
              <CRow className='filter-comment pt-1 border-bottom pb-2'>
                <CCol md={6} className='px-1'>
                  <CFormInput
                    type="date"
                    id="dateFrom"
                    floatingLabel="From"
                    placeholder="MM/DD/YYYY"
                    defaultValue=""
                  />
                </CCol>
                <CCol md={6} className='px-1'>
                  <CFormInput
                    type="date"
                    id="dateTo"
                    floatingLabel="To"
                    placeholder="MM/DD/YYYY"
                  />
                </CCol>
              </CRow>
              <CRow className='filter-subtitle pt-2'>Available timeslot</CRow>
              <CRow className='filter-comment pt-1'><CFormCheck id="check15Minds" label="15 mins"/></CRow>
              <CRow className='filter-comment pt-1'><CFormCheck id="check30Minds" label="30 mins"/></CRow>
              <CRow className='filter-comment pt-1 border-bottom pb-2'><CFormCheck id="check45MindsP" label="45 mins+"/></CRow>
              <CRow className='filter-subtitle pt-2'>Price</CRow>
              <CRow className='filter-comment pt-1'>
                <CCol><CFormLabel className='filter-price-comment' htmlFor="inputMin">MIN</CFormLabel></CCol>
                <CCol><CFormLabel className='filter-price-comment'htmlFor="inputMax">MAX</CFormLabel></CCol>
                <CCol></CCol>
              </CRow>
              <CRow className='filter-comment border-bottom pb-2'>
                <CCol>
                  <CInputGroup className='input-group-sm'>
                    <CFormInput aria-label="" id="inputMin"/>
                    <CInputGroupText>$</CInputGroupText>
                  </CInputGroup>
                </CCol>
                <CCol>
                  <CInputGroup className='input-group-sm'>
                    <CFormInput aria-label="" id="inputMax"/>
                    <CInputGroupText>$</CInputGroupText>
                  </CInputGroup>
                </CCol>
                <CCol><CButton className='btn-sm' color="dark" variant="outline">Apply</CButton></CCol>
              </CRow>
              <CRow className='filter-subtitle pt-2'>Gender</CRow>
              <CRow className='filter-comment pt-1'><CFormCheck id="checkMale" label="Male"/></CRow>
              <CRow className='filter-comment pt-1 border-bottom pb-2'><CFormCheck id="checkFemale" label="Female"/></CRow>
              <CRow className='filter-subtitle pt-2'>Audition Type</CRow>
              <CRow className='filter-comment pt-1'><CFormCheck id="checkCommercial" label="Commercial read"/></CRow>
              <CRow className='filter-comment pt-1'><CFormCheck id="checkShort" label="Short read"/></CRow>
              <CRow className='filter-comment pt-1 border-bottom pb-2'><CFormCheck id="checkExtended" label="Extended read"/></CRow>
              <CRow className='border-bottom pb-2 pt-2'>
                <CCol className='filter-comment pt-1 col-10'><CFormLabel htmlFor="switchExplicitRead">Comfortable with explicit read</CFormLabel></CCol>
                <CCol className='col-2'><CFormSwitch reverse id="switchExplicitRead"/></CCol>
              </CRow>
              <CRow className='filter-subtitle pt-2'>Already have a reader in mind?</CRow>
              <CRow className='filter-comment pt-1'>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <CIcon icon={cilSearch} size="md" />
                  </span>
                  <CFormInput></CFormInput>
                </div>
              </CRow>
            </CForm>
          </CCol>
          <CCol xs={9}>
            <WidgetReaderList />
            <WidgetReaderList />
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default SearchReader
