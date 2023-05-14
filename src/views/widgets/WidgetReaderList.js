import React from 'react'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import { AppReader } from 'src/components'

const WidgetReaderList = () => {
  
  return (
    <>
      <CRow className='row-cols-auto'>
        <CCol>
          <AppReader />
        </CCol>
        <CCol>
          <AppReader />
        </CCol>
        <CCol>
          <AppReader />
        </CCol>
        <CCol>
          <AppReader />
        </CCol>
        <CCol>
          <AppReader />
        </CCol>
        <CCol>
          <AppReader />
        </CCol>
        <CCol>
          <AppReader />
        </CCol>
        <CCol>
          <AppReader />
        </CCol>
      </CRow>
    </>
  )
}

export default WidgetReaderList
