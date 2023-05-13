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
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CForm,
  CContainer,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsLibFolder from '../widgets/WidgetLibFolder'
import WidgetsLibFile from '../widgets/WidgetLibFile'

const Library = () => {

  return (
    <>
    <CContainer fluid className='perfect-xpadding'>
      <CForm className="row g-3 content-background mt-3 px-2">
        <CCol xs={12}>
          <p className='title-text'>Library</p>
        </CCol>
        <CCol xs={12}>
          <p className='comment-text'>You have 4 video in total</p>
        </CCol>
        <CCol xs={12}>
        <p className='comment-text'>Folders</p>
        </CCol>
        <CCol xs={12}>
          <WidgetsLibFolder />
        </CCol>
        <CCol xs={12}>
        <p className='comment-text'>Files</p>
        </CCol>
        <CCol xs={12}>
          <WidgetsLibFile />
        </CCol>
      </CForm>
    </CContainer>
    </>
  )
}

export default Library
