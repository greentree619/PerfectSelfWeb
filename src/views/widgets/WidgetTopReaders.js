import React from 'react'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import { AppReader } from 'src/components'

const WidgetTopReaders = () => {
  
  return (
    <CRow>
      <CCol lg={3}>
        <AppReader />
      </CCol>
      <CCol lg={3}>
        <AppReader />
      </CCol>
      <CCol lg={3}>
        <AppReader />
      </CCol>
      <CCol lg={3}>
        <AppReader />
      </CCol>
    </CRow>
  )
}

export default WidgetTopReaders
