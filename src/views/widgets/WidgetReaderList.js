import React from 'react'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import { AppReader } from 'src/components'

const WidgetReaderList = () => {
  
  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <AppReader />
      </CCol>
      <CCol sm={6} lg={3}>
        <AppReader />
      </CCol>
      <CCol sm={6} lg={3}>
        <AppReader />
      </CCol>
      <CCol sm={6} lg={3}>
        <AppReader />
      </CCol>
    </CRow>
  )
}

export default WidgetReaderList
