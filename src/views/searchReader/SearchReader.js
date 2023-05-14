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
            <WidgetReaderList />
            <WidgetReaderList />
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default SearchReader
