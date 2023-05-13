import React from 'react'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import { LibFile } from 'src/components'

const WidgetsLibFile = () => {
  
  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <LibFile />
      </CCol>
      <CCol sm={6} lg={3}>
        <LibFile />
      </CCol>
      <CCol sm={6} lg={3}>
        <LibFile />
      </CCol>
      <CCol sm={6} lg={3}>
        <LibFile />
      </CCol>
    </CRow>
  )
}

export default WidgetsLibFile
